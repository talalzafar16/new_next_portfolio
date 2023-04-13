export default function smoothScroll(target: HTMLElement, duration: number) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
  
    function animation(currentTime: number) {
      const elapsedTime = currentTime - startTime;
      const scrollPosition = easeInOut(elapsedTime, startPosition, distance, duration);
      window.scrollTo(0, scrollPosition);
      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      }
    }
  
    function easeInOut(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  