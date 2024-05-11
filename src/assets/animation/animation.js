export const fadeIn = {
  hidden: { opacity: 0, x: "-50%" },
  visible: { opacity: 1, x: 0 },
  hover: { scale: 1.05 },
};

export const fadeOut = {
  hidden: { opacity: 0, x: "50%", scale: 1 },
  visible: { opacity: 1, x: 0 },
  hover: { scale: 1.05 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: [-20, 100] },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: [-100, 0] },
};

export const appear = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05, transition: { delay: 0, type: "spring" } },
  exit: { scale: 0, opacity: 0 },
};

export const scale = {
  hidden: { scale: 1 },
  visible: { scale: 1.1, duration: "1s" },
};

export const slideVariants = {
  hiddenRight: {
    x: "-50%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "50%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    scale: 0,
    transition: { duration: 1 },
  },
};
