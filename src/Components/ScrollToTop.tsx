// src/ScrollToTop.js
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full border-2 border-primary bg-white text-black hover:bg-primary transition"
        >
          <ArrowUpCircleIcon className='h-8 w-8'/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
