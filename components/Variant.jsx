export const variants = {
    hidden: { scale: 0, y: "100px", opacity: 0 },
    visible: { scale: 1, y: 0, opacity: 1 },    
  }

  export const ExpVariants = {
    hidden: { opacity: 0, y: "100px" },
    visible: { opacity: 1, y: 0 },    
  }

export const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  
export const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };