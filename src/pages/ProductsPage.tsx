import ContactForm from '../components/ContactForm';
import Nav from '../components/Nav';
import { useRef, useEffect, useState } from 'react';

function ParallaxImg({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let frame: number;
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      setOffset((progress - 0.5) * rect.height * 0.25);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden rounded-[4px]">
      <img alt={alt} src={src} className="absolute inset-0 object-cover w-full h-[115%] top-[-7.5%] transition-transform duration-700 group-hover:scale-[1.03]" style={{ transform: `translateY(${offset}px)`, willChange: 'transform' }} />
    </div>
  );
}

const assetPathPrefix = '/assets';
const imgEllipse = `${assetPathPrefix}/5c779.svg`;
const imgArrowUpRight = `${assetPathPrefix}/43698.svg`;
const imgSolitude = `${assetPathPrefix}/60696.png`;
const imgKilo = `${assetPathPrefix}/509bd.png`;
const imgLuminary = `${assetPathPrefix}/0fd13.png`;
const imgProcess = `${assetPathPrefix}/5182d.png`;

interface Props {
  onNavigate: (page: string) => void;
}

const products = [
  {
    id: 'solitude',
    index: '01',
    client: 'Oasis Writing',
    name: 'Solitude Writing App',
    description:
      'A distraction-free writing experience rebuilt from the ground up — from discovery and product strategy through to a fully shipped UX/UI and scalable design system.',
    tags: ['Product Strategy', 'UX/UI Design', 'Design System'],
    year: '2024',
    image: imgSolitude,
    page: 'casestudy',
  },
  {
    id: 'kilo',
    index: '02',
    client: 'Kilo Audio',
    name: 'Kilo Audio Console',
    description:
      'A complex multi-channel audio workflow simplified through rigorous product management, interaction design, and a modular design system built for future iterations.',
    tags: ['Product Management', 'UX/UI Design', 'Design Systems'],
    year: '2023',
    image: imgKilo,
    page: 'casestudy',
  },
  {
    id: 'luminary',
    index: '03',
    client: 'Luminary Health Group',
    name: 'Luminary Health Platform',
    description:
      'Two radically different audiences — clinical specialists and recovering patients — unified under a single coherent design system and a pair of purpose-built digital experiences.',
    tags: ['Product Strategy', 'UX/UI Design', 'Design System'],
    year: '2024',
    image: imgLuminary,
    page: 'casestudy',
  },
  {
    id: 'rimowa',
    index: '04',
    client: 'Rimowa',
    name: 'Rimowa Travel OS',
    description:
      'A connected travel companion redefined — blending product strategy with a premium digital language that mirrors the precision and craftsmanship of the physical product.',
    tags: ['Product Strategy', 'Design System'],
    year: '2024',
    image: imgProcess,
    page: 'casestudy',
  },
];

export default function ProductsPage({ onNavigate }: Props) {
  return (
    <div className="bg-white flex flex-col items-start w-full">

      {/* Navbar */}
      <Nav onNavigate={onNavigate} theme="light" activePage="products" />

      {/* Page header */}
      <header className="flex flex-col gap-[48px] items-start px-4 sm:px-8 lg:px-[80px] pt-10 lg:pt-[43px] w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[40px] w-full">
          <p className="font-['Outfit:Medium'] font-medium leading-[1.15] text-[#111] text-[clamp(36px,5vw,80px)] max-w-[700px]">
            Work that ships.<br />
            <span className="font-['Outfit:Light'] font-light">Products that scale.</span>
          </p>
          <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.6] text-[#666] text-[16px] max-w-[400px] shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
            A curated selection of products we've taken from first principles to launch — each one a collaboration built around strategy, craft, and systems thinking.
          </p>
        </div>
      </header>

      {/* Products list */}
      <section className="flex flex-col items-start w-full px-4 sm:px-8 lg:px-[80px] pb-14 lg:pb-[120px]">
        {products.map((p, i) => (
          <article
            key={p.id}
            className="border-[#e0dfdb] border-t border-solid flex flex-col gap-[48px] items-start py-[80px] w-full last:border-b"
          >
            {/* Top row: index + client + year */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[20px]">
                <span className="font-['Outfit:Bold'] font-bold leading-normal text-[#c5593b] text-[14px]">{p.index}</span>
                <span className="font-['Instrument_Sans:Regular'] font-normal leading-normal text-[#666] text-[13px] uppercase tracking-widest" style={{ fontVariationSettings: '"wdth" 100' }}>{p.client}</span>
              </div>
              <span className="font-['Instrument_Sans:Regular'] font-normal leading-normal text-[#999] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>{p.year}</span>
            </div>

            {/* Main content: alternating layout */}
            <div className={`flex flex-col lg:flex-row gap-[48px] items-start w-full ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <button
                onClick={() => onNavigate(p.page)}
                className="group relative rounded-[4px] flex-1 min-w-0 min-h-[260px] sm:min-h-[400px] lg:min-h-[520px] block w-full"
              >
                <ParallaxImg src={p.image} alt={p.name} />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(17,17,17,0)] group-hover:bg-[rgba(17,17,17,0.12)] transition-colors duration-300 rounded-[4px]" />
                {/* Arrow chip */}
                <div className="absolute bottom-[24px] right-[24px] bg-white rounded-[2px] px-[16px] py-[10px] flex items-center gap-[8px] opacity-0 group-hover:opacity-100 translate-y-[8px] group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-['Instrument_Sans:SemiBold'] font-semibold text-[#111] text-[12px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>View Case</span>
                  <img alt="" src={imgArrowUpRight} className="size-[12px]" />
                </div>
              </button>

              {/* Info */}
              <div className="flex flex-col gap-[32px] items-start lg:w-[360px] shrink-0 justify-start">
                <div className="flex flex-col gap-[20px] items-start">
                  <p className="font-['Outfit:Bold'] font-bold leading-[1.1] text-[#111] text-[clamp(26px,2.5vw,40px)]">{p.name}</p>
                  <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.65] text-[#666] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>{p.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-[8px]">
                  {p.tags.map(tag => (
                    <div key={tag} className="bg-white border border-[#e0dfdb] border-solid flex items-start px-[10px] py-[4px] rounded-[2px]">
                      <span className="font-['Instrument_Sans:Medium'] font-medium leading-normal text-[#111] text-[11px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>{tag}</span>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <button
                  onClick={() => onNavigate(p.page)}
                  className="group flex items-center gap-[10px] border-b border-[#111] pb-[4px] hover:border-[#c5593b] transition-colors"
                >
                  <span className="font-['Instrument_Sans:SemiBold'] font-semibold leading-normal text-[#111] group-hover:text-[#c5593b] text-[13px] uppercase transition-colors" style={{ fontVariationSettings: '"wdth" 100' }}>View Case Study</span>
                  <img alt="" src={imgArrowUpRight} className="size-[12px] opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <ContactForm />

      {/* Footer */}
      <footer className="bg-[#f6f5f2] flex flex-col gap-x-[80px] gap-y-[44px] items-start pb-[48px] pt-14 lg:pt-[96px] px-4 sm:px-8 lg:px-[80px] w-full overflow-hidden">
        <div className="flex items-start justify-between w-full flex-wrap gap-x-[16px] gap-y-[32px]">
          <div className="flex flex-col gap-[16px] items-start w-full sm:w-[320px]">
            <p className="font-['Outfit:ExtraBold'] font-extrabold leading-normal text-[#111] text-[24px]">RIVO</p>
            <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.5] text-[#666] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              An independent product design and product management studio helping companies build better digital products. Based in Brooklyn and London.
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
          <p className="font-['Outfit:ExtraBold'] font-extrabold text-[#e0dfdb] w-full leading-none select-none text-center whitespace-nowrap" style={{ fontSize: 'clamp(54px, 13vw, 260px)', letterSpacing: '-0.03em' }}>RIVO STUDIO</p>
          <div className="border-[#e0dfdb] border-solid border-t flex flex-col sm:flex-row font-['Instrument_Sans:Regular'] font-normal items-center justify-center leading-normal pt-3 gap-y-3 gap-x-[24px] text-[#666] text-[12px] w-full">
            <p style={{ fontVariationSettings: '"wdth" 100' }}>© 2025 Rivo Studio. All rights reserved.</p>
            <div className="flex gap-[24px] items-center">
              <p style={{ fontVariationSettings: '"wdth" 100' }}>Privacy Policy</p>
              <p style={{ fontVariationSettings: '"wdth" 100' }}>Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
