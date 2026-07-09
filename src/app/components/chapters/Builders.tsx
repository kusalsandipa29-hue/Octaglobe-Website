import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Chapter, ChapterLabel, ChapterTitle, Reveal, COLORS, MONO } from '../primitives';

interface Discipline {
  discipline: string;
  value: number;
  unit: string;
  owns: string;
}

const DISCIPLINES: Discipline[] = [
  { discipline: 'Research', value: 42, unit: 'validation studies', owns: 'What is worth building' },
  { discipline: 'Product', value: 18, unit: 'products shaped', owns: 'What we build and why' },
  { discipline: 'Design', value: 240, unit: 'interface iterations', owns: 'How people experience it' },
  { discipline: 'Engineering', value: 130, unit: 'production deployments', owns: 'How it ships and runs' },
];

function Counter({ target, active }: { target: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const dur = 1200;
    let startTs = 0;
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return <>{n}</>;
}

export function Builders() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Chapter id="builders">
      <ChapterLabel index="09" title="Builders" />
      <Reveal>
        <ChapterTitle>Introduced through what they own — not where they worked.</ChapterTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: COLORS.ink55, maxWidth: 620, marginTop: 28 }}>
          OctaGlobe is built by people defined by execution. Each discipline owns a distinct part of
          the operating model.
        </p>
      </Reveal>

      <div
        ref={ref}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 72 }}
        className="lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"
      >
        {DISCIPLINES.map((d, i) => (
          <motion.div
            key={d.discipline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              padding: '32px 28px',
              borderTop: `1px solid ${COLORS.line}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
              <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.ink40 }}>
                {d.discipline}
              </span>
            </div>
            <div style={{ fontSize: 52, fontWeight: 600, color: COLORS.structure, letterSpacing: '-0.04em', lineHeight: 1 }}>
              <Counter target={d.value} active={inView} />
            </div>
            <div style={{ fontSize: 13, color: COLORS.ink55, marginTop: 10 }}>{d.unit}</div>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${COLORS.lineFaint}` }}>
              <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.ink40, marginBottom: 6 }}>
                Owns
              </div>
              <div style={{ fontSize: 14, color: COLORS.structure, lineHeight: 1.5 }}>{d.owns}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Chapter>
  );
}
