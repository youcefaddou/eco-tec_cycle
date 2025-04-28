// Fallback safe pour éviter les erreurs d'import
export function useInViewAnimation() {
  const MotionWrapper = ({ children, ...props }) => <div {...props}>{children}</div>;
  return { ref: null, MotionWrapper, inView: false };
} 