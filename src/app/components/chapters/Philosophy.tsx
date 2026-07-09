import { Chapter, ChapterLabel, ChapterTitle, Reveal, COLORS, MONO } from '../primitives';
import { motion } from 'motion/react';

const PRINCIPLES: { principle: string; note: string }[] = [
  { principle: 'Opportunity over niche', note: 'We follow genuine opportunities, not a predefined market.' },
  { principle: 'Research before assumptions', note: 'We learn how things really work before we decide anything.' },
  { principle: 'Validation before investment', note: 'We prove demand with real users before we commit to building.' },
  { principle: 'Simplicity over features', note: 'Fewer, sharper decisions beat a longer feature list.' },
  { principle: 'Build only what creates value', note: 'If it does not earn its place, it does not ship.' },
  { principle: 'Small team, high ownership', note: 'A focused team that owns outcomes end to end.' },
  { principle: 'Learn continuously', note: 'Every launch teaches us something for the next one.' },
  { principle: 'Ship relentlessly', note: 'Momentum compounds. We keep shipping.' },
];

export function Philosophy() {
  return (
    <Chapter id="philosophy">
      <ChapterLabel index="06" title="Why Our Process Works" />
      <Reveal>
        <ChapterTitle>Eight principles keep the work honest.</ChapterTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: COLORS.ink55, maxWidth: 620, marginTop: 28 }}>
          The process only works because of the discipline behind it. These are the rules we hold
          ourselves to.
        </p>
      </Reveal>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, marginTop: 72, border: `1px solid ${COLORS.line}`, borderRadius: 16, overflow: 'hidden', backgroundColor: COLORS.line }}
        className="lg:grid-cols-2 grid-cols-1"
      >
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.principle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.05 }}
            whileHover={{ backgroundColor: 'rgba(3,239,98,0.04)' }}
            style={{ backgroundColor: COLORS.clarity, padding: '32px 32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ fontFamily: MONO, fontSize: 12, color: COLORS.signal }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
              <h3 style={{ fontSize: 18, fontWeight: 600, color: COLORS.structure, letterSpacing: '-0.01em' }}>
                {p.principle}
              </h3>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: COLORS.ink55, paddingLeft: 30 }}>{p.note}</p>
          </motion.div>
        ))}
      </div>
    </Chapter>
  );
}
