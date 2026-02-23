import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// In-memory OTP store: email -> { otp, expiresAt }
const otpStore = new Map();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post('/api/send-verification-email', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email este necesar' });
    }

    const otp = generateOTP();
    otpStore.set(email.toLowerCase(), {
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minute
    });

    const mailOptions = {
      from: `"Cheree" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Codul tău de verificare Cheree',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="background: #00966d; padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Cheree</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Nu cumpăra. Închiriază.</p>
          </div>
          <div style="padding: 40px 32px;">
            <h2 style="color: #1a1a1a; margin: 0 0 16px; font-size: 22px;">Verifică-ți adresa de email</h2>
            <p style="color: #6b7280; margin: 0 0 32px; font-size: 15px; line-height: 1.6;">Folosește codul de mai jos pentru a te înregistra pe lista de așteptare Cheree. Codul este valabil <strong>10 minute</strong>.</p>
            <div style="background: #f9fafb; border: 2px dashed #00966d; border-radius: 12px; padding: 28px; text-align: center; margin-bottom: 32px;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">Codul tău</p>
              <p style="margin: 0; font-size: 42px; font-weight: 900; color: #00966d; letter-spacing: 10px; font-family: monospace;">${otp}</p>
            </div>
            <p style="color: #9ca3af; font-size: 13px; margin: 0;">Dacă nu ai solicitat acest cod, poți ignora acest email în siguranță.</p>
          </div>
          <div style="background: #f9fafb; padding: 20px 32px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">© 2026 Cheree România. Toate drepturile rezervate.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`OTP trimis pe ${email}`);
    res.json({ success: true });
  } catch (error) {
    console.error('Eroare la trimiterea emailului:', error);
    res.status(500).json({ error: 'Eroare la trimiterea emailului. Încearcă din nou.' });
  }
});

app.post('/api/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ error: 'Email și cod sunt necesare' });
    }

    const key = email.toLowerCase();
    const stored = otpStore.get(key);

    if (!stored) {
      return res.status(400).json({ error: 'Codul a expirat sau nu există. Solicită un cod nou.' });
    }

    if (Date.now() > stored.expiresAt) {
      otpStore.delete(key);
      return res.status(400).json({ error: 'Codul a expirat (10 minute). Solicită un cod nou.' });
    }

    if (stored.otp !== otp.trim()) {
      return res.status(400).json({ error: 'Cod incorect. Mai încearcă.' });
    }

    otpStore.delete(key);

    // Salvează emailul verificat în waiting_list
    const { error: dbError } = await supabase
      .from('waiting_list')
      .upsert(
        [{
          email: key,
          verification_token: otp,
          verified: true,
          verified_at: new Date().toISOString(),
        }],
        { onConflict: 'email' }
      );

    if (dbError) {
      console.error('Eroare Supabase:', dbError);
      // Continuăm chiar dacă DB-ul eșuează - emailul a fost verificat
    }

    console.log(`Email verificat și salvat: ${key}`);
    res.json({ success: true });
  } catch (error) {
    console.error('Eroare la verificare:', error);
    res.status(500).json({ error: 'Eroare la verificare. Încearcă din nou.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server API rulează pe http://localhost:${PORT}`);
});
