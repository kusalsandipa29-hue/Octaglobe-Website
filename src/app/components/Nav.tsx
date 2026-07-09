import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import wordmark from '../../imports/Wordmark.png';
import wordmarkInvert from '../../imports/Wordmark__Invert_.png';
import { COLORS, MONO, MAX_W } from './primitives';
// mobile drawer removed — nav simplified to blend with hero

// In-page section links (home only)
const SECTION_ITEMS: { label: string; target: string }[] = [
  { label: 'Process', target: 'operating-model' },
  { label: 'Research', target: 'research-engine' },
  { label: 'Philosophy', target: 'philosophy' },
  { label: 'Products', target: 'product-system' },
];

// Route links
const PAGE_ITEMS: { label: string; to: string }[] = [
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
];

const ALL_SECTIONS = [
  'landing',
  'why-we-exist',
  'opportunity',
  'operating-model',
  'research-engine',
  'philosophy',
  'product-system',
  'evidence',
  'builders',
  'future',
  'connect',
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('landing');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    ALL_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome, pathname]);

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 90);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isSectionActive = (target: string) => {
    if (!isHome) return false;
    if (target === 'operating-model') return ['opportunity', 'operating-model'].includes(activeSection);
    if (target === 'product-system') return ['product-system', 'evidence'].includes(activeSection);
    return activeSection === target;
  };

  const solid = scrolled || !isHome;
  const onDark = !solid; // transparent nav sits over the dark video hero

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background-color 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease',
        backgroundColor: solid ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        borderBottom: solid ? `1px solid ${COLORS.lineFaint}` : 'none',
        boxShadow: solid ? '0 8px 24px rgba(20,18,40,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
          <Link to="/" aria-label="OctaGlobe — home" style={{ display: 'flex', padding: 0 }}>
            <img src={onDark ? wordmarkInvert : wordmark} alt="OctaGlobe" style={{ height: 22 }} />
          </Link>

          <nav style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', flex: 1 }} className="hidden md:flex">
            {PAGE_ITEMS.map((item) => (
              <NavButton key={item.label} label={item.label} active={pathname === item.to} onDark={onDark} to={item.to} />
            ))}
          </nav>

          <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.1em', color: onDark ? 'rgba(255,255,255,0.85)' : COLORS.ink40, textTransform: 'uppercase' }}>
              {isHome ? activeSection.replace(/-/g, ' ') : pathname.replace('/', '')}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavButton({
  label,
  active,
  onClick,
  to,
  onDark,
}: {
  label: string;
  active: boolean;
  onClick?: () => void;
  to?: string;
  onDark?: boolean;
}) {
  const activeColor = onDark ? COLORS.clarity : COLORS.structure;
  const idleColor = onDark ? 'rgba(255,255,255,0.6)' : COLORS.ink40;
  const hoverColor = onDark ? COLORS.clarity : COLORS.ink70;
  const inner = (
    <>
      {label}
      <span
        style={{
          position: 'absolute',
          left: 14,
          bottom: 2,
          width: 5,
          height: 5,
          borderRadius: '50%',
          backgroundColor: COLORS.signal,
          opacity: active ? 1 : 0,
          transform: active ? 'scale(1)' : 'scale(0.4)',
          transition: 'all 0.25s ease',
        }}
      />
    </>
  );

  const style: React.CSSProperties = {
    position: 'relative',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 14px',
    fontFamily: MONO,
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: active ? activeColor : idleColor,
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const hoverIn = (e: React.MouseEvent<HTMLElement>) => {
    if (!active) (e.currentTarget as HTMLElement).style.color = hoverColor;
  };
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => {
    if (!active) (e.currentTarget as HTMLElement).style.color = idleColor;
  };

  if (to) {
    return (
      <Link to={to} style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        {inner}
      </Link>
    );
  }
  return (
    <button onClick={onClick} style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      {inner}
    </button>
  );
}
