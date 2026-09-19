import ContactForm from '../components/ContactForm';
import Nav from '../components/Nav';

const assetPathPrefix = '/assets';
const imgTeam1 = `${assetPathPrefix}/e8826.png`;
const imgTeam2 = `${assetPathPrefix}/60696.png`;
const imgTeam3 = `${assetPathPrefix}/509bd.png`;
const imgArrowUpRight = `${assetPathPrefix}/43698.svg`;

interface Props {
  onNavigate: (page: string) => void;
}

const values = [
  {
    num: '01',
    title: 'User-Centered, Fact-Based',
    desc: 'We prioritize real user behaviours and telemetry over opinion. Product strategy and visual hierarchies are directly mapped to reduce friction in critical user paths.',
  },
  {
    num: '02',
    title: 'Iterative & Modular',
    desc: "We don't believe in the big-reveal design model. We test prototypes early, refine with token systems, and ship modular features that adapt as technology shifts.",
  },
  {
    num: '03',
    title: 'Integrated & Multi-Disciplinary',
    desc: 'Our designers operate at the intersection of business, code, and aesthetics. We align seamlessly with your engineering teams to deliver launchable realities.',
  },
];

const team = [
  {
    name: 'Jordan Ellis',
    role: 'Founder / Creative Director',
    bio: 'Jordan has worked at the intersection of design and product strategy for over a decade. With a background spanning early-stage startups and enterprise software, they bring a systematic approach to every engagement — building products that are as coherent under the hood as they are on the surface.',
    img: imgTeam1,
  },
  {
    name: 'Sam Nakamura',
    role: 'Head of Product Strategy',
    bio: 'Sam leads product strategy and discovery across all studio engagements. A former product manager turned design thinker, they specialize in translating ambiguous briefs into sharp roadmaps — finding the product kernel inside every conversation.',
    img: imgTeam2,
  },
  {
    name: 'Priya Osei',
    role: 'Lead UX Designer',
    bio: 'Priya shapes the interaction layer — from early user research through to high-fidelity systems. Their instinct for where friction hides and how to remove it quietly has defined some of the studio\'s most celebrated product moments.',
    img: imgTeam3,
  },
];

export default function AboutPage({ onNavigate }: Props) {
  return (
    <div className="bg-white flex flex-col items-start w-full">

      <Nav onNavigate={onNavigate} theme="light" activePage="about" />

      {/* Story */}
      <section className="flex flex-col gap-[64px] items-start px-4 sm:px-8 lg:px-[80px] pt-10 lg:pt-[72px] pb-[40px] w-full">
        <div className="flex flex-col lg:flex-row gap-[64px] items-start w-full">
          <p className="font-['Outfit:Medium'] font-medium leading-[1.2] text-[#111] text-[clamp(28px,3vw,48px)] flex-1 min-w-0">
            We started Rivo because we saw too many great products fail at the design and strategy layer.
          </p>
          <div className="flex flex-col gap-[24px] items-start lg:w-[440px] shrink-0">
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.7] text-[#666] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Rivo Studio was founded with one conviction: the gap between a good idea and a great product is almost always a design and strategy problem. We built a studio that sits at that gap — part product consultancy, part design agency, part systems thinker.
            </p>
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.7] text-[#666] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Today we work with ambitious teams across AI, B2B, health tech, and consumer — embedding deeply into product cycles and leaving behind systems that outlast the engagement.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="group flex items-center gap-[10px] border-b border-[#111] pb-[4px] hover:border-[#c5593b] transition-colors mt-[8px]"
            >
              <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] group-hover:text-[#c5593b] text-[13px] uppercase transition-colors" style={{ fontVariationSettings: '"wdth" 100' }}>View Our Work</span>
              <img alt="" src={imgArrowUpRight} className="size-[12px]" />
            </button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f6f5f2] flex flex-col gap-[64px] items-start px-4 sm:px-8 lg:px-[80px] py-14 lg:py-[120px] w-full">
        <div className="border-[#e0dfdb] border-b border-solid flex items-center justify-between pb-[24px] w-full">
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#c5593b] rounded-[3px] size-[6px]" />
            <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>How We Work</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full">
          {values.map(({ num, title, desc }) => (
            <div key={num} className="bg-white border border-[#e0dfdb] border-solid flex flex-col gap-[24px] items-start p-[32px] rounded-[4px]">
              <span className="font-['Outfit:Bold'] font-bold leading-normal text-[#c5593b] text-[20px]">{num}</span>
              <div className="flex flex-col gap-[12px] items-start w-full">
                <p className="font-['Outfit:SemiBold'] font-semibold leading-normal text-[#111] text-[20px] w-full">{title}</p>
                <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="w-full px-4 sm:px-8 lg:px-[80px] py-14 lg:py-[80px]">
        {/* Mobile: stacked */}
        <div className="lg:hidden flex flex-col gap-[48px]">
          {team.slice(0, 2).map(({ name, role, bio, img }) => (
            <div key={name} className="flex flex-col gap-[20px]">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[4px]">
                <img alt={name} src={img} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex flex-col gap-[6px] items-start">
                <p className="font-['Outfit:ExtraBold'] font-extrabold leading-none text-[#111] text-[clamp(28px,8vw,52px)] uppercase">{name}</p>
                <p className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[12px] uppercase tracking-widest mt-[4px]" style={{ fontVariationSettings: '"wdth" 100' }}>{role}</p>
                <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.65] text-[#666] text-[14px] mt-3" style={{ fontVariationSettings: '"wdth" 100' }}>{bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: staggered side-by-side */}
        <div className="hidden lg:block">
          <div className="flex items-start w-full">
            <div className="w-[42%] flex flex-col shrink-0">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[4px]">
                <img alt={team[0].name} src={team[0].img} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex flex-col gap-[6px] items-start pt-[28px] pb-[60px]">
                <p className="font-['Outfit:ExtraBold'] font-extrabold leading-none text-[#111] text-[clamp(28px,3.5vw,52px)] uppercase">{team[0].name}</p>
                <p className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[12px] uppercase tracking-widest mt-[4px]" style={{ fontVariationSettings: '"wdth" 100' }}>{team[0].role}</p>
                <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.65] text-[#666] text-[14px] mt-[12px] max-w-[380px]" style={{ fontVariationSettings: '"wdth" 100' }}>{team[0].bio}</p>
              </div>
            </div>
            <div className="flex-1" />
            <div className="w-[42%] flex flex-col shrink-0 mt-[28%]">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[4px]">
                <img alt={team[1].name} src={team[1].img} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex flex-col gap-[6px] items-start pt-[28px] pb-[60px]">
                <p className="font-['Outfit:ExtraBold'] font-extrabold leading-none text-[#111] text-[clamp(28px,3.5vw,52px)] uppercase">{team[1].name}</p>
                <p className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#c5593b] text-[12px] uppercase tracking-widest mt-[4px]" style={{ fontVariationSettings: '"wdth" 100' }}>{team[1].role}</p>
                <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.65] text-[#666] text-[14px] mt-[12px] max-w-[380px]" style={{ fontVariationSettings: '"wdth" 100' }}>{team[1].bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#f6f5f2] flex flex-col items-center px-4 sm:px-8 lg:px-[80px] py-14 lg:py-[120px] w-full">
        <div className="flex flex-col gap-[24px] items-center max-w-[952px] w-full">
          <p className="font-['Outfit:Regular'] font-normal leading-[1.4] text-[#111] text-[clamp(20px,2vw,32px)] text-center">
            "Rivo Studio operates unlike any agency we've partnered with. They integrated deeply with our product teams, creating a unified digital experience that defined our entire product roadmap."
          </p>
          <div className="flex gap-[12px] items-center">
            <div className="relative rounded-[16px] size-[32px] overflow-hidden shrink-0">
              <img alt="" className="absolute inset-0 object-cover size-full" src={imgTeam1} />
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
      <footer className="bg-[#f6f5f2] flex flex-col gap-12 lg:gap-[80px] items-start pb-[48px] pt-14 lg:pt-[96px] px-4 sm:px-8 lg:px-[80px] w-full overflow-hidden">
        <div className="flex items-start justify-between w-full flex-wrap gap-8">
          <div className="flex flex-col gap-[16px] items-start w-full sm:w-[320px]">
            <img src="/assets/fc3fa.svg" alt="Rivo Studio" className="h-[56px] w-[56px] object-contain" />
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.5] text-[#666] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              An independent product design studio helping companies build better digital products. Based in Brooklyn and London.
            </p>
          </div>
          {[
            { heading: 'Selected Work', links: ['Solitude OS', 'Kilo Audio Console', 'Oasis Ambient', 'Rimowa Travel OS'] },
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
            className="font-['Outfit:ExtraBold'] font-extrabold text-[#e0dfdb] w-full leading-none select-none text-center text-[54px] lg:text-[120px]"
            style={{ letterSpacing: '-0.03em' }}
          >
            RIVO STUDIO
          </p>
          <div className="border-[#e0dfdb] border-solid border-t flex flex-col sm:flex-row font-['Instrument_Sans:Regular'] font-normal items-center justify-center leading-normal pt-[24px] text-[#666] text-[12px] w-full gap-x-3">
            <p style={{ fontVariationSettings: '"wdth" 100' }}>© 2025 Rivo Studio. All rights reserved.</p>
            <div className="flex gap-[24px] items-start">
              <p style={{ fontVariationSettings: '"wdth" 100' }}>Privacy Policy</p>
              <p style={{ fontVariationSettings: '"wdth" 100' }}>Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
