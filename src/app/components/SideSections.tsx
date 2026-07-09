import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { COLORS, MONO } from './primitives';

const ITEMS: { label: string; target: string }[] = [
  { label: 'Process', target: 'operating-model' },
  { label: 'Research', target: 'research-engine' },
  { label: 'Philosophy', target: 'philosophy' },
  { label: 'Products', target: 'product-system' },
];

export function SideSections() {
  const [active, setActive] = useState('landing');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    ITEMS.concat(['opportunity', 'operating-model', 'research-engine', 'philosophy', 'product-system', 'evidence']).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'none',
      }}
      className="lg:block"
    >
      <div
        style={{
          display: visible ? 'flex' : 'none',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'flex-end',
          padding: 8,
        }}
      >
        {ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              color: active === item.target ? COLORS.signal : 'rgba(20,18,40,0.6)',
              cursor: 'pointer',
              transform: visible ? 'translateX(0)' : 'translateX(12px)',
              transition: 'all 0.32s ease',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
