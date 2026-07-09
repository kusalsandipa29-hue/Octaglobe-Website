import { motion } from 'motion/react';
import type { ReactNode, CSSProperties } from 'react';

/* ============================================================
   OctaGlobe Design System — Four Primitives
   Node · Line · Module · Frame
   Color: #141228 structure · #03EF62 signal · #FFFFFF clarity
   ============================================================ */

export const COLORS = {
  structure: '#141228',
  signal: '#03EF62',
  clarity: '#FFFFFF',
  ink70: 'rgba(20,18,40,0.70)',
  ink55: 'rgba(20,18,40,0.55)',
  ink40: 'rgba(20,18,40,0.40)',
  ink25: 'rgba(20,18,40,0.25)',
  line: 'rgba(20,18,40,0.10)',
  lineFaint: 'rgba(20,18,40,0.06)',
  surface: '#FBFBFC',
};

export const MONO = "'JetBrains Mono', monospace";
export const MAX_W = 1180;

/* ---------- Reveal: fade + translateY on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  style,
  amount = 0.25,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  amount?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Chapter wrapper ---------- */
export function Chapter({
  id,
  children,
  background,
  style,
}: {
  id: string;
  children: ReactNode;
  background?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      style={{
        padding: '140px 0',
        backgroundColor: background ?? COLORS.clarity,
        position: 'relative',
        ...style,
      }}
    >
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>{children}</div>
    </section>
  );
}

/* ---------- Chapter label: "01 — WHY WE EXIST" ---------- */
export function ChapterLabel({ index, title, invert }: { index: string; title: string; invert?: boolean }) {
  const c = invert ? 'rgba(255,255,255,0.5)' : COLORS.ink40;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
      <span style={{ fontFamily: MONO, fontSize: 12, color: COLORS.signal, letterSpacing: '0.04em' }}>
        {index}
      </span>
      <span style={{ width: 24, height: 1, backgroundColor: invert ? 'rgba(255,255,255,0.2)' : COLORS.line }} />
      <span
        style={{
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: '0.22em',
          color: c,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </span>
    </div>
  );
}

/* ---------- Node: a point in the system ---------- */
export function Node({
  size = 12,
  active = false,
  filled = false,
  style,
}: {
  size?: number;
  active?: boolean;
  filled?: boolean;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        border: `1.5px solid ${active ? COLORS.signal : COLORS.line}`,
        backgroundColor: filled ? COLORS.signal : active ? 'rgba(3,239,98,0.12)' : 'transparent',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

/* ---------- Module: labeled cell built from Frame ---------- */
export function Module({
  label,
  sub,
  active = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
}: {
  label: string;
  sub?: string;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        border: `1px solid ${active ? COLORS.signal : COLORS.line}`,
        borderRadius: 12,
        padding: '16px 18px',
        backgroundColor: active ? 'rgba(3,239,98,0.05)' : COLORS.clarity,
        transition: 'all 0.25s ease',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.structure, letterSpacing: '-0.01em' }}>
        {label}
      </div>
      {sub && (
        <div style={{ fontFamily: MONO, fontSize: 11, color: COLORS.ink40, marginTop: 4, letterSpacing: '0.02em' }}>
          {sub}
        </div>
      )}
    </div>
  );
}

/* ---------- Frame: bordered container with optional corner ticks ---------- */
export function Frame({
  children,
  ticks = false,
  style,
}: {
  children: ReactNode;
  ticks?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        border: `1px solid ${COLORS.line}`,
        borderRadius: 16,
        position: 'relative',
        backgroundColor: COLORS.clarity,
        ...style,
      }}
    >
      {ticks &&
        [0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: COLORS.signal,
              ...(i === 0 ? { top: -3, left: -3 } : {}),
              ...(i === 1 ? { top: -3, right: -3 } : {}),
              ...(i === 2 ? { bottom: -3, left: -3 } : {}),
              ...(i === 3 ? { bottom: -3, right: -3 } : {}),
            }}
          />
        ))}
      {children}
    </div>
  );
}

/* ---------- Editorial heading ---------- */
export function ChapterTitle({ children, invert }: { children: ReactNode; invert?: boolean }) {
  return (
    <h2
      style={{
        fontSize: 'clamp(30px, 4.2vw, 52px)',
        fontWeight: 600,
        lineHeight: 1.12,
        letterSpacing: '-0.03em',
        color: invert ? COLORS.clarity : COLORS.structure,
        maxWidth: 780,
      }}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, invert }: { children: ReactNode; invert?: boolean }) {
  return (
    <p
      style={{
        fontSize: 18,
        lineHeight: 1.75,
        color: invert ? 'rgba(255,255,255,0.6)' : COLORS.ink55,
        maxWidth: 620,
        marginTop: 28,
      }}
    >
      {children}
    </p>
  );
}
