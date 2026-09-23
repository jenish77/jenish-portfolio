export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const springPop = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

export const hoverCard = {
  rest: { scale: 1, y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.4)" },
  hover: {
    scale: 1.025,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.25), 0 10px 10px -5px rgba(147, 51, 234, 0.2)",
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  tap: { scale: 0.98 }
};

export const hoverBadge = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.1, 
    y: -2,
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  }
};

export const hoverButton = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05, 
    y: -2,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  tap: { scale: 0.95 }
};
