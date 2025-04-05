'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion';

const FancyButton = () => {
  const x = useMotionValue(0);
  const background = useTransform(x, [0, 300], ['#fca5a5', '#60a5fa']);

  return (
    <motion.button
      onMouseMove={(e) => x.set(e.nativeEvent.offsetX)}
      className='px-6 py-3 rounded-lg text-white font-bold'
      style={{ background }}
    >
      Hover Me
    </motion.button>
  );
};

export default FancyButton;
