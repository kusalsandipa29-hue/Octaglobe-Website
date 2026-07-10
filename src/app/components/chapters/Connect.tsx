import { useState } from 'react';
import { Chapter, ChapterLabel, Reveal, COLORS, MONO } from '../primitives';
import logoMark from '../../../imports/Lockup_1.png';

const CHANNELS = [
  { label: 'Email', value: 'info@octaglobe.co', href: 'mailto:info@octaglobe.co' },
  { label: 'LinkedIn', value: 'linkedin.com/company/octaglobe', href: 'https://www.linkedin.com/company/octaglobe/', target: '_blank' },
  { label: 'Instagram', value: 'instagram.com/octaglobe', href: 'https://www.instagram.com/octaglobe', target: '_blank' },
];

export function Connect() {
  return (
    <Chapter id="connect" background={COLORS.structure} style={{ padding: '140px 0 0' }}>
      <ChapterLabel index="07" title="Connect" invert />

      <Reveal>
        <h2
          style={{
            fontSize: 'clamp(30px, 4.5vw, 56px)',
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            color: COLORS.clarity,
            maxWidth: 780,
          }}
        >
          We're always researching real problems worth solving.
        </h2>
      </Reveal>

      <Reveal delay={0.1} style={{ marginTop: 64 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}
          className="home-connect-grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"
        >
          {CHANNELS.map((c) => (
            <ChannelLink key={c.label} {...c} />
          ))}
        </div>
      </Reveal>

      <FooterBar />
    </Chapter>
  );
}

function ChannelLink({ label, value, href, target }: { label: string; value: string; href: string; target?: string }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      className="home-channel-link"
      href={href}
      target={target}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block',
        padding: '28px 24px',
        borderTop: `1px solid ${hover ? COLORS.signal : 'rgba(255,255,255,0.12)'}`,
        textDecoration: 'none',
        transition: 'border-color 0.25s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: COLORS.signal,
            opacity: hover ? 1 : 0.4,
            transition: 'opacity 0.25s',
          }}
        />
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
          {label}
        </span>
      </div>
      <div
        className="home-channel-value"
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: hover ? COLORS.signal : COLORS.clarity,
          transition: 'color 0.25s ease',
        }}
      >
        {value}
      </div>
    </a>
  );
}

function FooterBar() {
  return (
    <div className="home-connect-footer" style={{ marginTop: 120, paddingBottom: 48 }}>
      <div
        className="home-connect-footer-row"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <div className="home-connect-footer-brand" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src={logoMark} alt="OctaGlobe" style={{ width: 32, height: 32, borderRadius: 8 }} />
          <span style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
            Independent product research & development
          </span>
        </div>
        <span className="home-connect-footer-copy" style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          © 2026 OctaGlobe
        </span>
      </div>
    </div>
  );
}
