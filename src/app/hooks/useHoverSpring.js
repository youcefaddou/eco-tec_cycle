import { useMemo } from 'react';

/**
 * Hook pour animer un composant au survol avec Framer Motion.
 * @param {Object} options - options pour l'animation (ex: { scale: 1.05, shadow: true })
 * @returns {Object} motionProps à passer à motion.div
 */
export function useHoverSpring(options = {}) {
  const {
    scale = 1.05,
    shadow = true,
    transition = { type: 'spring', stiffness: 300, damping: 20 },
    ...rest
  } = options;

  const motionProps = useMemo(() => ({
    whileHover: {
      scale,
      boxShadow: shadow ? '0 8px 32px 0 rgba(16, 185, 129, 0.15)' : undefined,
      ...rest
    },
    transition,
  }), [scale, shadow, transition, rest]);

  return motionProps;
} 