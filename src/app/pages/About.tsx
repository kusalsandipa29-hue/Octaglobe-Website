import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { COLORS, MONO, MAX_W, Reveal, Frame } from '../components/primitives';
import { SiteFooter } from '../components/SiteFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import galleryVideo from '../../imports/20260709-0534-40.7571043.mp4';

const GALLERY = [
  'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1631203924626-549ba231917e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
];

const NARRATIVE: { heading: string; body: string[] }[] = [
  {
    heading: "Building products shouldn't be a gamble. It should be a system.",
    body: [
      'Most teams start with an idea and hope it works. We start with the problem — watching how people actually work, where they get stuck, and what they quietly work around.',
      'That discipline lets us commit only to opportunities we have proven are real. Research before assumptions. Validation before investment.',
    ],
  },
  {
    heading: 'The market changes. The operating system does not.',
    body: [
      'We are industry-agnostic by design. Productivity, finance, healthcare, education, developer tools — the domain shifts, but the way we discover, validate, and build stays constant.',
      'That is what makes OctaGlobe durable: a repeatable engine for turning genuine opportunities into focused software products.',
    ],
  },
];

const REASONS = [
  'Because we research before we assume anything.',
  'Because we validate demand with real users before we build.',
  'Because we ship the smallest thing that proves the point.',
  'Because we measure outcomes, not opinions.',
];

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  return (
    <span ref={ref}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {to}
          {suffix}
        </motion.span>
      ) : (
        <span style={{ opacity: 0 }}>0{suffix}</span>
      )}
    </span>
  );
}

const STATS = [
  { value: 10, suffix: '', label: 'Step operating process' },
  { value: 8, suffix: '', label: 'Products in the system' },
  { value: 100, suffix: '%', label: 'Evidence-led decisions' },
  { value: 1, suffix: '', label: 'Independent team' },
];

export function About() {
  return (
    <div style={{ backgroundColor: COLORS.clarity }}>
      {/* Hero */}
      <section style={{ padding: '160px 0 72px', textAlign: 'center' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
              <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.ink40 }}>
                About Us
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              style={{
                fontSize: 'clamp(36px, 5.5vw, 68px)',
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: COLORS.structure,
                maxWidth: 900,
                margin: '0 auto',
              }}
            >
              We discover opportunities and turn them into software that's{' '}
              <span style={{ color: COLORS.signal }}>useful</span>,{' '}
              <span style={{ color: COLORS.signal }}>validated</span>, and{' '}
              <span style={{ color: COLORS.signal }}>built to last</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Gallery — video led */}
      <section style={{ paddingBottom: 40 }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16 }}
            className="lg:grid-cols-[1.6fr_1fr] grid-cols-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${COLORS.line}`, position: 'relative' }}
            >
              <video
                src={galleryVideo}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', aspectRatio: '16 / 10' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 20,
                  bottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 14px',
                  borderRadius: 999,
                  backgroundColor: 'rgba(20,18,40,0.55)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
                <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.clarity }}>
                  Inside the studio
                </span>
              </div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: 16 }}>
              {GALLERY.slice(0, 2).map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${COLORS.line}` }}
                >
                  <ImageWithFallback
                    src={src}
                    alt="OctaGlobe team at work"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 140 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Narrative sections */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'column', gap: 96 }}>
          {NARRATIVE.map((n, i) => (
            <div
              key={n.heading}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}
              className="lg:grid-cols-2 grid-cols-1"
            >
              <Reveal>
                <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.02em', color: COLORS.structure, maxWidth: 420 }}>
                  {n.heading}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {n.body.map((p, k) => (
                    <p key={k} style={{ fontSize: 17, lineHeight: 1.75, color: COLORS.ink55 }}>
                      {p}
                    </p>
                  ))}
                  {i === 0 && (
                    <div style={{ fontFamily: MONO, fontSize: 12, color: COLORS.signal, marginTop: 4 }}>
                      // proof over hope
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '40px 0' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, border: `1px solid ${COLORS.line}`, borderRadius: 16, overflow: 'hidden', backgroundColor: COLORS.line }}
            className="lg:grid-cols-4 grid-cols-2"
          >
            {STATS.map((s) => (
              <div key={s.label} style={{ backgroundColor: COLORS.clarity, padding: '36px 28px' }}>
                <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-0.03em', color: COLORS.structure }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: MONO, fontSize: 12, color: COLORS.ink40, marginTop: 8, letterSpacing: '0.02em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reason cards (2x2) */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 600, letterSpacing: '-0.02em', color: COLORS.structure, marginBottom: 48, maxWidth: 620 }}>
              Why teams trust the way we work.
            </h2>
          </Reveal>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}
            className="lg:grid-cols-2 grid-cols-1"
          >
            {REASONS.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              >
                <Frame ticks style={{ padding: '32px 32px', height: '100%' }}>
                  <div style={{ fontFamily: MONO, fontSize: 12, color: COLORS.signal, marginBottom: 16 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p style={{ fontSize: 19, fontWeight: 500, lineHeight: 1.5, color: COLORS.structure, letterSpacing: '-0.01em' }}>
                    {r}
                  </p>
                </Frame>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section style={{ padding: '96px 0 120px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 40px' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.02em', color: COLORS.structure }}>
              We believe every good idea deserves a real shot at becoming a product.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 20, fontWeight: 500, color: COLORS.signal, marginTop: 20 }}>
              Let's discover the next one, together.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 36 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574556132185-5f4a6ffa80c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="OctaGlobe founder"
                style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.structure }}>The OctaGlobe Team</div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: COLORS.ink40, letterSpacing: '0.04em' }}>
                  Product research &amp; development
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
