import React from 'react';
import { Star, MapPin, ShieldCheck, Zap, Hammer, Wrench } from 'lucide-react';

const ToolsShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00966d]/10 text-[#00966d] text-xs font-bold uppercase tracking-widest mb-6 border border-[#00966d]/20">
            <Hammer className="w-3 h-3" />
            Echipament Profesional
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] tracking-tight">
            Unelte de top pentru <span className="text-[#00966d]">proiectele tale</span>
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Main Listing Card */}
          <div className="relative z-10 bg-white p-4 sm:p-8 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-50 transform hover:scale-[1.02] transition-all duration-700 ease-out">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/10] mb-8 group">
              <img 
                src="https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional Drill Set" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-black text-[#1a1a1a]">5.0</span>
              </div>
              <div className="absolute bottom-6 left-6 bg-[#00966d] text-white text-xs font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-lg">
                Heavy Duty
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-2">Set Mașină de Găurit Dewalt</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#00966d]" />
                  București, Sector 2 • 1.2 km
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                  <img src="https://i.pravatar.cc/100?u=tool_owner" alt="Owner" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1a1a1a]">Mihai T.</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Meșter Verificat</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#00966d]">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -bottom-8 -right-8 sm:-right-16 z-20 bg-[#1a1a1a] text-white p-5 rounded-[2rem] shadow-2xl flex items-center gap-4 max-w-[240px] animate-bounce-slow">
            <div className="w-12 h-12 bg-[#00966d] rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="font-bold text-sm">Garanție Cheree</div>
              <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Siguranță totală</div>
            </div>
          </div>

          <div className="absolute -top-12 -left-8 sm:-left-16 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-float">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-[#00966d]">
              <Zap className="w-6 h-6" />
            </div>
            <div className="pr-4">
              <div className="text-[10px] font-black text-[#00966d] uppercase tracking-widest">Profitabil</div>
              <div className="text-sm font-bold text-[#1a1a1a]">Recuperează investiția</div>
            </div>
          </div>

          {/* Background Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-green-100/30 rounded-full blur-[120px] -z-10"></div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow-tools {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-tools {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-18px) rotate(-2deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow-tools 4.5s ease-in-out infinite;
        }
        .animate-float {
          animation: float-tools 6.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ToolsShowcase;
