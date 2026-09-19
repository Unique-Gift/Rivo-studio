import { useEffect, useRef, useState } from 'react';

export function useParallax(speed = 0.4) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame: number;

    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      // How far the section has scrolled through the viewport, normalised
      const progress = (viewH - rect.top) / (viewH + rect.height);
      setOffset((progress - 0.5) * rect.height * speed);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  return { ref, offset };
}
