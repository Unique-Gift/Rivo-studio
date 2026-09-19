import { useState } from 'react';

interface NavProps {
  onNavigate: (page: string) => void;
  theme: 'dark' | 'light';
  activePage?: string;
}

export default function Nav({ onNavigate, theme, activePage }: NavProps) {
  const [open, setOpen] = useState(false);
  const isDark = theme === 'dark';

  const linkClass = (page: string) => {
    const isActive = activePage === page;
    if (isDark) return isActive ? 'text-white' : 'text-white/70 hover:text-white';
    return isActive ? 'text-[#c5593b]' : 'text-[#666] hover:text-[#111]';
  };

  const close = (fn: () => void) => () => { fn(); setOpen(false); };

  return (
    <nav className={`flex h-[72px] lg:h-[96px] items-center justify-between px-4 sm:px-8 lg:px-[80px] w-full shrink-0 sticky top-0 z-50 ${isDark ? 'bg-[#111]' : 'bg-white border-[#e0dfdb] border-b border-solid'}`}>
      {/* Logo */}
      <button onClick={() => onNavigate('landing')} className="flex items-center">
        <img src="/assets/fc3fa.svg" alt="Rivo Studio" className="h-9 w-9 lg:h-[40px] lg:w-[40px] object-contain" />
      </button>

      {/* Desktop links */}
      <div className="hidden lg:flex font-['Instrument_Sans:Medium'] font-medium gap-[32px] items-center leading-normal text-[14px]">
        <button onClick={() => onNavigate('products')} className={`transition-colors ${linkClass('products')}`} style={{ fontVariationSettings: '"wdth" 100' }}>Work</button>
        <button onClick={() => onNavigate('about')} className={`transition-colors ${linkClass('about')}`} style={{ fontVariationSettings: '"wdth" 100' }}>About</button>
      </div>

      {/* Right side: desktop CTA + mobile hamburger */}
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className={`hidden lg:block transition-colors px-[20px] py-[10px] rounded-[2px] ${isDark ? 'bg-white/10 hover:bg-white/20 border border-white/20' : 'bg-[#111] hover:bg-[#c5593b]'}`}
        >
          <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-white text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>Start a Project</span>
        </a>
        <button
          className={`lg:hidden p-2 -mr-1 ${isDark ? 'text-white' : 'text-[#111]'}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`lg:hidden absolute top-full left-0 w-full flex flex-col px-4 sm:px-8 pt-6 pb-8 gap-6 ${isDark ? 'bg-[#111]' : 'bg-white border-b border-[#e0dfdb]'}`}>
          <button
            onClick={close(() => onNavigate('products'))}
            className={`font-['Instrument_Sans:Medium'] font-medium text-left text-[22px] transition-colors ${linkClass('products')}`}
            style={{ fontVariationSettings: '"wdth" 100' }}
          >Work</button>
          <button
            onClick={close(() => onNavigate('about'))}
            className={`font-['Instrument_Sans:Medium'] font-medium text-left text-[22px] transition-colors ${linkClass('about')}`}
            style={{ fontVariationSettings: '"wdth" 100' }}
          >About</button>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-1 self-start text-center transition-colors px-6 py-3 rounded-[2px] ${isDark ? 'bg-white/10 border border-white/20' : 'bg-[#111] hover:bg-[#c5593b]'}`}
          >
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold text-white text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>Start a Project</span>
          </a>
        </div>
      )}
    </nav>
  );
}
