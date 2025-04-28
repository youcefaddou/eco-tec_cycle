"use client";
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

/**
 * Hook pour animer un composant à l'entrée dans le viewport ET à chaque rechargement de page.
 * @param {Object} options - options pour l'animation (ex: { y: 40, duration: 0.7 })
 * @returns {Object} { ref, MotionWrapper, inView }
 */
export function useInViewAnimation(options = {}) {
  const ref = useRef(null);
  // Animation à chaque entrée dans le viewport (scroll) et à chaque reload
  const inView = useInView(ref, { once: false, margin: '-40px' });
  const {
    y = 40,
    opacity = 0,
    duration = 0.7,
    delay = 0,
    ...rest
  } = options;

  // MotionWrapper à utiliser autour de l'élément à animer
  const MotionWrapper = ({ children, ...props }) => (
    <motion.div
      ref={ref}
      initial={{ opacity, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity, y }}
      transition={{ duration, delay, ...rest }}
      {...props}
    >
      {children}
    </motion.div>
  );

  return { ref, MotionWrapper, inView };
} 
