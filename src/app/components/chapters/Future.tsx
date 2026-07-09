import { useState } from 'react';
import { motion } from 'motion/react';
import { Chapter, ChapterLabel, ChapterTitle, Reveal, COLORS, MONO } from '../primitives';

type Kind = 'existing' | 'future' | 'research' | 'experimental' | 'unknown';

interface ConstNode {
  id: string;
  label: string;
  kind: Kind;
  x: number; // 0..100
  y: number; // 0..100
}

const NODES: ConstNode[] = [
  { id: 'cadence', label: 'Cadence', kind: 'existing', x: 30, y: 40 },
  { id: 'cohort', label: 'Cohort', kind: 'existing', x: 48, y: 55 },
  { id: 'draft', label: 'Draft', kind: 'existing', x: 62, y: 38 },
  { id: 'ledgerly', label: 'Ledgerly', kind: 'existing', x: 40, y: 68 },
  { id: 'vital', label: 'Vital', kind: 'future', x: 74, y: 60 },
  { id: 'access', label: 'Access', kind: 'future', x: 60, y: 74 },
  { id: 'signal', label: 'Signal', kind: 'research', x: 52, y: 28 },
  { id: 'aieval', label: 'AI Evaluation', kind: 'research', x: 78, y: 32 },
  { id: 'devtools', label: 'Developer Tools', kind: 'experimental', x: 85, y: 48 },
  { id: 'unknown1', label: '?', kind: 'unknown', x: 88, y: 72 },
  { id: 'unknown2', label: '?', kind: 'unknown', x: 24, y: 60 },
];

const EDGES: [string, string][] = [
  ['cadence', 'cohort'], ['cohort', 'draft'], ['cohort', 'ledgerly'],
  ['draft', 'vital'], ['ledgerly', 'vital'], ['draft', 'access'],
  ['cohort', 'signal'], ['draft', 'aieval'], ['aieval', 'devtools'],
  ['vital', 'unknown1'], ['cadence', 'unknown2'], ['cohort', 'aieval'],
  ['access', 'vital'],
];

const KIND_META: Record<Kind, { label: string; color: string; fill: string; dash?: boolean }> = {
  existing: { label: 'Live products', color: COLORS.signal, fill: COLORS.signal },
  future: { label: 'Next products', color: COLORS.structure, fill: COLORS.clarity },
  research: { label: 'Research areas', color: COLORS.structure, fill: COLORS.clarity, dash: true },
  experimental: { label: 'Experimental concepts', color: COLORS.ink40, fill: COLORS.clarity, dash: true },
  unknown: { label: 'Unknown opportunities', color: COLORS.ink25, fill: COLORS.clarity, dash: true },
};

export function Future() {
  const [hovered, setHovered] = useState<string | null>(null);
  const nodeById = (id: string) => NODES.find((n) => n.id === id)!;

  const connected = new Set<string>();
  if (hovered) {
    connected.add(hovered);
    EDGES.forEach(([a, b]) => {
      if (a === hovered) connected.add(b);
      if (b === hovered) connected.add(a);
    });
  }

  return (
    <Chapter id="future" background={COLORS.structure}>
      <ChapterLabel index="10" title="Future" invert />
      <Reveal>
        <ChapterTitle invert>The system is alive.</ChapterTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: 620, marginTop: 28 }}>
          Not a roadmap of promises — a living portfolio. Today's products lead into future ones,
          active research areas, and opportunities we haven't discovered yet. All of it connected.
        </p>
      </Reveal>

      <Reveal delay={0.15} style={{ marginTop: 56 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16,
            overflow: 'hidden',
            backgroundColor: 'rgba(255,255,255,0.015)',
          }}
        >
          {/* faint grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* edges */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
            {EDGES.map(([a, b], i) => {
              const na = nodeById(a);
              const nb = nodeById(b);
              const lit = hovered && (connected.has(a) && connected.has(b) && (a === hovered || b === hovered));
              return (
                <motion.line
                  key={i}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.05 }}
                  x1={`${na.x}%`} y1={`${na.y}%`} x2={`${nb.x}%`} y2={`${nb.y}%`}
                  stroke={lit ? COLORS.signal : 'rgba(255,255,255,0.14)'}
                  strokeWidth={lit ? 1.4 : 1}
                  strokeDasharray={KIND_META[nb.kind].dash || KIND_META[na.kind].dash ? '3 6' : undefined}
                />
              );
            })}
          </svg>

          {/* nodes */}
          {NODES.map((n, i) => {
            const meta = KIND_META[n.kind];
            const isConn = !hovered || connected.has(n.id);
            return (
              <motion.button
                key={n.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'absolute',
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  opacity: isConn ? 1 : 0.3,
                  transition: 'opacity 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  style={{
                    width: n.kind === 'existing' ? 12 : 9,
                    height: n.kind === 'existing' ? 12 : 9,
                    borderRadius: '50%',
                    border: `1.5px solid ${meta.color}`,
                    backgroundColor: n.kind === 'existing' ? meta.fill : 'transparent',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: n.kind === 'unknown' ? MONO : 'inherit',
                    fontSize: 12,
                    fontWeight: n.kind === 'existing' ? 600 : 500,
                    color: n.kind === 'existing' ? COLORS.clarity : 'rgba(255,255,255,0.55)',
                  }}
                >
                  {n.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 28 }}>
          {(Object.keys(KIND_META) as Kind[]).map((k) => {
            const meta = KIND_META[k];
            return (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    border: `1.5px solid ${meta.color}`,
                    backgroundColor: k === 'existing' ? meta.fill : 'transparent',
                  }}
                />
                <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.5)' }}>
                  {meta.label}
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Chapter>
  );
}
