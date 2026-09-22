import type React from 'react';
import { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { useParallax } from '../hooks/useParallax';
import Nav from '../components/Nav';

const WORDS = ['AI', 'B2B'];
const TYPE_SPEED = 90;
const ERASE_SPEED = 60;
const HOLD_MS = 2200;

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<'hold' | 'erase' | 'type'>('hold');
  const [charIdx, setCharIdx] = useState(words[0].length);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (phase === 'hold') {
      timer = setTimeout(() => setPhase('erase'), HOLD_MS);
    } else if (phase === 'erase') {
      if (charIdx === 0) {
        const next = (wordIdx + 1) % words.length;
        setWordIdx(next);
        setPhase('type');
      } else {
        timer = setTimeout(() => {
          const next = charIdx - 1;
          setCharIdx(next);
          setDisplay(words[wordIdx].slice(0, next));
        }, ERASE_SPEED);
      }
    } else {
      const target = words[wordIdx];
      if (charIdx === target.length) {
        setPhase('hold');
      } else {
        timer = setTimeout(() => {
          const next = charIdx + 1;
          setCharIdx(next);
          setDisplay(target.slice(0, next));
        }, TYPE_SPEED);
      }
    }
    return () => clearTimeout(timer);
  }, [phase, charIdx, wordIdx, words]);

  return display;
}

const assetPathPrefix = "/assets";
const imgHero = `${assetPathPrefix}/d5a3b.png`;
const imgWorkImage01 = `${assetPathPrefix}/60696.png`;
const imgWorkImage02 = `${assetPathPrefix}/509bd.png`;
const imgRectangle = `${assetPathPrefix}/5182d.png`;
const imgRectangle1 = `${assetPathPrefix}/e8826.png`;

// Hero floating images
const imgHeroAppointment = `${assetPathPrefix}/hero_appointment.png`;
const imgHeroDashboard = `${assetPathPrefix}/hero_machicare.png`;
const imgHeroMoniref = `${assetPathPrefix}/hero_moniref.png`;
const imgHeroKoretfilm = `${assetPathPrefix}/hero_koretfilm.png`;
const imgEllipse = `${assetPathPrefix}/5c779.svg`;
const imgPlay = `${assetPathPrefix}/399bb.svg`;
const imgArrowUpRight = `${assetPathPrefix}/43698.svg`;
const imgEllipse1 = `${assetPathPrefix}/cabfe.svg`;

interface Props {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: Props) {
  const hero = useParallax(0.35);
  const cycledWord = useTypewriter(WORDS);
  return (
    <div className="bg-white flex flex-col items-start w-full">
      {/* Hero + Nav unified dark section */}
      <section
        ref={hero.ref as React.RefObject<HTMLElement>}
        className="relative bg-[#111] flex flex-col w-full overflow-hidden min-h-[70vh] lg:min-h-screen"
      >
        {/* Sticky nav inside hero so dark bg covers it */}
        <Nav onNavigate={onNavigate} theme="dark" />


        {/* Headline — fills the full width */}
        <div className="flex flex-col items-center justify-center flex-1 px-[4vw] pt-[6vh] pb-[2vh] relative z-10 pointer-events-none select-none">
          <p
            className="font-['Outfit:ExtraBold'] font-extrabold text-[#f0efe9] w-full text-center"
            style={{ fontSize: 'clamp(48px, 16.5vw, 260px)', lineHeight: '0.88', letterSpacing: '-0.02em' }}
          >
            WE DESIGN<br />
            FOR{' '}
            <span style={{ color: '#c5593b' }}>{cycledWord}</span>
            <span style={{ color: '#c5593b', opacity: 1, animation: 'blink 0.75s step-end infinite' }}>|</span>
            <br />
            <span className="font-['Outfit:Light'] font-light">TEAMS.</span>
          </p>


        </div>

        {/* Bottom bar */}
        <div className="relative z-10 border-t border-white/10 flex items-center justify-center px-[4vw] py-[28px]">
          <p
            className="font-['Instrument_Sans:Regular'] font-normal text-white/50 text-[13px] text-center max-w-[420px] leading-[1.5]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            We help ambitious companies build better digital products through strategy, design, and systems that scale.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="flex flex-col gap-[48px] items-start px-4 sm:px-8 lg:px-[80px] py-16 lg:py-[140px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Our Approach</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[32px] items-start w-full">
          <p className="font-['Outfit:Medium'] font-medium leading-[1.2] text-[#111] text-[clamp(28px,3.5vw,48px)] flex-1 min-w-0">
            We believe that better products are built from strong product thinking, user-centered design, and systems that scale.
          </p>
          <div className="flex flex-col gap-[16px] items-start lg:w-[405px] shrink-0">
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              We partner with product teams to define strategy, design intuitive experiences, and ship systems that stay coherent as the product grows.
            </p>
            <button onClick={() => onNavigate('about')} className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[14px] underline decoration-solid" style={{ fontVariationSettings: '"wdth" 100' }}>
              Learn about our studio
            </button>
          </div>
        </div>
      </section>

      {/* Work Section 01 */}
      <section className="flex flex-col gap-[32px] items-start pb-14 lg:pb-[120px] px-4 sm:px-8 lg:px-[80px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Selected Products</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[32px] items-start w-full">
          <div className="flex flex-col gap-[24px] items-start pt-[40px] lg:w-[405px] shrink-0">
            <div className="flex gap-[8px] items-start flex-wrap">
              <div className="bg-white border border-[#e0dfdb] border-solid flex items-start px-[10px] py-[4px] rounded-[2px]">
                <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[#111] text-[11px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Product Strategy</span>
              </div>
              <div className="bg-white border border-[#e0dfdb] border-solid flex items-start px-[10px] py-[4px] rounded-[2px]">
                <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[#111] text-[11px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>UX/UI Design</span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-start w-full">
              <p className="font-['Outfit:Bold'] font-bold leading-normal text-[#111] text-[36px] w-full">MachiCare EHMS</p>
              <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                A complex clinical operating platform designed for medium-to-large-scale hospitals.
              </p>
            </div>
            <div className="border-[#e0dfdb] border-solid border-t flex flex-col gap-[12px] items-start pt-[20px] w-full text-[13px] leading-normal">
              <div className="flex items-start justify-between w-full">
                <span className="font-['Instrument_Sans:Regular'] font-normal text-[#666]" style={{ fontVariationSettings: '"wdth" 100' }}>Client</span>
                <span className="font-['Instrument_Sans:SemiBold'] font-semibold text-[#111]" style={{ fontVariationSettings: '"wdth" 100' }}>MachiTech</span>
              </div>
              <div className="flex items-start justify-between w-full">
                <span className="font-['Instrument_Sans:Regular'] font-normal text-[#666]" style={{ fontVariationSettings: '"wdth" 100' }}>Scope</span>
                <span className="font-['Instrument_Sans:SemiBold'] font-semibold text-[#111]" style={{ fontVariationSettings: '"wdth" 100' }}>Product design, Design System, Prototyping</span>
              </div>
            </div>
          </div>
          <button onClick={() => onNavigate('casestudy')} className="h-[280px] lg:h-[580px] relative rounded-[4px] lg:flex-1 lg:min-w-0 overflow-hidden block w-full">
            <img alt="Solitude Writing App" className="absolute inset-0 object-cover size-full rounded-[4px]" src={imgWorkImage01} />
          </button>
        </div>
      </section>

      {/* Work Section 02 */}
      <section className="flex flex-col items-start pb-16 lg:pb-[140px] px-4 sm:px-8 lg:px-[80px] w-full">
        <div className="flex flex-col lg:flex-row gap-[32px] items-start w-full">
          <div className="h-[280px] lg:h-[580px] relative rounded-[4px] lg:flex-1 lg:min-w-0 overflow-hidden w-full">
            <img alt="Kilo Audio Console" className="absolute inset-0 object-cover size-full rounded-[4px]" src={imgWorkImage02} />
          </div>
          <div className="flex flex-col gap-[24px] items-start pt-[40px] lg:w-[405px] shrink-0">
            <div className="flex gap-[8px] items-start flex-wrap">
              <div className="bg-white border border-[#e0dfdb] border-solid flex items-start px-[10px] py-[4px] rounded-[2px]">
                <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[#111] text-[11px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Product Management</span>
              </div>
              <div className="bg-white border border-[#e0dfdb] border-solid flex items-start px-[10px] py-[4px] rounded-[2px]">
                <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[#111] text-[11px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Design Systems</span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-start w-full">
              <p className="font-['Outfit:Bold'] font-bold leading-normal text-[#111] text-[36px] w-full">Kilo Audio Console</p>
              <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                A complex audio workflow simplified through product management, UX/UI design, and a design system that supports future product iterations.
              </p>
            </div>
            <div className="border-[#e0dfdb] border-solid border-t flex flex-col gap-[12px] items-start pt-[20px] w-full text-[13px] leading-normal">
              <div className="flex items-start justify-between w-full">
                <span className="font-['Instrument_Sans:Regular'] font-normal text-[#666]" style={{ fontVariationSettings: '"wdth" 100' }}>Client</span>
                <span className="font-['Instrument_Sans:SemiBold'] font-semibold text-[#111]" style={{ fontVariationSettings: '"wdth" 100' }}>Kilo Audio</span>
              </div>
              <div className="flex items-start justify-between w-full">
                <span className="font-['Instrument_Sans:Regular'] font-normal text-[#666]" style={{ fontVariationSettings: '"wdth" 100' }}>Scope</span>
                <span className="font-['Instrument_Sans:SemiBold'] font-semibold text-[#111]" style={{ fontVariationSettings: '"wdth" 100' }}>Product Management, UX/UI, Design System</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f6f5f2] flex flex-col gap-[64px] items-start px-4 sm:px-8 lg:px-[80px] py-14 lg:py-[120px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>What We Build</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] w-full">
          {[
            { num: 'I', title: 'Product Strategy', desc: 'We define product direction, prioritize roadmaps, and align cross-functional teams around a clear vision for launch.', items: ['Roadmap Alignment', 'Discovery Workshops', 'Prioritization Frameworks'] },
            { num: 'II', title: 'UX/UI Design', desc: 'We design intuitive interfaces that reduce friction, improve usability, and create a consistent experience across every screen and state.', items: ['User Flows', 'Interaction Design', 'Component Libraries'] },
            { num: 'III', title: 'Design Systems', desc: 'We build reusable systems that keep product teams aligned, reduce design debt, and make future launches faster and more consistent.', items: ['Component Libraries', 'Token Systems', 'Documentation Standards'] },
            { num: 'IV', title: 'User Research & Testing', desc: 'We uncover real user behaviours, validate assumptions early, and run structured testing to ensure every design decision is grounded in evidence.', items: ['Usability Testing', 'User Interviews', 'Insight Synthesis'] },
          ].map(({ num, title, desc, items }) => (
            <div key={num} className="bg-white border border-[#e0dfdb] border-solid flex flex-col gap-[24px] items-start p-[32px] rounded-[4px]">
              <div className="flex flex-col gap-[12px] items-start w-full">
                <p className="font-['Outfit:SemiBold'] font-semibold leading-normal text-[#111] text-[24px] w-full">{title}</p>
                <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{desc}</p>
              </div>
              <div className="border-[#e0dfdb] border-solid border-t flex flex-col font-['Instrument_Sans:Regular'] font-normal gap-[8px] items-start leading-normal pt-[16px] text-[#111] text-[12px] w-full">
                {items.map(item => (
                  <p key={item} style={{ fontVariationSettings: '"wdth" 100' }}>• {item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#f6f5f2] flex flex-col items-center px-4 sm:px-8 lg:px-[80px] py-14 lg:py-[120px] w-full">
        <div className="flex flex-col gap-[24px] items-center max-w-[952px] w-full">
          <p className="font-['Outfit:Regular'] font-normal leading-[1.4] text-[#111] text-[clamp(20px,2vw,32px)] text-center">
            "Rivo Studio operates unlike any agency we've partnered with. They do not pitch generic concepts. They integrated deeply with our product teams, creating a unified digital experience that defined our entire product roadmap."
          </p>
          <div className="flex gap-[12px] items-center">
            <div className="relative rounded-[16px] size-[32px] overflow-hidden shrink-0">
              <img alt="" className="absolute inset-0 object-cover size-full" src={imgRectangle1} />
            </div>
            <div className="flex flex-col gap-[2px] items-start leading-normal">
              <p className="font-['Instrument_Sans:Bold'] font-bold text-[#111] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>Marcus Arhn</p>
              <p className="font-['Instrument_Sans:Regular'] font-normal text-[#666] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>VP of Product, Oasis</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Footer */}
      <footer className="bg-[#f6f5f2] flex flex-col gap-x-[80px] gap-y-[40px] items-start pb-[48px] pt-14 lg:pt-[96px] px-4 sm:px-8 lg:px-[80px] w-full overflow-hidden">
        <div className="flex items-start justify-between w-full flex-wrap gap-8">
          <div className="flex flex-col gap-[16px] items-start w-full sm:w-[320px]">
            <img src="/assets/rivo_logo_nobg.svg" alt="Rivo Studio" className="h-[56px] w-[56px] object-contain" />
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.5] text-[#666] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              A product design and product management studio helping companies build better digital products.
            </p>
          </div>
          {[
            { heading: 'Selected Products', links: ['Solitude OS', 'Kilo Audio Console', 'Oasis Ambient', 'Rimowa Travel OS'] },
            { heading: 'Network', links: ['Instagram', 'LinkedIn'] },
          ].map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-[16px] items-start leading-normal">
              <p className="font-['Instrument_Sans:Bold'] font-bold text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>{heading}</p>
              {links.map(link => <p key={link} className="font-['Instrument_Sans:Regular'] font-normal text-[#666] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>{link}</p>)}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[24px] items-start w-full">
          <p
            aria-hidden
            className="font-['Outfit:ExtraBold'] font-extrabold text-[#e0dfdb] w-full leading-none select-none text-center whitespace-nowrap"
            style={{ fontSize: 'clamp(54px, 13vw, 260px)', letterSpacing: '-0.03em' }}
          >
            RIVO STUDIO
          </p>
          <div className="border-[#e0dfdb] border-solid border-t flex flex-col sm:flex-row font-['Instrument_Sans:Regular'] font-normal items-center justify-center leading-normal pt-3 text-[#666] text-[12px] w-full gap-3">
            <p style={{ fontVariationSettings: '"wdth" 100' }}>© 2025 Rivo Studio. All rights reserved.</p>
            <div className="flex gap-[24px] items-start">
              <p style={{ fontVariationSettings: '"wdth" 100' }}>Privacy Policy</p>
              <p style={{ fontVariationSettings: '"wdth" 100' }}>Terms of Use</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
