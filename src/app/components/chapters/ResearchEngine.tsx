import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chapter, ChapterLabel, ChapterTitle, Reveal, Frame, COLORS, MONO } from '../primitives';

interface Step {
  key: string;
  title: string;
  reveals: string;
  detail: string;
}

const STEPS: Step[] = [
  { key: 'observe', title: 'Observe', reveals: 'Field notes', detail: 'We watch how people actually work — the workarounds, the frustrations, the friction nobody writes down.' },
  { key: 'interview', title: 'Interview', reveals: 'Interview transcripts', detail: 'We talk to the people who live inside the problem, not just the people who might buy a product.' },
  { key: 'map', title: 'Map', reveals: 'Problem maps', detail: 'Every step, decision, and dependency is drawn out clearly — not glossed over in a slide.' },
  { key: 'hypothesize', title: 'Hypothesize', reveals: 'Decision trees', detail: 'We frame testable bets: if we change this, this measurable behavior should move.' },
  { key: 'prototype', title: 'Prototype', reveals: 'Wireframes', detail: 'We build the smallest artifact that can prove or kill the hypothesis.' },
  { key: 'measure', title: 'Measure', reveals: 'Validation reports', detail: 'We put it in front of real users and record what actually happened — evidence, not opinion.' },
  { key: 'repeat', title: 'Repeat', reveals: 'Research boards', detail: 'Findings feed the next loop. We learn continuously and the engine keeps turning.' },
];

export function ResearchEngine() {
  const [open, setOpen] = useState(0);

  return (
    <Chapter id="research-engine">
      <ChapterLabel index="05" title="Research Engine" />
      <Reveal>
        <ChapterTitle>Research, not technology, is the engine.</ChapterTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: COLORS.ink55, maxWidth: 620, marginTop: 28 }}>
          Before a line of code exists, a repeatable research loop turns a rough observation into
          validated understanding. Each stage produces its own documentation.
        </p>
      </Reveal>

      <Reveal className="home-research-interactive" delay={0.15} style={{ marginTop: 72 }}>
        {/* Horizontal timeline */}
        <div className="home-research-timeline" style={{ display: 'flex', alignItems: 'stretch', overflowX: 'auto', paddingBottom: 8 }}>
          {STEPS.map((step, i) => {
            const active = open === i;
            return (
              <div className="home-research-step" key={step.key} style={{ display: 'flex', alignItems: 'stretch', flex: '1 0 auto' }}>
                <button
                  className="home-research-step-button"
                  onClick={() => setOpen(i)}
                  aria-pressed={active}
                  style={{
                    flex: 1,
                    minWidth: 120,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '0 4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        border: `1.5px solid ${active ? COLORS.signal : COLORS.line}`,
                        backgroundColor: active ? COLORS.signal : COLORS.clarity,
                        flexShrink: 0,
                        transition: 'all 0.25s',
                      }}
                    />
                    {i < STEPS.length - 1 && (
                      <span style={{ flex: 1, height: 1, backgroundColor: COLORS.line }} />
                    )}
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <div style={{ fontFamily: MONO, fontSize: 10, color: COLORS.ink25 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: active ? COLORS.structure : COLORS.ink55, marginTop: 4 }}>
                      {step.title}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Revealed documentation */}
        <Frame style={{ padding: 40, marginTop: 32 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={STEPS[open].key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28 }}
              style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40, alignItems: 'center' }}
              className="home-research-detail lg:grid-cols-[220px_1fr] grid-cols-1"
            >
              {/* Document mock */}
              <div
                className="home-research-document"
                style={{
                  border: `1px solid ${COLORS.line}`,
                  borderRadius: 10,
                  padding: 20,
                  backgroundColor: COLORS.surface,
                }}
              >
                <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.signal, marginBottom: 16 }}>
                  {STEPS[open].reveals}
                </div>
                {[100, 82, 90, 60, 74].map((wpct, k) => (
                  <div
                    key={k}
                    style={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: k === 3 ? 'rgba(3,239,98,0.4)' : COLORS.line,
                      width: `${wpct}%`,
                      marginBottom: 10,
                    }}
                  />
                ))}
              </div>

              <div className="home-research-copy">
                <h3 style={{ fontSize: 24, fontWeight: 600, color: COLORS.structure, letterSpacing: '-0.02em', marginBottom: 14 }}>
                  {STEPS[open].title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: COLORS.ink55, maxWidth: 460 }}>
                  {STEPS[open].detail}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </Frame>
      </Reveal>
    </Chapter>
  );
}
