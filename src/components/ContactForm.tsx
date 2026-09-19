import { useState } from 'react';

const services = ['Web App', 'Mobile App', 'Website'];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => {
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-[#c5593b] flex flex-col gap-[48px] items-center justify-center px-4 sm:px-8 lg:px-[80px] py-16 lg:py-[140px] w-full text-center">
        <p className="font-['Outfit:ExtraBold'] font-extrabold text-white text-[clamp(32px,4vw,64px)]" style={{ lineHeight: '0.95' }}>
          We'll be in touch.
        </p>
        <p className="font-['Instrument_Sans:Regular'] font-normal leading-[1.5] opacity-90 text-white text-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Thank you, {name}. We'll review your message and reach out shortly.
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#c5593b] flex flex-col gap-[64px] items-center px-4 sm:px-8 lg:px-[80px] py-16 lg:py-[140px] w-full text-center">
      {/* Heading */}
      <p className="font-['Outfit:ExtraBold'] font-extrabold text-white text-[clamp(36px,5vw,72px)] max-w-[800px] text-center" style={{ lineHeight: '0.95' }}>
        LET'S BUILD <span className="font-['Outfit:Light'] font-light">BETTER PRODUCTS.</span>
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-[40px] items-center w-full max-w-[900px]">

        {/* Row 1: My name is ___ from ___ */}
        <div className="flex flex-wrap items-baseline justify-center gap-x-[16px] gap-y-[20px]">
          <span className="font-['Instrument_Sans:Regular'] font-normal text-white text-[clamp(18px,2vw,28px)] opacity-90 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            My name is
          </span>
          <input
            type="text"
            placeholder="first & last name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="bg-transparent border-b border-white/40 focus:border-white outline-none text-white text-[clamp(18px,2vw,28px)] placeholder:text-white/35 w-full max-w-[240px] pb-[4px] transition-colors font-['Instrument_Sans:Regular'] font-normal"
            style={{ fontVariationSettings: '"wdth" 100' }}
          />
          <span className="font-['Instrument_Sans:Regular'] font-normal text-white text-[clamp(18px,2vw,28px)] opacity-90 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            from
          </span>
          <input
            type="text"
            placeholder="company name"
            value={company}
            onChange={e => setCompany(e.target.value)}
            className="bg-transparent border-b border-white/40 focus:border-white outline-none text-white text-[clamp(18px,2vw,28px)] placeholder:text-white/35 w-full max-w-[240px] pb-[4px] transition-colors font-['Instrument_Sans:Regular'] font-normal"
            style={{ fontVariationSettings: '"wdth" 100' }}
          />
        </div>

        {/* Row 2: I want to chat about design for my ___ chips */}
        <div className="flex flex-wrap items-center justify-center gap-x-[16px] gap-y-[16px]">
          <span className="font-['Instrument_Sans:Regular'] font-normal text-white text-[clamp(18px,2vw,28px)] opacity-90 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            I want to chat about design for my
          </span>
          <div className="flex flex-wrap gap-[10px] items-center justify-center">
            {services.map(s => (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className={`border border-solid px-[16px] py-[8px] rounded-[2px] text-[13px] font-['Instrument_Sans:SemiBold'] font-semibold leading-normal transition-all ${
                  selected.includes(s)
                    ? 'bg-white text-[#c5593b] border-white'
                    : 'bg-transparent text-white border-white/40 hover:border-white'
                }`}
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: You can reach me at ___ */}
        <div className="flex flex-wrap items-baseline justify-center gap-x-[16px] gap-y-[20px]">
          <span className="font-['Instrument_Sans:Regular'] font-normal text-white text-[clamp(18px,2vw,28px)] opacity-90 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            You can reach me at
          </span>
          <input
            type="email"
            placeholder="email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="bg-transparent border-b border-white/40 focus:border-white outline-none text-white text-[clamp(18px,2vw,28px)] placeholder:text-white/35 w-full max-w-[300px] pb-[4px] transition-colors font-['Instrument_Sans:Regular'] font-normal"
            style={{ fontVariationSettings: '"wdth" 100' }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group mt-[8px] bg-white hover:bg-[#111] transition-colors px-[48px] py-[18px] rounded-[2px]"
        >
          <span className="font-['Instrument_Sans:Bold'] font-bold leading-normal text-[#111] group-hover:text-white transition-colors text-[14px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
            Send Message
          </span>
        </button>
      </form>
    </section>
  );
}
