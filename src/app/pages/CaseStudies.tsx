import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MAX_W, Reveal } from '../components/primitives';
import { SiteFooter } from '../components/SiteFooter';
import digiqDashboard from '../../imports/cases/digiq/Product design 2.jpeg';
import digiqDevice from '../../imports/cases/digiq/Product design 3.jpeg';
import tapFareCover from '../../imports/cases/tapfare-lanka/Cover.png';
import tapFareProcess from '../../imports/cases/tapfare-lanka/Process Diagram TapFare Lanka.png';
import yamuRideCover from '../../imports/cases/yamu-ride/temp_cover.jpg';
import '../../styles/case-studies.css';

const DIGIQ_FACTS = [
  ['Sector', 'Public services'],
  ['Discipline', 'Service + product design'],
  ['Stage', 'End-to-end MVP'],
  ['System', 'Software + hardware'],
];

const TAPFARE_FACTS = [
  ['Sector', 'Public transportation'],
  ['Discipline', 'Product + system design'],
  ['Stage', 'Structured MVP'],
  ['System', 'Software-first fare model'],
];

const YAMU_RIDE_FACTS = [
  ['Sector', 'Shared mobility'],
  ['Discipline', 'MVP development'],
  ['Stage', 'In development'],
  ['Validation', 'Neo Venture + IQNITE finalist'],
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
                <span>03 / 03</span>
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

        <section className="case-index-featured" aria-label="Published case studies">
          <div className="case-container" style={{ maxWidth: MAX_W }}>
            <div className="case-index-list">
            <motion.article
              className="case-card"
              aria-labelledby="digiq-card-title"
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
                  {DIGIQ_FACTS.map(([label, value]) => (
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

            <motion.article
              className="case-card case-card--tapfare"
              aria-labelledby="tapfare-card-title"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                className="case-card__media"
                to="/case-studies/tapfare-lanka"
                aria-label="Read the TapFare Lanka case study"
              >
                <img
                  src={tapFareCover}
                  alt="TapFare Lanka transport and payment data model"
                  loading="lazy"
                  width={1200}
                  height={834}
                />
                <div className="case-card__device case-card__device--diagram" aria-hidden="true">
                  <img src={tapFareProcess} alt="" width={433} height={978} />
                </div>
                <span className="case-card__number">CS—02</span>
              </Link>

              <div className="case-card__body">
                <div className="case-card__heading">
                  <div>
                    <div className="case-card__kicker">Public transport R&amp;D</div>
                    <h2 id="tapfare-card-title">TapFare Lanka</h2>
                  </div>
                  <Link
                    className="case-round-link"
                    to="/case-studies/tapfare-lanka"
                    aria-label="Open TapFare Lanka case study"
                  >
                    <ArrowUpRight size={22} strokeWidth={1.6} aria-hidden="true" />
                  </Link>
                </div>

                <p className="case-card__summary">
                  An R&amp;D project exploring a software-first, QR-based fare and trip-management model for
                  Sri Lanka&apos;s intercity bus services.
                </p>

                <dl className="case-facts">
                  {TAPFARE_FACTS.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>

                <Link className="case-text-link" to="/case-studies/tapfare-lanka">
                  Read the full case study
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>

            <motion.article
              className="case-card"
              aria-labelledby="yamu-ride-card-title"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="case-card__media">
                <img
                  src={yamuRideCover}
                  alt="Yamu Ride identity and vehicle verification interface concepts"
                  loading="lazy"
                  width={1702}
                  height={958}
                />
                <span className="case-card__number">CS—03</span>
              </div>

              <div className="case-card__body">
                <div className="case-card__heading">
                  <div>
                    <div className="case-card__kicker">Fuel cost-based ride sharing</div>
                    <h2 id="yamu-ride-card-title">Yamu Ride</h2>
                  </div>
                </div>

                <p className="case-card__summary">
                  A fuel cost-based ride-sharing platform that helps passengers and drivers share daily routes
                  and reduce fuel costs. The MVP is being developed for the Sri Lankan market following finalist
                  selections by Neo Venture and IQNITE.
                </p>

                <dl className="case-facts">
                  {YAMU_RIDE_FACTS.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="case-text-link">Available soon</div>
              </div>
            </motion.article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
