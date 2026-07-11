import { motion } from 'motion/react';
import { Chapter, ChapterLabel, ChapterTitle, Reveal, COLORS, MONO } from '../primitives';
import { EvidenceIllustration } from '../illustrations/BrandIllustrations';

const TRADITIONAL = ['Assumption', 'Build', 'Launch', 'Hope', 'Rebuild'];
const OCTAGLOBE = ['Opportunity', 'Research', 'Validation', 'Product', 'Measure', 'Improve', 'Scale'];

function Flow({
  steps,
  faded,
  signal,
}: {
  steps: string[];
  faded?: boolean;
  signal?: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: faded ? 0.4 : 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: i * 0.12 }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '14px 18px',
              border: `1px solid ${signal && i === steps.length - 1 ? COLORS.signal : COLORS.line}`,
              borderRadius: 10,
              backgroundColor: signal && i === steps.length - 1 ? 'rgba(3,239,98,0.05)' : COLORS.clarity,
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: 11, color: signal ? COLORS.signal : COLORS.ink25, width: 20 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ fontSize: 15, fontWeight: 500, color: COLORS.structure }}>{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
                style={{
                  width: 1,
                  height: 14,
                  backgroundColor: signal ? COLORS.signal : COLORS.line,
                  transformOrigin: 'top',
                  display: 'block',
                }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function WhyWeExist() {
  return (
    <Chapter id="why-we-exist" background={COLORS.surface}>
      <ChapterLabel index="02" title="Why We Exist" />
      
      {/* Top section: Heading + Description + Illustration */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          marginBottom: 80,
          alignItems: 'start',
        }}
        className="lg:grid-cols-[1fr_1fr] grid-cols-1 lg:gap-12 xl:gap-16"
      >
        {/* Left: Heading and description */}
        <div>
          <Reveal>
            <ChapterTitle>Most products start with an assumption. Ours start with evidence.</ChapterTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: COLORS.ink55, maxWidth: 620, marginTop: 28 }} className="lg:text-lg lg:leading-relaxed">
              The usual path builds first and hopes second. We research before assuming and validate
              before investing — so the products we build are ones people genuinely use.
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
          <div style={{ width: 'min(380px, 100%)' }} className="lg:min-w-96">
            <EvidenceIllustration />
          </div>
        </div>
      </div>

      {/* Bottom section: Comparison flows */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 48,
          alignItems: 'start',
        }}
        className="home-why-grid lg:grid-cols-[1fr_auto_1fr] grid-cols-1"
      >
        {/* Traditional — fades */}
        <div className="home-why-column">
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.2em', color: COLORS.ink40, textTransform: 'uppercase', marginBottom: 24 }}>
            The Usual Path
          </div>
          <Flow steps={TRADITIONAL} faded />
          <p style={{ fontFamily: MONO, fontSize: 12, color: COLORS.ink40, marginTop: 24, lineHeight: 1.6 }}>
            // build first, hope second
          </p>
        </div>

        {/* Divider */}
        <div
          className="home-why-divider hidden lg:flex"
          style={{ alignSelf: 'stretch', width: 1, backgroundColor: COLORS.line, justifySelf: 'center' }}
        />

        {/* OctaGlobe — signal */}
        <div className="home-why-column">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.2em', color: COLORS.structure, textTransform: 'uppercase' }}>
              OctaGlobe
            </span>
          </div>
          <Flow steps={OCTAGLOBE} signal />
          <p style={{ fontFamily: MONO, fontSize: 12, color: COLORS.signal, marginTop: 24, lineHeight: 1.6 }}>
            // validate before you invest
          </p>
        </div>
      </div>

      <Reveal delay={0.1} style={{ marginTop: 80 }}>
        <p style={{ fontSize: 22, fontWeight: 500, color: COLORS.structure, letterSpacing: '-0.01em', maxWidth: 560 }}>
          Research before assumptions. Validation before investment.
        </p>
      </Reveal>
    </Chapter>
  );
}
