
import React, { useState } from 'react';
import { Send, CheckCircle, Mail } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface WaitingListSectionProps {
  id: string;
  onJoin?: () => void;
}

const WaitingListSection: React.FC<WaitingListSectionProps> = ({ id, onJoin }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState<'email' | 'verify' | 'success'>('email');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [storedEmail, setStoredEmail] = useState('');
  const [storedToken, setStoredToken] = useState('');

  const generateToken = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const sendVerificationEmail = async (recipientEmail: string, code: string) => {
    try {
      const response = await fetch('/api/send-verification-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: recipientEmail,
          code: code,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send verification email');
      }

      return true;
    } catch (err) {
      console.error('Error sending verification email:', err);
      throw err;
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');

    try {
      const token = generateToken();
      
      const { error: insertError } = await supabase
        .from('waiting_list')
        .insert([
          {
            email: email,
            verification_token: token,
            verified: false,
            created_at: new Date().toISOString(),
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      // Send verification code via email
      await sendVerificationEmail(email, token);

      setStoredEmail(email);
      setStoredToken(token);
      setStep('verify');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error submitting email:', err);
    }
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationCode || !storedToken) return;

    setIsLoading(true);
    setError('');

    try {
      if (verificationCode !== storedToken) {
        throw new Error('Codul de verificare este incorect');
      }

      const { error: updateError } = await supabase
        .from('waiting_list')
        .update({ verified: true })
        .eq('email', storedEmail)
        .eq('verification_token', storedToken);

      if (updateError) {
        throw updateError;
      }

      setIsLoading(false);
      setStep('success');
      setEmail('');
      setVerificationCode('');
      if (onJoin) onJoin();
    } catch (err) {
      setIsLoading(false);
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error verifying email:', err);
    }
  };

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[3rem] p-10 sm:p-16 text-center border border-gray-100 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#00966d]/5 rounded-br-[3rem]"></div>
          
          {step === 'email' && (
            <>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
                Începe să <span className="text-[#00966d]">monetizezi</span> astăzi
              </h2>
              <p className="text-xl text-gray-500 mb-12 max-w-lg mx-auto">
                Primii <span className="text-[#1a1a1a] font-bold">500 de membri</span> primesc cont gratuit și acces la cea mai sigură infrastructură pentru a câștiga bani din București.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="relative max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Introdu adresa de email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-2xl bg-white border border-gray-200 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#00966d] transition-all text-lg shadow-sm"
                  />
                  <button
                    disabled={isLoading}
                    className="bg-[#00966d] hover:bg-[#00815d] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Rezervă-mi locul
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
                {error && (
                  <p className="mt-4 text-sm text-red-500 font-medium">
                    {error}
                  </p>
                )}
                <p className="mt-4 text-sm text-gray-400">
                  Fără spam. Doar informații relevante despre lansare.
                </p>
              </form>
            </>
          )}

          {step === 'verify' && (
            <>
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">
                Verifică-ți emailul
              </h2>
              <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto">
                Am trimis un cod de verificare pe <span className="font-bold text-[#1a1a1a]">{storedEmail}</span>. Verifică-ți inbox-ul și introdu codul mai jos.
              </p>
              
              <form onSubmit={handleVerificationSubmit} className="relative max-w-sm mx-auto">
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                    Cod de verificare:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Introdu codul"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.toUpperCase())}
                    maxLength={8}
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-200 text-[#1a1a1a] text-center text-lg font-mono focus:outline-none focus:ring-2 focus:ring-[#00966d] focus:border-transparent transition-all shadow-sm tracking-widest"
                  />
                </div>
                
                <button
                  disabled={isLoading}
                  className="w-full mt-8 bg-[#00966d] hover:bg-[#00815d] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Verifică emailul
                      <CheckCircle className="w-5 h-5" />
                    </>
                  )}
                </button>

                {error && (
                  <p className="mt-4 text-sm text-red-500 font-medium">
                    {error}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setStep('email');
                    setEmail('');
                    setVerificationCode('');
                    setError('');
                  }}
                  className="w-full mt-3 text-gray-600 hover:text-[#00966d] font-medium transition-colors"
                >
                  Înapoi
                </button>
              </form>
            </>
          )}

          {step === 'success' && (
            <div className="py-12 flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 text-[#00966d] rounded-full flex items-center justify-center mb-8 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">Mulțumim pentru încredere!</h3>
              <p className="text-lg text-gray-500 max-w-md mx-auto mb-2">
                Emailul a fost verificat cu succes.
              </p>
              <p className="text-lg text-gray-500 max-w-md mx-auto">
                Te vom anunța imediat ce platforma este gata pentru primii utilizatori din București.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitingListSection;
