
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
