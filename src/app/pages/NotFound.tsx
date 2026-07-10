import { Link } from 'react-router';
import { COLORS, MONO, MAX_W } from '../components/primitives';

export function NotFound() {
  return (
    <section
      className="not-found-page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.clarity,
      }}
    >
      <div className="not-found-page__content" style={{ maxWidth: MAX_W, padding: '0 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.signal, marginBottom: 20 }}>
          404 — Off the map
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 600, letterSpacing: '-0.03em', color: COLORS.structure, marginBottom: 24 }}>
          This node doesn't exist.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: COLORS.ink55, maxWidth: 460, margin: '0 auto 40px' }}>
          The page you're looking for isn't part of the system. Let's get you back to a known point.
        </p>
        <Link
          to="/"
          className="not-found-page__link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: MONO,
            fontSize: 13,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: COLORS.structure,
            textDecoration: 'none',
            border: `1px solid ${COLORS.line}`,
            borderRadius: 999,
            padding: '12px 24px',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
