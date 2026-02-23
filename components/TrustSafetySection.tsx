import React from 'react';
import { UserCheck, ShieldCheck, Users, Star, Lock } from 'lucide-react';

const TrustSafetySection: React.FC = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#00966d]" />,
      title: "Profiluri 100% verificate",
      description: "Nu închiriezi unor străini de pe net. Verificăm identitatea fiecărui utilizator prin procese riguroase de KYC."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00966d]" />,
      title: "Tranzacții și Garanții",
      description: "Sistem de garanție reținută pe card și recenzii reale. Echipamentul tău este în siguranță pe toată durata închirierii."
    },
    {
      icon: <Users className="w-8 h-8 text-[#00966d]" />,
      title: "Comunitate",
      description: "Închiriezi doar cui vrei tu, în funcție de istoricul, ratingul și feedback-ul primit de chiriaș de la alți proprietari."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00966d]/10 text-[#00966d] text-xs font-bold uppercase tracking-widest mb-6 border border-[#00966d]/20">
            <Lock className="w-3 h-3" />
            Siguranța pe primul loc
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] tracking-tight mb-6">
            Încredere totală în <span className="text-[#00966d]">fiecare schimb</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Am construit Cheree cu un singur scop: să facem închirierea între persoane la fel de sigură ca o tranzacție bancară.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 sm:p-12 rounded-[3rem] bg-[#00966d] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-2xl sm:text-3xl font-black mb-4">Echipamentul tău este protejat</h4>
              <p className="text-white/80 text-lg">
                Fiecare tranzacție este monitorizată, iar sistemul nostru de rating asigură că doar cei mai de încredere membri rămân în comunitate.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#00966d] bg-white/20 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=trust_${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-white" />
                  <span>4.9/5 Rating Mediu</span>
                </div>
                <div className="opacity-70">în comunitate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;
