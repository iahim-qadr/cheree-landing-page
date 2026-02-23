
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface WaitingListSectionProps {
  id: string;
  onJoin?: () => void;
}

const WaitingListSection: React.FC<WaitingListSectionProps> = ({ id, onJoin }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('waiting_list')
        .insert([
          {
            email: email,
            created_at: new Date().toISOString(),
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      setIsLoading(false);
      setIsSubmitted(true);
      if (onJoin) onJoin();
    } catch (err) {
      setIsLoading(false);
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error submitting email:', err);
    }
  };

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[3rem] p-10 sm:p-16 text-center border border-gray-100 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#00966d]/5 rounded-br-[3rem]"></div>
          
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
                Începe să <span className="text-[#00966d]">monetizezi</span> astăzi
              </h2>
              <p className="text-xl text-gray-500 mb-12 max-w-lg mx-auto">
                Primii <span className="text-[#1a1a1a] font-bold">500 de membri</span> primesc cont gratuit și acces la cea mai sigură infrastructură pentru a câștiga bani din București.
              </p>
              
              <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
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
          ) : (
            <div className="py-12 flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 text-[#00966d] rounded-full flex items-center justify-center mb-8 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">Mulțumim pentru încredere!</h3>
              <p className="text-lg text-gray-500 max-w-md mx-auto">
                Ești pe listă. Te vom anunța imediat ce platforma este gata pentru primii utilizatori din București.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitingListSection;
