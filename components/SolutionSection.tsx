
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-[#00966d] text-white overflow-hidden relative">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Cheree transformă lucrurile în bani.
          </h2>
          <div className="w-24 h-1.5 bg-white/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/15 transition-colors">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-white text-[#00966d] rounded-xl text-xl">1</span>
              Pentru proprietari
            </h3>
            <ul className="space-y-6">
              {[
                "Listezi orice obiect în mai puțin de 2 minute",
                "Câștigi bani din obiecte care stau degeaba",
                "Proces simplu, plăți securizate și fără bătăi de cap",
                "Asigurare inclusă pentru fiecare închiriere",
                "Control total asupra prețului și disponibilității",
                "Infrastructură sigură pentru monetizare constantă"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-lg">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0 text-white" />
                  <span className="opacity-90">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/15 transition-colors">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-white text-[#00966d] rounded-xl text-xl">2</span>
              Pentru chiriași
            </h3>
            <ul className="space-y-6">
              {[
                "Găsești rapid tot ce ai nevoie în zona ta",
                "Economisești bani evitând achizițiile inutile",
                "Acces la echipamente premium la o fracțiune de preț",
                "Fără costuri de întreținere sau depozitare",
                "Eficiență maximă: plătești doar cât folosești",
                "Tranzacții transparente și suport dedicat"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-lg">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0 text-white" />
                  <span className="opacity-90">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
