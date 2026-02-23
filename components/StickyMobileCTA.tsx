
import React, { useState, useEffect } from 'react';

interface StickyMobileCTAProps {
  onCtaClick: () => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls past 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:w-auto z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={onCtaClick}
        className="w-full md:px-10 bg-[#00966d]/75 backdrop-blur-md text-white py-4 rounded-2xl font-bold shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 border border-white/20 hover:bg-[#00966d] hover:-translate-y-1"
      >
        <span>Rezervă locul acum</span>
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
      </button>
    </div>
  );
};

export default StickyMobileCTA;
