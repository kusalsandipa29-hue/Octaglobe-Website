import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { COLORS, MONO, MAX_W } from './primitives';
import logoMark from '../../imports/Lockup_1.png';

const COLUMNS: { title: string; links: { label: string; to?: string; section?: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Philosophy', section: 'philosophy' },
    ],
  },
  {
    title: 'System',
    links: [
      { label: 'Process', section: 'operating-model' },
      { label: 'Research', section: 'research-engine' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Email', section: 'connect' },
      { label: 'LinkedIn', section: 'connect' },
      { label: 'Instagram', section: 'connect' },
    ],
  },
];

export function SiteFooter() {
  const navigate = useNavigate();

  const goSection = (id: string) => {
    navigate('/');
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 90);
  };

  return (
    <footer className="site-footer" style={{ backgroundColor: COLORS.structure, color: COLORS.clarity }}>
      <div className="site-footer__inner" style={{ maxWidth: MAX_W, margin: '0 auto', padding: '96px 40px 48px' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 48 }}
          className="site-footer__grid lg:grid-cols-[1.4fr_repeat(3,1fr)] grid-cols-2"
        >
          <div className="site-footer__brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <img src={logoMark} alt="OctaGlobe" style={{ width: 36, height: 36, borderRadius: 8 }} />
              <span style={{ fontSize: 18, fontWeight: 600, color: COLORS.clarity }}>OctaGlobe</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: 280 }}>
              Independent product research and development. We discover opportunities, validate them,
              and build software people genuinely use.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div className="site-footer__column" key={col.title}>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink label={l.label} to={l.to} onClick={l.section ? () => goSection(l.section!) : undefined} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="site-footer__bottom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 80,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
            Independent product research &amp; development
          </span>
          <span style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 OctaGlobe</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label, to, onClick }: { label: string; to?: string; onClick?: () => void }) {
  const [hover, setHover] = useState(false);
  const style: React.CSSProperties = {
    fontSize: 14,
    color: hover ? COLORS.signal : 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    textAlign: 'left',
  };
  if (to) {
    return (
      <Link className="site-footer__link" to={to} style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {label}
      </Link>
    );
  }
  return (
    <button className="site-footer__link" style={style} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {label}
    </button>
  );
}
