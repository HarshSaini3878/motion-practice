'use client'

import { motion,useDragControls } from "motion/react";


const DraggableCard = () => {
  const controls = useDragControls();

  return (
    <motion.div
      className='w-40 h-40 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold'
      drag
      dragControls={controls}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.3}
    >
      Drag me
    </motion.div>
  );
};

export default DraggableCard;
