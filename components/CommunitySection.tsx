
import React from 'react';
import { ShieldCheck, Users, Quote } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const testimonials = [
    {
      text: "Abia aștept să listez drona mea care stă în dulap. E o idee genială pentru București!",
      name: "Andrei M.",
      role: "Viitor Membru Cheree",
      avatar: "https://i.pravatar.cc/100?u=andrei"
    },
    {
      text: "De ce să dau 1000 de lei pe un cort bun de camping când merg o singură dată pe an? Cheree e soluția perfectă.",
      name: "Elena D.",
      role: "Viitor Membru Cheree",
      avatar: "https://i.pravatar.cc/100?u=elena"
    },
    {
      text: "Am o trusă de scule profesională pe care o folosesc rar. Cheree e modul perfect de a-mi recupera investiția.",
      name: "Dan V.",
      role: "Proprietar Scule",
      avatar: "https://i.pravatar.cc/100?u=dan"
    },
    {
      text: "Căutam o masină de tuns iarba pentru weekend. Să o închiriez de la un vecin e mult mai comod decât să o cumpăr.",
      name: "Maria S.",
      role: "Locuitor București",
      avatar: "https://i.pravatar.cc/100?u=maria"
    },
    {
      text: "Pentru evenimente speciale, Cheree e salvarea. Am închiriat un proiector și totul a mers perfect.",
      name: "Radu C.",
      role: "Organizator Evenimente",
      avatar: "https://i.pravatar.cc/100?u=radu"
    },
    {
      text: "Îmi place conceptul de sustenabilitate. Mai puține lucruri cumpărate, mai multă colaborare locală.",
      name: "Ioana P.",
      role: "Eco Enthusiast",
      avatar: "https://i.pravatar.cc/100?u=ioana"
    }
  ];

  return (
    <section id="community" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="p-3 bg-green-100 rounded-2xl mb-6">
            <ShieldCheck className="w-8 h-8 text-[#00966d]" />
          </div>
          <h2 className="text-4xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">Comunitate locală. Încredere reală.</h2>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Suntem mai mult decât o aplicație. Construim o rețea bazată pe profiluri verificate, recenzii oneste și tranzacții sigure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <Quote className="w-10 h-10 text-green-100 mb-6" />
                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#1a1a1a]">{t.name}</div>
                  <div className="text-sm text-gray-400 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Verification Highlight Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1a1a1a] text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00966d]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#00966d]/30 transition-colors"></div>
            <Users className="w-16 h-16 text-[#00966d] mb-8 animate-pulse" />
            <h4 className="text-3xl font-black mb-4">Vrei să fii printre primii?</h4>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Primii <span className="text-white font-bold">500 de membri</span> primesc cont gratuit și acces la infrastructura noastră de monetizare.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#00966d] text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#00815d] transition-colors cursor-pointer shadow-lg">
              Alătură-te acum
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
