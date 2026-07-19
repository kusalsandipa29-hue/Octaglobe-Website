import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { MAX_W, Reveal } from '../components/primitives';
import { CaseStudyFigure } from '../components/CaseStudyFigure';
import { SiteFooter } from '../components/SiteFooter';
import dashboardImage from '../../imports/cases/digiq/Product design 2.jpeg';
import citizenImage from '../../imports/cases/digiq/User UI.png';
import staffImage from '../../imports/cases/digiq/staff UI.png';
import productCad from '../../imports/cases/digiq/Product design 1.jpeg';
import productRender from '../../imports/cases/digiq/Product design 2.jpeg';
import productPrototype from '../../imports/cases/digiq/Product design 3.jpeg';
import wireDiagram from '../../imports/cases/digiq/wire diagram.png';
import '../../styles/case-studies.css';

const SECTIONS = [
  ['context', 'Context'],
  ['access', 'Two ways to access'],
  ['workflow', 'Counter workflow'],
  ['pebble', 'The DigiQ Pebble'],
  ['constraints', 'Service constraints'],
  ['outcome', 'Outcome'],
];

export function DigiQCaseStudy() {
  return (
    <div className="digiq-page">
      <main>
        <header className="digiq-hero">
          <div className="case-container" style={{ maxWidth: MAX_W }}>
            <Reveal>
              <Link className="digiq-back" to="/case-studies">
                <ArrowLeft size={15} aria-hidden="true" />
                All case studies
              </Link>
            </Reveal>

            <div className="digiq-hero__grid">
              <Reveal delay={0.05}>
                <div className="case-eyebrow case-eyebrow--light">
                  <span>Case study 01</span>
                  <span aria-hidden="true" className="case-eyebrow__line" />
                  <span>Public services</span>
                </div>
                <h1>DigiQ</h1>
              </Reveal>
              <Reveal delay={0.12} className="digiq-hero__lede-wrap">
                <p className="digiq-hero__lede">Efficient virtual queue management for public services.</p>
                <p className="digiq-hero__summary">
                  A connected service that lets citizens join remotely, gives staff a focused counter
                  workspace, and keeps access open to people without smartphones.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16} amount={0.1}>
              <div className="digiq-hero__image">
                <img
                  src={dashboardImage}
                  alt="DigiQ Pebble product design concept"
                  loading="eager"
                />
                <span className="digiq-hero__image-label">DigiQ Pebble / product concept</span>
              </div>
            </Reveal>

            <dl className="digiq-meta">
              <div><dt>Project</dt><dd>Independent product R&amp;D</dd></div>
              <div><dt>Scope</dt><dd>Research, UX, UI, hardware</dd></div>
              <div><dt>Output</dt><dd>End-to-end MVP</dd></div>
              <div><dt>Platform</dt><dd>Web + ESP32 device</dd></div>
            </dl>
          </div>
        </header>

        <div className="digiq-story case-container" style={{ maxWidth: MAX_W }}>
          <aside className="digiq-toc" aria-label="Case study contents">
            <span>On this page</span>
            <nav>
              {SECTIONS.map(([id, label], index) => (
                <a key={id} href={`#${id}`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>{label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="digiq-article">
            <section id="context" className="digiq-section digiq-section--first">
              <div className="digiq-section__index">01</div>
              <h2>Context</h2>
              <p className="digiq-article__lead">
                Many public services still depend on people arriving early, collecting a number, and
                remaining close to the office until they are called.
              </p>
              <p>
                This creates friction on both sides of the counter. Citizens have little visibility into
                how long they will wait. Staff must manage changing demand without a clear view of queue
                load, counter availability, or service performance.
              </p>
              <p>
                A mobile-only system could improve part of the experience, but it would exclude citizens
                who do not own a smartphone or are less comfortable using one. DigiQ therefore began with
                a broader requirement: one queue had to support different levels of digital access without
                creating separate service paths.
              </p>
              <blockquote>
                <span>The design principle</span>
                One queue. Multiple ways in. The same live state for everyone.
              </blockquote>
            </section>

            <section id="access" className="digiq-section">
              <div className="digiq-section__index">02</div>
              <h2>One queue, two ways to access it</h2>
              <p>
                Smartphone users enter the queue by scanning a QR code. Their digital ticket shows the
                service type, the number of people ahead, and an estimated service time. Live updates
                allow them to follow the queue without remaining inside the waiting area.
              </p>
              <p>
                The interface also gives users control over their place in the queue. They can request a
                delay, leave the queue, review status changes, and receive a notification as their turn
                approaches.
              </p>
              <CaseStudyFigure
                src={citizenImage}
                alt="DigiQ citizen interface displaying an active ticket, estimated waiting time and queue updates"
                caption="The citizen view keeps the most important information visible: ticket number, queue position, expected service time and recent changes."
                className="digiq-figure--phone"
              />
              <p>
                Citizens without smartphones use the <strong>DigiQ Pebble</strong>. The device displays
                their ticket and service information, then provides a physical alert when the queue moves
                or their turn is approaching.
              </p>
              <p>
                The Pebble is not treated as a separate queue system. It is another interface connected to
                the same queue state. This decision keeps accessibility within the core architecture
                rather than adding it later as a secondary feature.
              </p>
            </section>

            <section id="workflow" className="digiq-section">
              <div className="digiq-section__index">03</div>
              <h2>Designing around the counter workflow</h2>
              <p>
                The staff interface was kept intentionally direct. Counter employees need to understand
                the current ticket, complete the service, handle a no-show, recall a citizen, pause the
                counter, or call the next person.
              </p>
              <p>
                These actions are placed around the current service state rather than distributed across
                several screens. Upcoming tickets remain visible, but they do not compete with the task in
                progress.
              </p>
              <CaseStudyFigure
                src={staffImage}
                alt="DigiQ counter staff interface showing the current ticket, upcoming queue and counter actions"
                caption="The counter workspace focuses on a small set of repeatable actions while keeping the next tickets within view."
              />
              <p>
                The administrative view addresses a different need. It shows how the branch is operating
                as a whole.
              </p>
              <p>
                Administrators can compare waiting volume with available counters, identify services
                under pressure, review average waiting time, manage staff breaks, adjust priority rules,
                and respond when a queue exceeds its expected capacity.
              </p>
              <p>
                Clear states such as <strong>open</strong>, <strong>busy</strong>, and <strong>on break</strong>
                make the dashboard readable at a glance. Detailed operational information is available
                without exposing staff to unnecessary system complexity.
              </p>
            </section>

            <section id="pebble" className="digiq-section">
              <div className="digiq-section__index">04</div>
              <h2>Building the DigiQ Pebble</h2>
              <p>
                The Pebble was shaped around a narrow purpose: show the ticket clearly, communicate a
                change, and provide a simple physical interaction.
              </p>
              <p>
                Early CAD work explored the size of the enclosure, the position of the display, the main
                control, and access to the charging connection. The form was kept small enough to carry
                comfortably while leaving enough surface area for readable queue information.
              </p>

              <div className="digiq-product-grid">
                <CaseStudyFigure
                  src={productCad}
                  alt="CAD model of the DigiQ Pebble enclosure"
                  caption="The enclosure was developed around screen visibility, simple controls and a compact form."
                />
                <CaseStudyFigure
                  src={productRender}
                  alt="Refined render of the DigiQ Pebble displaying a queue ticket"
                  caption="The refined concept shows only the information needed while a citizen is waiting."
                />
                <CaseStudyFigure
                  src={productPrototype}
                  alt="Physical DigiQ Pebble prototype held in a hand"
                  caption="A physical prototype tested scale, handling and component placement."
                />
              </div>

              <p>
                The electronics prototype uses an ESP32 microcontroller with a 0.96-inch OLED display,
                battery power, button input, and a vibration motor for alerts.
              </p>
              <p>
                The component set was deliberately small. More controls would increase manufacturing and
                support requirements without improving the main queue experience.
              </p>
              <CaseStudyFigure
                src={wireDiagram}
                alt="DigiQ Pebble wiring diagram showing the ESP32, OLED display, vibration motor, button and battery"
                caption="The prototype electronics connect the display, physical input and vibration alert through an ESP32-based controller."
              />
            </section>

            <section id="constraints" className="digiq-section">
              <div className="digiq-section__index">05</div>
              <h2>Working within real service constraints</h2>
              <p>
                Public offices vary in size, connectivity, staffing and the services they provide. DigiQ
                was therefore structured as a configurable system rather than a fixed workflow.
              </p>
              <p>
                The same queue model can support document submissions, licence renewals, permits,
                healthcare services and other appointment-based processes. Each department can define its
                services and counter rules without changing the core citizen experience.
              </p>
              <p>
                Connectivity was another practical constraint. The service was designed for environments
                where internet quality may be inconsistent, particularly outside major urban areas. Core
                queue access and status communication were prioritised over features that depend on
                continuous high-quality connectivity.
              </p>
              <p>
                AI-based waiting-time prediction, biometric authentication and broader multilingual
                support were kept outside the initial MVP. They remain possible extensions, but adding
                them too early would have increased implementation risk before the basic queue operation
                had been tested.
              </p>
            </section>

            <section id="outcome" className="digiq-section digiq-outcome">
              <div className="digiq-section__index">06</div>
              <h2>Outcome</h2>
              <p className="digiq-article__lead">
                The result is an end-to-end MVP that connects four parts of the same service:
              </p>
              <ul>
                <li>a citizen-facing ticket and queue-status experience;</li>
                <li>a focused workspace for counter staff;</li>
                <li>an administrative dashboard for branch-level oversight;</li>
                <li>and a physical queue device for citizens without smartphones.</li>
              </ul>
              <p>
                The project demonstrates more than a digital ticket. It shows how queue state can remain
                consistent across software and hardware while each user receives an interface suited to
                their role.
              </p>
              <p>
                DigiQ now provides a practical foundation for pilot testing in real public-service
                environments. The next stage is not simply to add more features. It is to observe how
                citizens move through the service, how staff respond to live demand, and where the queue
                model needs to adapt before wider deployment.
              </p>
            </section>
          </article>
        </div>

        <section className="digiq-next">
          <div className="case-container digiq-next__inner" style={{ maxWidth: MAX_W }}>
            <div>
              <span>End of case study</span>
              <h2>Explore the work behind the systems.</h2>
            </div>
            <Link to="/case-studies" className="digiq-next__link">
              All case studies
              <ArrowUpRight size={22} strokeWidth={1.6} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
