import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * Animated metric: counts from 0 up to `to` when it scrolls into view.
 * The markup carries data-count-to / data-count-suffix so the WordPress build can
 * reuse the same behaviour with wordpress/count-up.js (no React needed).
 * Respects prefers-reduced-motion (shows the final number straight away).
 */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function CountUp({
  to,
  suffix = '',
  duration = 2200,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  // Start from 0 before first paint so the final number never flashes.
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setValue(0);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(Math.max((now - start) / duration, 0), 1);
        setValue(Math.round(to * easeOutCubic(p)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} data-count-to={to} data-count-suffix={suffix} aria-label={`${to}${suffix}`}>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
    </span>
  );
}
