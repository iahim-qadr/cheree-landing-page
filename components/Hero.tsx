
import React from 'react';
import { ChevronRight, Star, MapPin, ShieldCheck, Zap, Camera, Tent, Hammer, Cpu, CircleChevronRight, Dumbbell, Shovel, PartyPopper } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  subscriberCount: number;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, subscriberCount }) => {
  return (
    <section className="min-h-[85vh] flex items-center pt-20 pb-16 cheree-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00966d]/10 text-[#00966d] text-xs font-bold uppercase tracking-widest mb-8 border border-[#00966d]/20">
            <span className="flex h-2 w-2 rounded-full bg-[#00966d] animate-pulse"></span>
            Primii 500: Cont Gratuit
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#00966d] leading-[0.95] tracking-tight mb-8">
            Nu <span className="relative inline-block">
              cumpăra
              <span className="absolute left-0 top-1/2 w-full h-[6px] bg-[#39ff14] -rotate-2 -translate-y-1/2 rounded-full opacity-80"></span>
            </span> ce<br />
            <span className="text-[#00966d]">poți închiria.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Cheree este <span className="text-[#00966d] font-bold">infrastructura ta pentru a face bani</span>. Transformă obiectele tale în profit, într-un mediu 100% sigur.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mb-16">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-[#00966d] hover:bg-[#00815d] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group"
            >
              Vreau acces prioritar
              <CircleChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="pl-6 text-sm font-bold text-gray-500">
                +{subscriberCount} înscriși
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4 mb-16">
            {[
              { icon: <Camera className="w-5 h-5" />, label: "Foto-Video" },
              { icon: <Tent className="w-5 h-5" />, label: "Camping" },
              { icon: <Hammer className="w-5 h-5" />, label: "Unelte" },
              { icon: <Cpu className="w-5 h-5" />, label: "Electronice" },
              { icon: <Dumbbell className="w-5 h-5" />, label: "Sport" },
              { icon: <Shovel className="w-5 h-5" />, label: "Grădină" },
              { icon: <PartyPopper className="w-5 h-5" />, label: "Evenimente" }
            ].map((cat, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 bg-[#f3f4f6] rounded-2xl border border-gray-100 shadow-sm text-sm font-bold text-gray-600 hover:shadow-md transition-all cursor-default hover:-translate-y-1">
                <span className="text-[#00966d]">{cat.icon}</span>
                {cat.label}
              </div>
            ))}
          </div>

          {/* Centered Visual Card */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative z-10 bg-white p-4 sm:p-6 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-gray-50 transform hover:scale-[1.02] transition-all duration-700 ease-out">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] mb-6 group">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop" 
                  alt="Sony Alpha A7 IV" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                  <span className="text-xs font-black text-[#1a1a1a]">4.9</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#00966d] text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">
                  Verificat
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-1">Sony Alpha A7 IV</h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-[#00966d]" />
                    Sector 1 • 0.8 km
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 sm:-left-12 z-20 bg-[#1a1a1a] text-white p-4 sm:p-5 rounded-3xl shadow-2xl flex items-center gap-4 max-w-[220px] animate-bounce-slow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00966d] rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base">Asigurare</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Inclusă 100%</div>
              </div>
            </div>

            {/* Floating User Notification */}
            <div className="absolute -top-8 -right-4 sm:-right-8 z-20 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#00966d]">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <div className="pr-4">
                <div className="text-[10px] font-black text-[#00966d] uppercase tracking-widest">Nou listat</div>
                <div className="text-xs font-bold text-[#1a1a1a]">Dronă DJI Air 3</div>
              </div>
            </div>

            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-100/30 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

