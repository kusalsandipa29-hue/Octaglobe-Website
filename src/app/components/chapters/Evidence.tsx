import { motion } from 'motion/react';
import { Chapter, ChapterLabel, ChapterTitle, Reveal, COLORS, MONO } from '../primitives';

const PHASES = ['Research', 'Prototype', 'Validation', 'Launch', 'Iteration', 'Expansion'];

interface Outcome {
  product: string;
  domain: string;
  points: { phase: string; note: string }[];
  reached: number; // index of current phase
}

const OUTCOMES: Outcome[] = [
  {
    product: 'Cadence',
    domain: 'Productivity',
    reached: 5,
    points: [
      { phase: 'Research', note: 'Studied how teams sync' },
      { phase: 'Prototype', note: 'Async update flow built' },
      { phase: 'Validation', note: 'Beta teams cut meetings' },
      { phase: 'Launch', note: 'Opened to first teams' },
      { phase: 'Iteration', note: 'Sharpened the core loop' },
      { phase: 'Expansion', note: 'Growing across teams' },
    ],
  },
  {
    product: 'Cohort',
    domain: 'Education',
    reached: 4,
    points: [
      { phase: 'Research', note: 'Mapped learner drop-off' },
      { phase: 'Prototype', note: 'Peer-nudge concept tested' },
      { phase: 'Validation', note: 'Retention lifted in pilots' },
      { phase: 'Launch', note: 'Live with first cohorts' },
      { phase: 'Iteration', note: 'Refining learning paths' },
      { phase: 'Expansion', note: 'Next: peer-driven paths' },
    ],
  },
  {
    product: 'Ledgerly',
    domain: 'Finance',
    reached: 3,
    points: [
      { phase: 'Research', note: 'Interviewed 30 owners' },
      { phase: 'Prototype', note: 'Trusted over spreadsheets' },
      { phase: 'Validation', note: 'MVP with early operators' },
      { phase: 'Launch', note: 'Onboarding first users' },
      { phase: 'Iteration', note: 'In progress' },
      { phase: 'Expansion', note: 'Next: automated books' },
    ],
  },
];

export function Evidence() {
  return (
    <Chapter id="evidence" background={COLORS.surface}>
      <ChapterLabel index="08" title="Evidence" />
      <Reveal>
        <ChapterTitle>The products are the evidence the process works.</ChapterTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: COLORS.ink55, maxWidth: 620, marginTop: 28 }}>
          Not case studies — outcomes. Each product is a trace through the same process, in a
          different market, from research to expansion.
        </p>
      </Reveal>

      <div style={{ marginTop: 72, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {OUTCOMES.map((o, oi) => (
          <Reveal key={o.product} delay={oi * 0.08}>
            <div style={{ padding: '36px 0', borderTop: `1px solid ${COLORS.line}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 28 }}>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: COLORS.structure, letterSpacing: '-0.02em' }}>
                  {o.product}
                </h3>
                <span style={{ fontFamily: MONO, fontSize: 12, color: COLORS.ink40, letterSpacing: '0.04em' }}>
                  {o.domain}
                </span>
              </div>

              {/* Timeline */}
              <div style={{ display: 'flex', overflowX: 'auto', paddingBottom: 4 }}>
                {PHASES.map((phase, i) => {
                  const done = i <= o.reached;
                  const point = o.points[i];
                  return (
                    <div key={phase} style={{ flex: '1 0 auto', minWidth: 150, display: 'flex' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                            style={{
                              width: 12,
                              height: 12,
                              borderRadius: '50%',
                              border: `1.5px solid ${done ? COLORS.signal : COLORS.line}`,
                              backgroundColor: done ? COLORS.signal : COLORS.clarity,
                              flexShrink: 0,
                            }}
                          />
                          {i < PHASES.length - 1 && (
                            <motion.span
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.28 + i * 0.12 }}
                              style={{ flex: 1, height: 1, backgroundColor: i < o.reached ? COLORS.signal : COLORS.line, transformOrigin: 'left' }}
                            />
                          )}
                        </div>
                        <div style={{ marginTop: 14, paddingRight: 16 }}>
                          <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: done ? COLORS.structure : COLORS.ink40 }}>
                            {phase}
                          </div>
                          <div style={{ fontSize: 13, color: COLORS.ink55, marginTop: 5, lineHeight: 1.45 }}>
                            {point.note}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Chapter>
  );
}
