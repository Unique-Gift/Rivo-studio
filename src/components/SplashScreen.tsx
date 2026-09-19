import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: Props) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Animation runs for 2.2s, then fade out over 400ms
    const t1 = setTimeout(() => setExiting(true), 2200);
    const t2 = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes logo-grow {
          0%   { width: 32px; }
          100% { width: 120vmax; }
        }
      `}</style>
      <div
        className="fixed inset-0 z-[9999] bg-[#f6f5f2] flex items-center justify-center overflow-hidden"
        style={{
          opacity: exiting ? 0 : 1,
          transition: exiting ? 'opacity 400ms ease-in' : 'none',
          pointerEvents: 'none',
        }}
      >
        <img
          src="/assets/fc3fa.svg"
          alt="Rivo Studio"
          style={{
            animation: 'logo-grow 2.2s cubic-bezier(0.4, 0, 1, 1) forwards',
          }}
        />
      </div>
    </>
  );
}
