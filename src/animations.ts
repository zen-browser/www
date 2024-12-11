
export function getTitleAnimation(delay = 0) {
  return {
    initial: { opacity: 0, translateY: 20, filter: 'blur(4px)' },
    whileInView: { opacity: 1, translateY: 0, filter: 'blur(0px)', transition: { duration: 0.3, delay } },
  };
}
