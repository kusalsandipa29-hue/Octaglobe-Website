import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MAX_W, Reveal } from '../components/primitives';
import { SiteFooter } from '../components/SiteFooter';
import digiqDashboard from '../../imports/cases/digiq/Product design 2.jpeg';
import digiqDevice from '../../imports/cases/digiq/Product design 3.jpeg';
import '../../styles/case-studies.css';

const FACTS = [
  ['Sector', 'Public services'],
  ['Discipline', 'Service + product design'],
  ['Stage', 'End-to-end MVP'],
  ['System', 'Software + hardware'],
];

export function CaseStudies() {
  return (
    <div className="case-studies-page">
      <main>
        <section className="case-index-hero">
          <div className="case-container" style={{ maxWidth: MAX_W }}>
            <Reveal>
              <div className="case-eyebrow">
                <span>Selected work</span>
                <span aria-hidden="true" className="case-eyebrow__line" />
                <span>01 / 01</span>
              </div>
              <h1>Case studies</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="case-index-hero__intro">
                A closer look at how we turn observed problems into working systems—across research,
                software, hardware, and the services around them.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="case-index-featured" aria-labelledby="digiq-card-title">
          <div className="case-container" style={{ maxWidth: MAX_W }}>
            <motion.article
              className="case-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link className="case-card__media" to="/case-studies/digiq" aria-label="Read the DigiQ case study">
                <img
                  src={digiqDashboard}
                  alt="DigiQ Pebble product design concept"
                  loading="eager"
                />
                <div className="case-card__device" aria-hidden="true">
                  <img src={digiqDevice} alt="" />
                </div>
                <span className="case-card__number">CS—01</span>
              </Link>

              <div className="case-card__body">
                <div className="case-card__heading">
                  <div>
                    <div className="case-card__kicker">Virtual queue management</div>
                    <h2 id="digiq-card-title">DigiQ</h2>
                  </div>
                  <Link className="case-round-link" to="/case-studies/digiq" aria-label="Open DigiQ case study">
                    <ArrowUpRight size={22} strokeWidth={1.6} aria-hidden="true" />
                  </Link>
                </div>

                <p className="case-card__summary">
                  One connected queue for citizens, counter staff, and administrators—with a physical
                  companion for people without smartphones.
                </p>

                <dl className="case-facts">
                  {FACTS.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>

                <Link className="case-text-link" to="/case-studies/digiq">
                  Read the full case study
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
