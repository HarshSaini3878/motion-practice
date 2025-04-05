'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const CursorFollower = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX-15 );
      y.set(e.clientY-15);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className='w-8 h-8 bg-black rounded-full fixed top-0 left-0 pointer-events-none z-50'
      style={{ x: smoothX, y: smoothY }}
    />
  );
};

export default CursorFollower;
