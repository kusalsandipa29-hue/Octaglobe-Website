import { motion } from 'motion/react';
import { Chapter, ChapterLabel, ChapterTitle, Reveal, COLORS, MONO } from '../primitives';
import { CapabilityIllustration } from '../illustrations/BrandIllustrations';

const MARKETS = [
  'Productivity', 'Finance', 'Healthcare', 'Education', 'AI',
  'Internal Tools', 'Consumer', 'Creator Tools', 'Developer Tools', 'GovTech',
];
const CAPABILITY = ['Identify opportunity', 'Validate with users', 'Build focused product'];

export function Opportunity() {
  return (
    <Chapter id="opportunity">
      <ChapterLabel index="03" title="Opportunity Over Niche" />
      
      {/* Top section: Heading + Description + Illustration */}
      <div
        style={{
          display: 'grid',
          gap: 48,
          marginBottom: 80,
          alignItems: 'start',
        }}
        className="grid-cols-1 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16"
      >
        {/* Left: Heading and description */}
        <div style={{ minWidth: 0, boxSizing: 'border-box' }}>
          <Reveal>
            <ChapterTitle>
              We aren't defined by an industry. We're defined by a repeatable capability.
            </ChapterTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: COLORS.ink55, maxWidth: '100%', marginTop: 28, wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none', whiteSpace: 'normal' }} className="lg:max-w-lg lg:text-lg lg:leading-relaxed">
              We research opportunities wherever they exist and turn the strongest ideas into focused
              software businesses. The market changes — the way we work does not.
            </p>
          </Reveal>
        </div>

        {/* Right: Illustration */}
        <div
          className="hidden lg:flex"
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: 8,
          }}
        >
          <div style={{ width: 'min(400px, 100%)' }} className="lg:min-w-96">
            <CapabilityIllustration />
          </div>
        </div>
      </div>

      {/* Bottom section: Market vs Capability comparison */}
      <div
        style={{ display: 'grid', gap: 64, alignItems: 'center' }}
        className="home-opportunity-grid grid-cols-1 lg:grid-cols-2"
      >
        {/* Markets — change */}
        <div className="home-opportunity-column">
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.2em', color: COLORS.ink40, textTransform: 'uppercase', marginBottom: 24 }}>
            The market changes
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {MARKETS.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 1, 0.3] }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2.4, delay: 0.3 + i * 0.08, times: [0, 0.15, 0.55, 1] }}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: COLORS.structure,
                  border: `1px solid ${COLORS.line}`,
                  borderRadius: 8,
                  padding: '9px 14px',
                }}
              >
                {m}
              </motion.span>
            ))}
          </div>
          <p style={{ fontFamily: MONO, fontSize: 12, color: COLORS.ink40, marginTop: 20, lineHeight: 1.6 }}>
            // any market with a genuine opportunity
          </p>
        </div>

        {/* Capability — repeats */}
        <div className="home-opportunity-column">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.2em', color: COLORS.structure, textTransform: 'uppercase' }}>
              The capability stays
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {CAPABILITY.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.14 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  border: `1px solid ${COLORS.line}`,
                  borderRadius: 10,
                  padding: '16px 18px',
                  backgroundColor: COLORS.clarity,
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 11, color: COLORS.signal, width: 20 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 15, fontWeight: 500, color: COLORS.structure }}>{c}</span>
              </motion.div>
            ))}
          </div>
          <p style={{ fontSize: 18, fontWeight: 500, color: COLORS.structure, marginTop: 28, letterSpacing: '-0.01em' }}>
            The market changes. The way we work does not.
          </p>
        </div>
      </div>
    </Chapter>
  );
}
