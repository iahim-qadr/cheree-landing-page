import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Configure your email service here
// Example with Gmail, SendGrid, or another SMTP service
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Provide the email credentials in `.env.local`
// EMAIL_USER=your_email@gmail.com
// EMAIL_PASSWORD=your_app_password

app.post('/api/send-verification-email', async (req, res) => {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({ error: 'Email și cod sunt necesare' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Codul tău de verificare Cheree',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00966d;">Cheree - Verifică-ți emailul</h2>
          <p>Salut!</p>
          <p>Am primit o cerere de înregistrare cu acest email. Iată codul tău de verificare:</p>
          
          <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="font-size: 32px; font-weight: bold; color: #00966d; letter-spacing: 4px; margin: 0;">
              ${code}
            </p>
          </div>
          
          <p>Codul este valabil pentru 30 de minute.</p>
          <p>Dacă nu ai cerut verificare, ignoră acest email.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="font-size: 12px; color: #999;">
            © 2026 Cheree. Toate drepturile rezervate.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email trimis cu succes' });
  } catch (error) {
    console.error('Eroare la trimiterea emailului:', error);
    res.status(500).json({ error: 'Eroare la trimiterea emailului' });
  }
});

app.listen(PORT, () => {
  console.log(`Server rulează pe http://localhost:${PORT}`);
});
