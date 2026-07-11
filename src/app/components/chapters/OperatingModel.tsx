import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chapter, ChapterLabel, ChapterTitle, Reveal, Frame, COLORS, MONO } from '../primitives';
import { ProcessIllustration } from '../illustrations/BrandIllustrations';

interface Stage {
  key: string;
  title: string;
  inputs: string;
  outputs: string;
  decision: string;
  artifact: string;
  risk: string;
  metric: string;
  example: string;
}

const STAGES: Stage[] = [
  {
    key: 'observe', title: 'Observe',
    inputs: 'Markets, workflows, everyday frustrations',
    outputs: 'A shortlist of things worth looking into',
    decision: 'Is this friction real and recurring?',
    artifact: 'Observation notes',
    risk: 'Chasing novelty over need',
    metric: 'Signals gathered',
    example: 'Spotting repeated frustration in a common workflow',
  },
  {
    key: 'research', title: 'Research',
    inputs: 'Observations, users, domain context',
    outputs: 'A clear understanding of the problem',
    decision: 'Do we understand it well enough to model it?',
    artifact: 'Research board',
    risk: 'Assumption disguised as insight',
    metric: 'Interviews · sources',
    example: 'Talking to the people who live inside the problem',
  },
  {
    key: 'identify', title: 'Identify Opportunity',
    inputs: 'Research findings, market context',
    outputs: 'A framed opportunity worth pursuing',
    decision: 'Is there room for a focused product here?',
    artifact: 'Opportunity brief',
    risk: 'Confusing a feature with a business',
    metric: 'Opportunity size · fit',
    example: 'A well-defined gap a small team can win',
  },
  {
    key: 'validate', title: 'Validate',
    inputs: 'Hypotheses, real users',
    outputs: 'Evidence the idea changes behavior',
    decision: 'Do people actually want this?',
    artifact: 'Validation report',
    risk: 'Believing polite feedback',
    metric: 'Willingness · engagement',
    example: 'Users choosing the idea over their current habit',
  },
  {
    key: 'prototype', title: 'Prototype',
    inputs: 'Validated idea, interface concepts',
    outputs: 'A tangible version to react to',
    decision: 'Is the core interaction right?',
    artifact: 'Interactive prototype',
    risk: 'Polishing before proving',
    metric: 'Task success · clarity',
    example: 'The smallest thing that feels real',
  },
  {
    key: 'mvp', title: 'Build MVP',
    inputs: 'Proven prototype, focused scope',
    outputs: 'A real product doing one thing well',
    decision: 'What is the smallest complete version?',
    artifact: 'Shipped MVP',
    risk: 'Scope creep before traction',
    metric: 'Time to first value',
    example: 'A product people can use today',
  },
  {
    key: 'launch', title: 'Launch',
    inputs: 'MVP, first audience',
    outputs: 'Real usage in the real world',
    decision: 'Who are the first users and why?',
    artifact: 'Launch',
    risk: 'Launching to no one',
    metric: 'Activation · reach',
    example: 'Putting it in front of the people it was built for',
  },
  {
    key: 'measure', title: 'Measure',
    inputs: 'Usage data, user feedback',
    outputs: 'An honest read on what is working',
    decision: 'Is it creating real value?',
    artifact: 'Metrics review',
    risk: 'Vanity metrics',
    metric: 'Retention · value delivered',
    example: 'Letting behavior — not opinion — tell the truth',
  },
  {
    key: 'improve', title: 'Improve',
    inputs: 'Measurement, learnings',
    outputs: 'A sharper, simpler product',
    decision: 'What creates value — what can we remove?',
    artifact: 'Iteration log',
    risk: 'Adding instead of refining',
    metric: 'Improvement per cycle',
    example: 'Cutting features that do not earn their place',
  },
  {
    key: 'scale', title: 'Scale',
    inputs: 'A product that clearly works',
    outputs: 'Growth into a focused software business',
    decision: 'Is the foundation ready to grow?',
    artifact: 'Growth plan',
    risk: 'Scaling something unproven',
    metric: 'Sustainable growth',
    example: 'Turning a validated product into a business',
  },
];

const DETAIL_ROWS: { key: keyof Stage; label: string }[] = [
  { key: 'inputs', label: 'Inputs' },
  { key: 'outputs', label: 'Outputs' },
  { key: 'decision', label: 'Decision' },
  { key: 'artifact', label: 'Artifact' },
  { key: 'risk', label: 'Risk' },
  { key: 'metric', label: 'Metric' },
];

export function OperatingModel() {
  const [selected, setSelected] = useState(0);
  const active = STAGES[selected];
  const total = STAGES.length;

  return (
    <Chapter id="operating-model" background={COLORS.surface}>
      <ChapterLabel index="04" title="How Products Become Reality" />
      
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
            <ChapterTitle>One repeatable process, from observation to scale.</ChapterTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: COLORS.ink55, maxWidth: '100%', marginTop: 28, wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none', whiteSpace: 'normal' }} className="lg:max-w-lg lg:text-lg lg:leading-relaxed">
              Every product moves through the same ten steps. Select any step to inspect its inputs,
              outputs, decisions, and the risks it manages.
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
            <ProcessIllustration />
          </div>
        </div>
      </div>

      {/* Bottom section: Interactive process */}
      <Reveal className="home-operating-interactive" delay={0.15} style={{ marginTop: 0 }}>
        {/* Stage rail */}
        <div className="home-operating-rail" style={{ display: 'flex', flexWrap: 'wrap', gap: 0, alignItems: 'center', marginBottom: 40 }}>
          {STAGES.map((stage, i) => (
            <div className="home-operating-stage" key={stage.key} style={{ display: 'flex', alignItems: 'center' }}>
              <button
                className="home-operating-stage-button"
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 2px',
                }}
              >
                <span
                  style={{
                    width: selected === i ? 16 : 12,
                    height: selected === i ? 16 : 12,
                    borderRadius: '50%',
                    border: `1.5px solid ${i <= selected ? COLORS.signal : COLORS.line}`,
                    backgroundColor: selected === i ? COLORS.signal : i < selected ? 'rgba(3,239,98,0.15)' : COLORS.clarity,
                    transition: 'all 0.25s ease',
                  }}
                />
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: '0.02em',
                    color: selected === i ? COLORS.structure : COLORS.ink40,
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s',
                  }}
                >
                  {stage.title}
                </span>
              </button>
              {i < total - 1 && (
                <span
                  style={{
                    width: 'clamp(8px, 2vw, 32px)',
                    height: 1,
                    backgroundColor: i < selected ? COLORS.signal : COLORS.line,
                    marginBottom: 26,
                    transition: 'background-color 0.3s',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Expanded detail */}
        <Frame ticks style={{ padding: 40, minHeight: 300 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="home-operating-detail-heading" style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
                <span style={{ fontFamily: MONO, fontSize: 13, color: COLORS.signal }}>
                  {String(selected + 1).padStart(2, '0')}/{total}
                </span>
                <h3 style={{ fontSize: 30, fontWeight: 600, color: COLORS.structure, letterSpacing: '-0.02em' }}>
                  {active.title}
                </h3>
              </div>

              <div
                style={{ display: 'grid', gap: 1, backgroundColor: COLORS.line, border: `1px solid ${COLORS.line}`, borderRadius: 10, overflow: 'hidden' }}
                className="home-operating-detail-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              >
                {DETAIL_ROWS.map((row) => (
                  <div className="home-operating-detail-cell" key={row.key} style={{ backgroundColor: COLORS.clarity, padding: '20px 22px' }}>
                    <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.ink40, marginBottom: 10 }}>
                      {row.label}
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.55, color: COLORS.structure }}>
                      {active[row.key]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="home-operating-practice" style={{ display: 'flex', gap: 12, marginTop: 24, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: MONO, fontSize: 11, color: COLORS.signal, marginTop: 2, whiteSpace: 'nowrap' }}>
                  IN PRACTICE
                </span>
                <span style={{ fontSize: 15, color: COLORS.ink70, lineHeight: 1.6 }}>{active.example}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </Frame>
      </Reveal>
    </Chapter>
  );
}
