
import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00966d] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">C</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">Cheree</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#problem" className="hover:text-[#00966d] transition-colors">Problema</a>
            <a href="#solution" className="hover:text-[#00966d] transition-colors">Soluția</a>
            <a href="#community" className="hover:text-[#00966d] transition-colors">Comunitate</a>
          </div>

          <div className="flex items-center">
            <button 
              onClick={onCtaClick}
              className="bg-[#00966d] hover:bg-[#00815d] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm active:scale-95"
            >
              Intră pe listă
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
