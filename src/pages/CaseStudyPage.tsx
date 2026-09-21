import ContactForm from '../components/ContactForm';
import Nav from '../components/Nav';

const assetPathPrefix = "/assets";
const imgHero = `${assetPathPrefix}/0fd13.png`;
const imgChallengeImagery = `${assetPathPrefix}/4d0d2.png`;
const imgClinicianScreenPreview = `${assetPathPrefix}/3bc30.png`;
const imgPatientScreenPreview = `${assetPathPrefix}/df1b5.png`;
const imgRectangle = `${assetPathPrefix}/91807.png`;
const imgEllipse = `${assetPathPrefix}/5c779.svg`;
const imgArrowRight = `${assetPathPrefix}/87f08.svg`;

interface Props {
  onNavigate: (page: string) => void;
}

export default function CaseStudyPage({ onNavigate }: Props) {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Nav onNavigate={onNavigate} theme="dark" activePage="casestudy" />

      {/* Hero */}
      <section className="relative flex flex-col min-h-[400px] md:min-h-[880px] items-start justify-between pb-12 pt-24 md:pb-[80px] md:pt-[120px] px-6 md:px-[80px] w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute object-cover size-full" src={imgHero} />
          <div className="absolute bg-[rgba(17,17,17,0.45)] inset-0" />
        </div>
        <div className="flex flex-col gap-[24px] items-start relative w-full">
          <span className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[14px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>LUMINARY HEALTH</span>
          <p className="font-['Outfit:ExtraBold'] font-extrabold text-white text-[clamp(32px,6vw,100px)]" style={{ lineHeight: '0.88' }}>
            REDESIGNING <span className="font-['Outfit:Light'] font-light">HEALTH TECH.</span>
          </p>
          <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.4] text-[clamp(16px,1.5vw,24px)] text-white max-w-[780px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            How we helped Luminary Health consolidate a fragmented clinical workflow and launch a reassuring, accessible patient experience across multiple platforms.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-0 relative w-full">
          <div className="flex flex-col gap-[8px] items-start leading-normal text-white">
            <p className="font-['Instrument_Sans:Regular'] font-normal opacity-60 text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Core Focus</p>
            <p className="font-['Instrument_Sans:SemiBold'] font-semibold text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>Reassuring Patient Portals & Multi-density Clinician Dashboards</p>
          </div>
          <div className="flex gap-[12px] items-center">
            <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[14px] text-white underline decoration-solid" style={{ fontVariationSettings: '"wdth" 100' }}>Explore case design notes</span>
            <img alt="" className="size-[16px]" src={imgArrowRight} />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="flex flex-col gap-10 md:gap-[64px] items-start px-6 md:px-[80px] py-16 md:py-[140px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Project Overview</span>
          </div>
          <span className="font-['Outfit:Regular'] font-normal leading-normal text-[#666] text-[14px]">01 // INTENT</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-[48px] items-start w-full">
          <div className="flex flex-col gap-[32px] items-start flex-1 min-w-0">
            <p className="font-['Outfit:Medium'] font-medium leading-[1.25] text-[#111] text-[clamp(24px,2.5vw,40px)] w-full">
              Bridging the gap between critical diagnostic speed for clinicians and calm, accessible support for recovering patients.
            </p>
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.7] text-[#666] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Luminary Health came to Rivo Studio with a massive architectural challenge. Their dual interfaces—one facing busy, stressed clinical personnel, and the other facing anxious patients at home—were powered by legacy technology with deep interaction patterns. We entered as an end-to-end product design partner, working closely with clinical researchers and software architects to deliver a clean slate design and an enterprise-ready system.
            </p>
          </div>
          <div className="bg-[#f6f5f2] border border-[#e0dfdb] border-solid flex flex-col gap-[24px] items-start p-[32px] rounded-[4px] lg:w-[480px] w-full shrink-0">
            <div className="flex gap-[16px] items-start leading-normal w-full">
              {[
                { label: 'Client', value: 'Luminary Health Group' },
                { label: 'Timeline', value: '6 Months (Launched 2024)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-1 min-w-0 flex-col gap-[8px] items-start">
                  <p className="font-['Instrument_Sans:Regular'] font-normal text-[#666] text-[13px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                  <p className="font-['Instrument_Sans:SemiBold'] font-semibold text-[#111] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{value}</p>
                </div>
              ))}
            </div>
            <div className="border-[#e0dfdb] border-solid border-t flex gap-[16px] items-start leading-normal pt-[16px] w-full">
              {[
                { label: 'Core Role', value: 'Product Strategy & UX/UI System' },
                { label: 'Team', value: '2 Product Designers, 1 Strategist' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-1 min-w-0 flex-col gap-[8px] items-start">
                  <p className="font-['Instrument_Sans:Regular'] font-normal text-[#666] text-[13px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                  <p className="font-['Instrument_Sans:SemiBold'] font-semibold text-[#111] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{value}</p>
                </div>
              ))}
            </div>
            <div className="border-[#e0dfdb] border-solid border-t flex flex-col gap-[12px] items-start pt-[16px] w-full">
              <p className="font-['Instrument_Sans:Regular'] font-normal leading-normal text-[#666] text-[13px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Deliverables</p>
              <div className="flex flex-wrap gap-[8px] items-start w-full">
                {['Patient Portal Design', 'Clinician OS', 'Component System', 'Strategic Roadmap'].map(d => (
                  <div key={d} className="bg-white border border-[#e0dfdb] border-solid flex items-start px-[10px] py-[4px] rounded-[2px]">
                    <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[#111] text-[11px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="flex flex-col gap-10 md:gap-[64px] items-start pb-20 md:pb-[140px] px-6 md:px-[80px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>The Challenge</span>
          </div>
          <span className="font-['Outfit:Regular'] font-normal leading-normal text-[#666] text-[14px]">02 // CONTEXT</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-[48px] items-start w-full">
          <div className="flex flex-col gap-[24px] items-start w-full lg:w-[405px] shrink-0">
            <div className="flex gap-[8px] items-start flex-wrap">
              {['Information Overload', 'Critical Errors'].map(t => (
                <div key={t} className="bg-white border border-[#e0dfdb] border-solid flex items-start px-[10px] py-[4px] rounded-[2px]">
                  <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[#111] text-[11px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>{t}</span>
                </div>
              ))}
            </div>
            <p className="font-['Outfit:Bold'] font-bold leading-normal text-[#111] text-[32px] w-full">A fragile cognitive environment.</p>
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              The existing clinician dashboard tried to show every diagnostic metric simultaneously, inducing heavy alarm fatigue. In contrast, the patient app hid vital recovery guides behind deep multi-nested navigation layers, leading patients to lose touch with their post-operative treatment schedules.
            </p>
          </div>
          <div className="flex-1 min-w-0 h-[500px] min-h-[300px] relative rounded-[4px] overflow-hidden">
            <img alt="" className="absolute inset-0 object-cover size-full rounded-[4px]" src={imgChallengeImagery} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f6f5f2] flex flex-col gap-10 md:gap-[64px] items-start px-6 md:px-[80px] py-16 md:py-[120px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Our Solution Strategy</span>
          </div>
          <span className="font-['Outfit:Regular'] font-normal leading-normal text-[#666] text-[14px]">03 // PROCESS</span>
        </div>
        <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
          {[
            { num: '01 / INTENTIONAL HIERARCHY', title: 'Adaptive Density', desc: 'We established two completely distinct modes of visual density. Clinicians received a highly compact, filter-rich display, while patients accessed a spacious layout optimized for relaxation and single-action focus.', items: ['Multi-state Dashboard Panels', 'Calming Color Temperature Scale'] },
            { num: '02 / COHERENT PATTERNS', title: 'Universal System', desc: 'We standardized all clinical data symbols and patient notifications under a single cross-platform system, significantly cutting down on development overhead and post-launch maintenance.', items: ['Common Token System', 'Accessible Typography Ladder'] },
          ].map(({ num, title, desc, items }) => (
            <div key={num} className="bg-white border border-[#e0dfdb] border-solid flex flex-1 min-w-0 flex-col gap-[24px] items-start p-[32px] rounded-[4px]">
              <p className="font-['Outfit:Bold'] font-bold leading-normal text-[#c5593b] text-[20px]">{num}</p>
              <div className="flex flex-col gap-[12px] items-start w-full">
                <p className="font-['Outfit:SemiBold'] font-semibold leading-normal text-[#111] text-[24px] w-full">{title}</p>
                <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{desc}</p>
              </div>
              <div className="border-[#e0dfdb] border-solid border-t flex flex-col font-['Instrument_Sans:Regular'] font-normal gap-[8px] items-start leading-normal pt-[16px] text-[#111] text-[12px] w-full">
                {items.map(i => <p key={i} style={{ fontVariationSettings: '"wdth" 100' }}>• {i}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exhibits */}
      <section className="flex flex-col gap-12 md:gap-[80px] items-start px-6 md:px-[80px] py-20 md:py-[140px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Key Interfaces</span>
          </div>
          <span className="font-['Outfit:Regular'] font-normal leading-normal text-[#666] text-[14px]">04 // SYSTEM INTERFACES</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-[48px] items-center w-full">
          <div className="h-[480px] min-h-[300px] relative rounded-[4px] flex-1 min-w-0 overflow-hidden">
            <img alt="" className="absolute inset-0 object-cover size-full rounded-[4px]" src={imgClinicianScreenPreview} />
          </div>
          <div className="flex flex-col gap-[24px] items-start w-full lg:w-[480px] shrink-0">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[14px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>01 // LUMINARY CLINICIAN OS</p>
            <p className="font-['Outfit:Bold'] font-bold leading-normal text-[#111] text-[36px] w-full">Designed for split-second decisions</p>
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.65] text-[#666] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              By introducing structured multi-variable widgets, clinicians can scan entire floor-level cohorts, filter active critical events instantly, and safely authorize treatment revisions with robust confirmation steps.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[48px] items-center w-full">
          <div className="flex flex-col gap-[24px] items-start w-full lg:w-[480px] shrink-0">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[14px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>02 // LUMINARY MOBILE PORTAL</p>
            <p className="font-['Outfit:Bold'] font-bold leading-normal text-[#111] text-[36px] w-full">A warm partner in recovery</p>
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.65] text-[#666] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Using spacious margins, humanized messaging, and single-step daily checklists, we stripped away clinical fear, encouraging continuous rehabilitation protocol adherence.
            </p>
          </div>
          <div className="h-[480px] min-h-[300px] relative rounded-[4px] flex-1 min-w-0 overflow-hidden">
            <img alt="" className="absolute inset-0 object-cover size-full rounded-[4px]" src={imgPatientScreenPreview} />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#f6f5f2] flex flex-col gap-10 md:gap-[64px] items-start px-6 md:px-[80px] py-16 md:py-[120px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Proven Impact</span>
          </div>
          <span className="font-['Outfit:Regular'] font-normal leading-normal text-[#666] text-[14px]">05 // PERFORMANCE</span>
        </div>
        <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
          {[
            { stat: '94%', color: 'text-[#c5593b]', title: 'Adherence Rate', desc: 'Post-operative patients completed their assigned home therapy actions on time, up from just 62% in the legacy portal experience.' },
            { stat: '-35%', color: 'text-[#111]', title: 'Task Execution Time', desc: 'Clinical specialists noted significantly faster charting intervals and a near-elimination of alarm confirmation errors.' },
            { stat: '2.5M+', color: 'text-[#111]', title: 'Patients Served', desc: 'Seamlessly transitioned across 40 hospital networks within the primary national rollout phase with zero workflow downtime.' },
          ].map(({ stat, color, title, desc }) => (
            <div key={stat} className="bg-white border border-[#e0dfdb] border-solid flex flex-1 min-w-0 flex-col gap-[16px] items-start p-[40px] rounded-[4px]">
              <p className={`font-['Outfit:ExtraBold'] font-extrabold leading-normal ${color} text-[64px]`}>{stat}</p>
              <p className="font-['Outfit:SemiBold'] font-semibold leading-normal text-[#111] text-[20px]">{title}</p>
              <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.5] text-[#666] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white flex flex-col items-center px-6 md:px-[80px] py-16 md:py-[120px] w-full">
        <div className="flex flex-col gap-[24px] items-center max-w-[952px] w-full">
          <p className="font-['Outfit:Regular'] font-normal leading-[1.4] text-[#111] text-[clamp(20px,2vw,32px)] text-center">
            "Rivo Studio understood our core constraints within hours of our first discovery session. They bypassed generic health-tech cliches to engineer a system that actively supports clinicians and genuinely calms our patients."
          </p>
          <div className="flex gap-[12px] items-center">
            <div className="relative rounded-[16px] size-[32px] overflow-hidden shrink-0">
              <img alt="" className="absolute inset-0 object-cover size-full" src={imgRectangle} />
            </div>
            <div className="flex flex-col gap-[2px] items-start leading-normal">
              <p className="font-['Instrument_Sans:Bold'] font-bold text-[#111] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>Dr. Sarah Lin</p>
              <p className="font-['Instrument_Sans:Regular'] font-normal text-[#666] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>Chief Medical Officer, Luminary Health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <div className="border-[#e0dfdb] border-b border-solid border-t flex flex-col md:flex-row md:h-[240px] items-start w-full">
        <button onClick={() => onNavigate('landing')} className="bg-white border-[#e0dfdb] md:border-r border-b md:border-b-0 border-solid flex flex-1 w-full min-w-0 flex-col gap-[8px] h-full items-start p-8 md:p-[48px] text-left hover:bg-[#f6f5f2] transition-colors">
          <p className="font-['Instrument_Sans:Bold'] font-bold text-[#666] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Previous Case Study</p>
          <p className="font-['Outfit:Bold'] font-bold text-[#111] text-[32px]">Solitude Writing App</p>
        </button>
        <button onClick={() => onNavigate('landing')} className="bg-white flex flex-1 min-w-0 w-full flex-col gap-[8px] h-full items-start md:items-end p-8 md:p-[48px] text-left md:text-right hover:bg-[#f6f5f2] transition-colors">
          <p className="font-['Instrument_Sans:Bold'] font-bold text-[#c5593b] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Next Case Study</p>
          <p className="font-['Outfit:Bold'] font-bold text-[#111] text-[32px] md:text-right">Kilo Audio Console</p>
        </button>
      </div>

      <ContactForm />

      {/* Footer */}
      <footer className="bg-[#f6f5f2] flex flex-col gap-12 md:gap-[80px] items-start pb-[48px] pt-16 md:pt-[96px] px-6 md:px-[80px] w-full overflow-hidden">
        <div className="flex items-start justify-between w-full flex-wrap gap-8">
          <div className="flex flex-col gap-[16px] items-start w-full md:w-[320px]">
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
