
import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Loader2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'email' | 'verify' | 'success'>('email');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/send-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Eroare. Încearcă din nou.');
      setStep('verify');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Eroare. Încearcă din nou.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Cod incorect. Încearcă din nou.');
      setStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Cod incorect. Încearcă din nou.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Email subscription box */}
        <div className="mb-10 bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">Fii primul care află</h3>
            <p className="text-sm text-gray-500">Abonează-te pentru a primi noutăți despre lansarea Cheree.</p>
          </div>

          <div className="flex-1 w-full">
            {step === 'email' && (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="adresa@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#00966d] text-sm"
                />
                <button
                  disabled={isLoading}
                  className="bg-[#00966d] hover:bg-[#00815d] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send className="w-4 h-4" /> Abonează-te</>}
                </button>
                {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
              </form>
            )}

            {step === 'verify' && (
              <form onSubmit={handleVerifySubmit} className="flex flex-col gap-3">
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Mail className="w-4 h-4 text-[#00966d]" />
                  Am trimis un cod pe <strong className="text-[#1a1a1a]">{email}</strong>
                </p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Cod de verificare"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    maxLength={6}
                    className="flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#1a1a1a] text-center font-mono tracking-widest text-sm focus:outline-none focus:ring-2 focus:ring-[#00966d]"
                  />
                  <button
                    disabled={isLoading}
                    className="bg-[#00966d] hover:bg-[#00815d] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><CheckCircle className="w-4 h-4" /> Verifică</>}
                  </button>
                </div>
                {error && <p className="text-xs text-red-500">{error}</p>}
                <button type="button" onClick={() => { setStep('email'); setOtp(''); setError(''); }} className="text-xs text-gray-400 hover:text-[#00966d] text-left">
                  Înapoi
                </button>
              </form>
            )}

            {step === 'success' && (
              <div className="flex items-center gap-3 text-[#00966d]">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="text-sm font-semibold">Emailul a fost verificat! Te vom anunța la lansare.</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#00966d] rounded-md flex items-center justify-center">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-[#1a1a1a]">Cheree</span>
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-[#00966d] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#00966d] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#00966d] transition-colors">LinkedIn</a>
          </div>

          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Cheree România. Toate drepturile rezervate.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
