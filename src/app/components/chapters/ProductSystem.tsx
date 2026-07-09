import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chapter, ChapterLabel, ChapterTitle, Reveal, Frame, COLORS, MONO } from '../primitives';

interface Product {
  id: string;
  name: string;
  market: string;
  stage: string;
  opportunity: string;
  research: string;
  validation: string;
  current: string;
  future: string;
}

const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Cadence', market: 'Productivity', stage: 'Growth', opportunity: 'Teams drowning in status updates', research: 'Studied how teams actually sync', validation: 'Beta teams cut meetings sharply', current: 'Growing user base', future: 'Async planning workflows' },
  { id: 'p2', name: 'Ledgerly', market: 'Finance', stage: 'MVP', opportunity: 'Small businesses fear their books', research: 'Interviewed 30 owners', validation: 'Prototype trusted over spreadsheets', current: 'Early operators onboard', future: 'Automated bookkeeping' },
  { id: 'p3', name: 'Cohort', market: 'Education', stage: 'Product', opportunity: 'Online courses lose learners fast', research: 'Mapped drop-off points', validation: 'Retention lifted in pilots', current: 'In active use', future: 'Peer-driven learning paths' },
  { id: 'p4', name: 'Vital', market: 'Healthcare', stage: 'Validation', opportunity: 'Care follow-ups slip through cracks', research: 'Shadowed clinic workflows', validation: 'Reminder model in validation', current: 'Validating with clinics', future: 'Care coordination layer' },
  { id: 'p5', name: 'Draft', market: 'Creator Tools', stage: 'Growth', opportunity: 'Creators juggle scattered tools', research: 'Watched creator workflows', validation: 'Single workspace validated', current: 'Growing steadily', future: 'Collaboration for teams' },
  { id: 'p6', name: 'Signal', market: 'AI', stage: 'Prototype', opportunity: 'AI output is hard to trust', research: 'Explored evaluation gaps', validation: 'Prototype in testing', current: 'Prototype stage', future: 'Evaluation for AI products' },
  { id: 'p7', name: 'Handoff', market: 'Developer Tools', stage: 'MVP', opportunity: 'Design-to-code loses fidelity', research: 'Studied handoff friction', validation: 'MVP praised by early devs', current: 'MVP with early teams', future: 'Full spec automation' },
  { id: 'p8', name: 'Access', market: 'GovTech', stage: 'Validation', opportunity: 'Public services are hard to navigate', research: 'Interviewed residents & staff', validation: 'Guided flows in validation', current: 'Validating with a pilot', future: 'Multi-service portal' },
];

const LIFECYCLE: { key: keyof Product; label: string }[] = [
  { key: 'opportunity', label: 'Opportunity' },
  { key: 'research', label: 'Research' },
  { key: 'validation', label: 'Validation' },
  { key: 'current', label: 'Current Stage' },
  { key: 'future', label: 'Future Expansion' },
];

export function ProductSystem() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedProduct = PRODUCTS.find((p) => p.id === selected);

  return (
    <Chapter id="product-system" background={COLORS.surface}>
      <ChapterLabel index="07" title="What We're Building" />
      <Reveal>
        <ChapterTitle>One repeatable capability. A portfolio of products.</ChapterTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: COLORS.ink55, maxWidth: 620, marginTop: 28 }}>
          Each product lives in a different market, but every one was born from the same process.
          Select a product to trace its path from opportunity to expansion.
        </p>
      </Reveal>

      <Reveal delay={0.15} style={{ marginTop: 64 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'start' }}
          className="lg:grid-cols-[1.1fr_1fr] grid-cols-1"
        >
          {/* Product grid */}
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}
            className="grid-cols-2"
          >
            {PRODUCTS.map((p) => {
              const isActive = selected === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${isActive ? COLORS.signal : COLORS.line}`,
                    borderRadius: 12,
                    backgroundColor: isActive ? 'rgba(3,239,98,0.06)' : COLORS.clarity,
                    cursor: 'pointer',
                    padding: '18px 18px',
                    transition: 'all 0.22s ease',
                    transform: isActive ? 'translateY(-2px)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: isActive ? COLORS.signal : COLORS.line }} />
                    <span style={{ fontFamily: MONO, fontSize: 10, color: COLORS.ink40, letterSpacing: '0.06em' }}>
                      {p.stage}
                    </span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: COLORS.structure, letterSpacing: '-0.01em' }}>
                    {p.name}
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: COLORS.ink40, marginTop: 4 }}>{p.market}</div>
                </button>
              );
            })}
          </div>

          {/* Lifecycle panel */}
          <Frame ticks style={{ padding: 32, minHeight: 380 }}>
            <AnimatePresence mode="wait">
              {selectedProduct ? (
                <motion.div
                  key={selectedProduct.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                    <div>
                      <h3 style={{ fontSize: 24, fontWeight: 600, color: COLORS.structure, letterSpacing: '-0.02em' }}>
                        {selectedProduct.name}
                      </h3>
                      <div style={{ fontFamily: MONO, fontSize: 11, color: COLORS.ink40, marginTop: 4 }}>
                        {selectedProduct.market}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 11,
                        color: COLORS.signal,
                        border: `1px solid rgba(3,239,98,0.4)`,
                        borderRadius: 6,
                        padding: '3px 10px',
                      }}
                    >
                      {selectedProduct.stage}
                    </span>
                  </div>
                  <div style={{ position: 'relative' }}>
                    {LIFECYCLE.map((row, i) => (
                      <div key={row.key} style={{ display: 'flex', gap: 16, paddingBottom: i < LIFECYCLE.length - 1 ? 18 : 0 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: i === 3 ? COLORS.signal : 'transparent', border: `1.5px solid ${i <= 3 ? COLORS.signal : COLORS.line}`, marginTop: 4 }} />
                          {i < LIFECYCLE.length - 1 && <span style={{ width: 1, flex: 1, backgroundColor: i < 3 ? COLORS.signal : COLORS.line, minHeight: 20 }} />}
                        </div>
                        <div>
                          <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.ink40 }}>
                            {row.label}
                          </div>
                          <div style={{ fontSize: 14, color: COLORS.structure, marginTop: 3, lineHeight: 1.5 }}>
                            {selectedProduct[row.key]}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 316 }}
                >
                  <p style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: COLORS.ink40, marginBottom: 12 }}>
                    No product selected
                  </p>
                  <p style={{ fontSize: 16, color: COLORS.ink55, lineHeight: 1.6, maxWidth: 320 }}>
                    Select a product to trace its path from opportunity to future expansion.
                  </p>
                  <p style={{ fontFamily: MONO, fontSize: 12, color: COLORS.ink40, marginTop: 20, lineHeight: 1.6 }}>
                    // different markets, same process
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Frame>
        </div>
      </Reveal>
    </Chapter>
  );
}
