export function getTitleAnimation(delay = 0, duration = 0.3, once = true) {
  return {
    initial: { opacity: 0.001, translateY: 20, filter: 'blur(4px)' },
    whileInView: {
      opacity: 1,
      translateY: 0,
      filter: 'blur(0px)',
      transition: { duration, delay },
    },
    viewport: { once },
  }
}

export function getZoomInAnimation(delay = 0) {
  return {
    initial: { scale: 0.8, opacity: 0.001 },
    whileInView: { scale: 1, opacity: 1, transition: { duration: 0.2, delay } },
  }
}
