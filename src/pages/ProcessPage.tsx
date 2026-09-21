import type React from 'react';
import ContactForm from '../components/ContactForm';
import { useParallax } from '../hooks/useParallax';

const assetPathPrefix = "/assets";
const imgHero = `${assetPathPrefix}/0d8e6.png`;
const imgPhase1 = `${assetPathPrefix}/8afa9.png`;
const imgPhase2 = `${assetPathPrefix}/0d716.png`;
const imgPhase3 = `${assetPathPrefix}/e3471.png`;
const imgPhase4 = `${assetPathPrefix}/e9d9b.png`;
const imgTestimonialAvatar = `${assetPathPrefix}/b5d40.png`;
const imgEllipse = `${assetPathPrefix}/5c779.svg`;
const imgArrowRight = `${assetPathPrefix}/c68c4.svg`;
const imgArrowUpRight = `${assetPathPrefix}/43698.svg`;

interface Props {
  onNavigate: (page: string) => void;
}

export default function ProcessPage({ onNavigate }: Props) {
  const hero = useParallax(0.35);
  const phases = [
    {
      phase: 'PHASE 01',
      title: 'Discovery & Context',
      weeks: 'Weeks 1–3',
      intro: 'We begin by understanding your users, business constraints, and market dynamics.',
      steps: [
        { title: 'User Research & Interviews', desc: 'Speaking directly with your core users to map behaviors, friction points, and true motivations.' },
        { title: 'Stakeholder Workshops', desc: 'Aligning technical feasibility, product timelines, and business goals with your leadership.' },
        { title: 'Competitive Architecture', desc: 'Analyzing incumbent and emerging products to find systemic gaps and strategic advantages.' },
      ],
      deliverables: ['User Persona Profiles', 'Journey Maps', 'Technical Feasibility Reports'],
      image: imgPhase1,
      imageLeft: false,
    },
    {
      phase: 'PHASE 02',
      title: 'Define & Strategy',
      weeks: 'Weeks 3–5',
      intro: 'Structuring research insights into a coherent, prioritizing roadmap.',
      steps: [
        { title: 'Product Strategy & Roadmapping', desc: 'Defining the core product value proposition and mapping a phased, realistic release plan.' },
        { title: 'Information Architecture', desc: 'Creating the underlying framework of the product to ensure navigation and flows scale logically.' },
        { title: 'Success Metric Definition', desc: 'Establishing clear key performance indicators (KPIs) to align design with business impact.' },
      ],
      deliverables: ['Product Roadmap', 'Interactive Flow Charts', 'Strategic KPI Matrix'],
      image: imgPhase2,
      imageLeft: true,
    },
    {
      phase: 'PHASE 03',
      title: 'Design & Systems',
      weeks: 'Weeks 5–10',
      intro: 'Crafting beautiful interfaces, verified by prototypes and powered by design systems.',
      steps: [
        { title: 'High-Fidelity UI Design', desc: 'Designing every screen, state, and responsive viewport with rigorous typographic hierarchy.' },
        { title: 'Scaleable Design Systems', desc: 'Building tokenized libraries in Figma and code to ensure product components remain modular.' },
        { title: 'Interactive Prototyping', desc: 'Creating hyper-realistic click-through prototypes for stakeholder reviews and user testing.' },
      ],
      deliverables: ['Figma Tokenized UI Kit', 'High-Fi Prototype', 'System Documentation'],
      image: imgPhase3,
      imageLeft: false,
    },
    {
      phase: 'PHASE 04',
      title: 'Deliver & Launch',
      weeks: 'Ongoing Collaboration',
      intro: 'Bridging design and production code with zero loss in visual fidelity.',
      steps: [
        { title: 'Handoff & Token Mapping', desc: 'Providing engineers with pristine assets, token structures, and interactive specifications.' },
        { title: 'Design QA & Audit', desc: 'Partnering closely with developers during sprints to audit typography, spacing, and transitions.' },
        { title: 'Launch & Post-Launch Support', desc: 'Monitoring actual user engagement, resolving immediate friction, and preparing for iteration v2.' },
      ],
      deliverables: ['Token Export Config', 'QA Audit Log', 'Post-Launch Growth Strategy'],
      image: imgPhase4,
      imageLeft: true,
    },
  ];

  return (
    <div className="bg-white flex flex-col items-start w-full">
      {/* Navbar */}
      <nav className="border-[#e0dfdb] border-b border-solid flex h-[96px] items-center justify-between px-[80px] w-full shrink-0 sticky top-0 z-50 bg-white">
        <button onClick={() => onNavigate('landing')} className="flex items-center">
          <img src="/assets/fc3fa.svg" alt="Rivo Studio" className="h-[40px] w-[40px] object-contain" />
        </button>
        <div className="flex font-['Instrument_Sans:Medium'] font-medium gap-[32px] items-center leading-normal text-[14px]">
          <button onClick={() => onNavigate('products')} className="text-[#666] hover:text-[#111] transition-colors" style={{ fontVariationSettings: '"wdth" 100' }}>Products</button>
          <button onClick={() => onNavigate('process')} className="text-[#c5593b]" style={{ fontVariationSettings: '"wdth" 100' }}>Process</button>
        </div>
        <a href="#contact" className="bg-[#111] hover:bg-[#c5593b] transition-colors px-[20px] py-[10px] rounded-[2px]">
          <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-white text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>Start a Project</span>
        </a>
      </nav>

      {/* Hero */}
      <section ref={hero.ref as React.RefObject<HTMLElement>} className="relative flex flex-col min-h-[400px] lg:min-h-[800px] items-start justify-between pb-12 pt-24 lg:pb-[80px] lg:pt-[120px] px-6 lg:px-[80px] w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute object-cover size-full" src={imgHero} style={{ transform: `translateY(${hero.offset}px)`, willChange: 'transform' }} />
          <div className="absolute bg-[rgba(17,17,17,0.35)] inset-0" />
        </div>
        <div className="flex flex-col gap-[24px] items-start relative w-full">
          <span className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[14px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>HOW WE BUILD</span>
          <p className="font-['Outfit:ExtraBold'] font-extrabold text-white text-[clamp(50px,6vw,100px)]" style={{ lineHeight: '0.88' }}>
            THE RIVO <span className="font-['Outfit:Light'] font-light">ENGINE.</span>
          </p>
          <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.4] text-[clamp(16px,1.5vw,24px)] text-white max-w-[780px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Rigorous thinking, systematic execution, and beautiful craftsmanship. We don't guess—we discover, define, design, and deliver launch-ready digital products.
          </p>
        </div>
        <div className="flex items-end justify-between relative w-full">
          <div className="flex flex-col gap-[8px] items-start leading-normal text-white">
            <p className="font-['Instrument_Sans:Regular'] font-normal opacity-60 text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Our Philosophy</p>
            <p className="font-['Instrument_Sans:SemiBold'] font-semibold text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>Strip away the noise until only the essential product experience remains.</p>
          </div>
          <div className="flex gap-[12px] items-center">
            <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[14px] text-white underline decoration-solid" style={{ fontVariationSettings: '"wdth" 100' }}>View our capabilities catalog</span>
            <img alt="" className="size-[14px]" src={imgArrowRight} />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="flex flex-col gap-[64px] items-start pb-[120px] pt-[140px] px-[80px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[14px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Core Methodology</span>
          </div>
          <span className="font-['Outfit:Regular'] font-normal leading-normal text-[#666] text-[14px]"> // FRAMEWORK</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-[48px] items-start w-full">
          <div className="flex flex-col gap-[32px] items-start flex-1 min-w-0">
            <p className="font-['Outfit:Medium'] font-medium leading-[1.25] text-[#111] text-[clamp(24px,2.5vw,44px)] w-full">
              A repeatable, highly collaborative loop designed to reduce risk and maximize product impact.
            </p>
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.7] text-[#666] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Great digital products are not designed in a vacuum. Our process brings strategy, design, and engineering into alignment from day one. We operate as an extension of your team, executing in tightly focused sprints to move from discovery to high-fidelity code systems without friction.
            </p>
          </div>
          <div className="bg-[#f6f5f2] border border-[#e0dfdb] border-solid flex flex-col gap-[24px] items-start p-[32px] rounded-[4px] lg:w-[480px] w-full shrink-0">
            <p className="font-['Outfit:Bold'] font-bold leading-normal text-[#111] text-[18px]">PROCESS METRICS</p>
            <div className="flex flex-col gap-[16px] items-start text-[14px] w-full">
              {[
                { val: '2 Sprints', label: 'Average cadence for production feedback' },
                { val: '100%', label: 'Handoff fidelity with tokenized systems' },
                { val: '3 Projects', label: 'Max client engagements accepted per year' },
              ].map(({ val, label }) => (
                <div key={val} className="border-[#e0dfdb] border-b border-solid flex items-start justify-between pb-[12px] w-full">
                  <p className="font-['Instrument_Sans:Bold'] font-bold text-[#c5593b]" style={{ fontVariationSettings: '"wdth" 100' }}>{val}</p>
                  <p className="font-['Instrument_Sans:Regular'] font-normal text-[#111]" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="flex flex-col gap-[96px] items-start pb-[120px] px-[80px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[14px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>The Blueprint</span>
          </div>
          <span className="font-['Outfit:Regular'] font-normal leading-normal text-[#666] text-[14px]">// DETAILED WORKFLOW</span>
        </div>
        {phases.map(({ phase, title, weeks, intro, steps, deliverables, image, imageLeft }) => (
          <div key={phase} className="flex flex-col gap-[40px] items-start w-full">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-[16px] items-start">
                <div className="bg-[rgba(197,89,59,0.09)] flex items-start px-[10px] py-[4px] rounded-[2px]">
                  <span className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>{phase}</span>
                </div>
                <p className="font-['Outfit:Bold'] font-bold leading-normal text-[#111] text-[36px]">{title}</p>
              </div>
              <p className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[#666] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{weeks}</p>
            </div>
            <div className={`flex flex-col lg:flex-row gap-[48px] items-start w-full ${imageLeft ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex flex-col gap-[32px] items-start flex-1 min-w-0">
                <p className="font-['Instrument_Sans:Medium'] font-medium leading-[1.4] text-[#111] text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{intro}</p>
                <div className="flex flex-col gap-[24px] items-start w-full">
                  {steps.map(({ title: st, desc }) => (
                    <div key={st} className="flex flex-col gap-[6px] items-start w-full">
                      <p className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#111] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{st}</p>
                      <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="border-[#e0dfdb] border-solid border-t flex flex-col gap-[12px] items-start pt-[20px] w-full">
                  <p className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Key Deliverables</p>
                  <div className="flex gap-[16px] items-start flex-wrap">
                    {deliverables.map(d => (
                      <div key={d} className="bg-white border border-[#e0dfdb] border-solid flex items-start px-[10px] py-[4px] rounded-[2px]">
                        <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-[450px] min-h-[280px] relative rounded-[4px] lg:w-[600px] w-full overflow-hidden shrink-0">
                <img alt="" className="absolute inset-0 object-cover size-full rounded-[4px]" src={image} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Principles */}
      <section className="bg-[#f6f5f2] flex flex-col gap-[64px] items-start px-[80px] py-[120px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[14px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Our Principles</span>
          </div>
          <span className="font-['Outfit:Regular'] font-normal leading-normal text-[#666] text-[14px]"> // VALUES</span>
        </div>
        <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
          {[
            { num: '01', title: 'User-Centered, Fact-Based', desc: 'We prioritize real user behaviors and telemetry over opinion. Product strategy and visual hierarchies are directly mapped to reduce friction in critical user paths.' },
            { num: '02', title: 'Iterative & Modular', desc: "We don't believe in the big-reveal design model. We test prototypes early, refine with token systems, and ship modular features that easily adapt as technology shifts." },
            { num: '03', title: 'Integrated & Multi-Disciplinary', desc: 'Our designers operate at the intersection of business, code, and aesthetics. We align seamlessly with your engineering teams to deliver launchable realities.' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="bg-white border border-[#e0dfdb] border-solid flex flex-1 min-w-0 flex-col gap-[24px] items-start p-[32px] rounded-[4px]">
              <div className="flex items-center w-full">
                <span className="font-['Outfit:Bold'] font-bold leading-normal text-[#c5593b] text-[20px]">{num}</span>
              </div>
              <div className="flex flex-col gap-[12px] items-start w-full">
                <p className="font-['Outfit:SemiBold'] font-semibold leading-normal text-[#111] text-[24px] w-full">{title}</p>
                <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white flex flex-col items-center px-[80px] py-[120px] w-full">
        <div className="flex flex-col gap-[24px] items-center max-w-[952px] w-full">
          <p className="font-['Outfit:Regular'] font-normal leading-[1.4] text-[#111] text-[clamp(20px,2vw,32px)] text-center">
            "Rivo's systems-first approach completely transformed our product shipping velocity. By establishing clean design tokens and a modular framework, our internal product and engineering teams can now launch new experiences in days rather than months."
          </p>
          <div className="flex gap-[12px] items-center">
            <div className="relative rounded-[16px] size-[32px] overflow-hidden shrink-0">
              <img alt="" className="absolute inset-0 object-cover size-full" src={imgTestimonialAvatar} />
            </div>
            <div className="flex flex-col gap-[2px] items-start leading-normal">
              <p className="font-['Instrument_Sans:Bold'] font-bold text-[#111] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>Elena Rostova</p>
              <p className="font-['Instrument_Sans:Regular'] font-normal text-[#666] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>Head of Design, Rimowa</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Footer */}
      <footer className="bg-[#f6f5f2] flex flex-col gap-[80px] items-start pb-[48px] pt-[96px] px-[80px] w-full overflow-hidden">
        <div className="flex items-start justify-between w-full flex-wrap gap-8">
          <div className="flex flex-col gap-[16px] items-start w-[320px]">
            <p className="font-['Outfit:ExtraBold'] font-extrabold leading-normal text-[#111] text-[24px]">RIVO</p>
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.5] text-[#666] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              An independent product design and product management studio helping companies build better digital products. Based in Brooklyn and London.
            </p>
          </div>
          {[
            { heading: 'Selected Products', links: ['Solitude OS', 'Kilo Audio Console', 'Oasis Ambient', 'Rimowa Travel OS'] },
            { heading: 'Studio', links: ['Capabilities', 'Our Process', 'Product Notes', 'Partners', 'Contact'] },
            { heading: 'Network', links: ['Instagram', 'ReadCV', 'Are.na', 'LinkedIn'] },
          ].map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-[16px] items-start leading-normal">
              <p className="font-['Instrument_Sans:Bold'] font-bold text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>{heading}</p>
              {links.map(link => <p key={link} className="font-['Instrument_Sans:Regular'] font-normal text-[#666] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>{link}</p>)}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[24px] items-start w-full">
          <p className="font-['Outfit:ExtraBold'] font-extrabold text-[#e0dfdb] w-full leading-none select-none text-center whitespace-nowrap" style={{ fontSize: 'clamp(54px, 13vw, 260px)', letterSpacing: '-0.03em' }}>RIVO STUDIO</p>
          <div className="border-[#e0dfdb] border-solid border-t flex font-['Instrument_Sans:Regular'] font-normal items-center justify-between leading-normal pt-[24px] text-[#666] text-[12px] w-full">
            <p style={{ fontVariationSettings: '"wdth" 100' }}>© 2025 Rivo Product Studio LLC. All rights reserved.</p>
            <div className="flex gap-[24px] items-start">
              <p style={{ fontVariationSettings: '"wdth" 100' }}>Privacy Strategy</p>
              <p style={{ fontVariationSettings: '"wdth" 100' }}>Terms of Commission</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
