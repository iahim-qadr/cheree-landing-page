
import React from 'react';
import { CircleDollarSign, PackageSearch, Ban } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <CircleDollarSign className="w-6 h-6 text-[#00966d]" />,
      title: "Ții bani blocați",
      description: "În obiecte pe care le folosești o singură dată pe an."
    },
    {
      icon: <Ban className="w-6 h-6 text-[#00966d]" />,
      title: "Nu monetizezi nimic",
      description: "Ce deții deja stă degeaba în loc să îți aducă profit."
    },
    {
      icon: <PackageSearch className="w-6 h-6 text-[#00966d]" />,
      title: "Cumperi din nou",
      description: "De fiecare dată când ai nevoie de ceva, ești nevoit să investești."
    },
    {
      icon: <div className="text-[#00966d] font-bold text-xl">🏠</div>,
      title: "Spațiu irosit",
      description: "Depozitezi lucruri pe care nu le folosești, ocupând loc prețios."
    },
    {
      icon: <div className="text-[#00966d] font-bold text-xl">🌱</div>,
      title: "Impact ecologic",
      description: "Consumul excesiv de produse noi dăunează mediului."
    },
    {
      icon: <div className="text-[#00966d] font-bold text-xl">🔄</div>,
      title: "Lipsă de flexibilitate",
      description: "Ești limitat de ceea ce deții, în loc să ai acces la orice."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] mb-16 tracking-tight">
          Câte lucruri ai cumpărat și le <br className="hidden sm:block" /> folosești de două ori pe an? <br />
          <span className="text-[#00966d] text-xl mt-4 block font-bold uppercase tracking-widest">Eficiență financiară și profit</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-8 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
