'use client';
import { useState } from 'react';
import { motion } from 'motion/react';

const navbar = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Projects', link: '/projects' },
  { title: 'Contact', link: '/contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('Home');

  return (
    <div className='w-screen h-screen relative flex items-center justify-center'>
      <div className='fixed bottom-4 left-1/2 -translate-x-1/2 flex border-2 border-amber-300 rounded-2xl md:rounded-3xl bg-white/70 backdrop-blur-md shadow-xl z-50 px-3 py-2 md:px-6 md:py-3 space-x-1 md:space-x-4 overflow-x-auto max-w-[95%]'>
        {navbar.map((navitem) => (
          <div
            key={navitem.title}
            className='relative cursor-pointer px-2 py-1 text-xs md:px-4 md:py-2 md:text-sm font-medium whitespace-nowrap'
            onClick={() => setActive(navitem.title)}
          >
            {active === navitem.title && (
              <motion.div
                layoutId='highlight'
                className='absolute inset-0 bg-amber-200 rounded-xl z-[-1]'
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {navitem.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
