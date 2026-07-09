import { motion } from 'motion/react';
import { COLORS, MONO, MAX_W } from '../primitives';
import heroVideo from '../../../imports/WhatsApp_Video_2026-07-09_at_11.16.38_AM.mp4';

export function Landing() {
  return (
    <section
      id="landing"
      style={{
        minHeight: '100vh',
        paddingTop: 76, // account for fixed header height to avoid overlap
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: COLORS.structure,
        overflow: 'hidden',
      }}
    >
      {/* Background video */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Dark scrim for legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(180deg, rgba(20,18,40,0.72) 0%, rgba(20,18,40,0.55) 45%, rgba(20,18,40,0.85) 100%)',
        }}
      />

      {/* faint grid over the video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 45%, black 0%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 45%, black 0%, transparent 90%)',
        }}
      />

      <div
        style={{
          maxWidth: MAX_W,
          margin: '0 auto',
          padding: '0 40px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
          <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
            Independent Product R&D
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          style={{
            fontSize: 'clamp(44px, 7vw, 92px)',
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: '-0.04em',
            color: COLORS.clarity,
            maxWidth: 900,
          }}
        >
          We discover opportunities
          <br />
          and build products people use.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: 19,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 560,
            marginTop: 36,
          }}
        >
          OctaGlobe is an independent product research and development team. We research opportunities
          wherever they exist, validate them with real users, and turn the strongest ideas into focused
          software products.
        </motion.p>

        {/* Scroll cue — no CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          onClick={() => document.getElementById('why-we-exist')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginTop: 64,
            padding: 0,
            fontFamily: MONO,
            fontSize: 13,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: COLORS.clarity,
          }}
        >
          Explore the System
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'inline-flex' }}
          >
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M7 1V17M7 17L1 11M7 17L13 11" stroke={COLORS.signal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
