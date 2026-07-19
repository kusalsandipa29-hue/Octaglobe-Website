import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { CaseStudyFigure } from '../components/CaseStudyFigure';
import { MAX_W, Reveal } from '../components/primitives';
import { SiteFooter } from '../components/SiteFooter';
import useCaseDiagram from '../../imports/cases/tapfare-lanka/Usecase TapFare Lanka.png';
import processDiagram from '../../imports/cases/tapfare-lanka/Process Diagram TapFare Lanka.png';
import sequenceDiagram from '../../imports/cases/tapfare-lanka/Sequence TapFare Lanka.png';
import dataModelDiagram from '../../imports/cases/tapfare-lanka/class TapFare Lanka.png';
import '../../styles/case-studies.css';

const DESCRIPTION =
  "TapFare Lanka is an R&D project exploring a QR-based, software-first fare and trip-management model for Sri Lanka's intercity bus services.";

const SECTIONS = [
  ['service', 'The service behind the ticket'],
  ['users', 'System roles'],
  ['fare-model', 'Fare model'],
  ['wallet', 'Wallet ledger'],
  ['transport-data', 'Transport data'],
  ['interfaces', 'Four interfaces'],
  ['constraints', 'Imperfect conditions'],
  ['outcome', 'MVP outcome'],
  ['next-stage', 'Next stage'],
];

const JOURNEY_STAGES = ['Board', 'Reserve', 'Travel', 'Exit', 'Settle', 'Report'];

function useTapFareMetadata() {
  useEffect(() => {
    const previousTitle = document.title;
    const imageUrl = new URL(dataModelDiagram, window.location.origin).href;
    const metaEntries = [
      ['name', 'description', DESCRIPTION],
      ['property', 'og:title', 'TapFare Lanka — OctaGlobe'],
      ['property', 'og:description', DESCRIPTION],
      ['property', 'og:type', 'article'],
      ['property', 'og:image', imageUrl],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', 'TapFare Lanka — OctaGlobe'],
      ['name', 'twitter:description', DESCRIPTION],
      ['name', 'twitter:image', imageUrl],
    ] as const;

    const restoreMeta = metaEntries.map(([attribute, key, content]) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      const created = !element;
      const previousContent = element?.content;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.content = content;

      return () => {
        if (created) {
          element?.remove();
        } else if (element && previousContent !== undefined) {
          element.content = previousContent;
        }
      };
    });

    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'TapFare Lanka',
      headline: 'Designing a more connected public transportation system',
      description: DESCRIPTION,
      image: imageUrl,
      url: window.location.href,
      creator: {
        '@type': 'Organization',
        name: 'OctaGlobe',
      },
    });
    document.head.appendChild(structuredData);
    document.title = 'TapFare Lanka — OctaGlobe';

    return () => {
      document.title = previousTitle;
      restoreMeta.forEach((restore) => restore());
      structuredData.remove();
    };
  }, []);
}

export function TapFareLankaCaseStudy() {
  useTapFareMetadata();

  return (
    <div className="tapfare-page">
      <main>
        <header className="digiq-hero tapfare-hero">
          <div className="case-container" style={{ maxWidth: MAX_W }}>
            <Reveal>
              <Link className="digiq-back" to="/case-studies">
                <ArrowLeft size={15} aria-hidden="true" />
                All case studies
              </Link>
            </Reveal>

            <div className="digiq-hero__grid tapfare-hero__grid">
              <Reveal delay={0.05}>
                <div className="case-eyebrow case-eyebrow--light">
                  <span>Case study 02</span>
                  <span aria-hidden="true" className="case-eyebrow__line" />
                  <span>Transport R&amp;D</span>
                </div>
                <h1>TapFare Lanka</h1>
              </Reveal>
              <Reveal delay={0.12} className="digiq-hero__lede-wrap tapfare-hero__lede-wrap">
                <p className="digiq-hero__lede">Designing a more connected public transportation system.</p>
                <p className="digiq-hero__summary">
                  TapFare Lanka is an R&amp;D project exploring how Sri Lanka&apos;s public transport services
                  could move from isolated, cash-based transactions towards a shared digital operating model.
                </p>
                <p className="digiq-hero__summary">
                  The MVP begins deliberately with intercity buses in Colombo and surrounding suburbs, where
                  one complete journey can be studied without presenting an early prototype as a national platform.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16} amount={0.1}>
              <ol className="tapfare-journey" aria-label="TapFare Lanka journey lifecycle">
                {JOURNEY_STAGES.map((stage, index) => (
                  <li key={stage}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {stage}
                  </li>
                ))}
              </ol>
            </Reveal>

            <dl className="digiq-meta">
              <div><dt>Project</dt><dd>Research &amp; development</dd></div>
              <div><dt>Scope</dt><dd>Colombo-area intercity buses</dd></div>
              <div><dt>Stage</dt><dd>Structured MVP</dd></div>
              <div><dt>System</dt><dd>QR + shared fare engine</dd></div>
            </dl>
          </div>
        </header>

        <div className="digiq-story tapfare-story case-container" style={{ maxWidth: MAX_W }}>
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

          <article className="digiq-article tapfare-article">
            <section id="service" className="digiq-section digiq-section--first">
              <div className="digiq-section__index">01</div>
              <h2>The service behind the ticket</h2>
              <p className="digiq-article__lead">A bus ticket is a small part of a much larger operation.</p>
              <p>
                Passengers need to know what they paid and where they are in the journey. Conductors need a
                quick way to verify travel without adding more work inside a crowded bus. Operators need
                reliable records of passenger activity and revenue. Route managers need consistent stops,
                fares, vehicles, and assignments.
              </p>
              <p>
                In the existing process, much of this information is carried through cash, printed tickets,
                memory, and manual reconciliation.
              </p>
              <p>
                Change shortages can create disputes. Fare calculations may vary. Missing transaction records
                make revenue leakage difficult to identify. Management receives little dependable data for
                planning routes or understanding demand.
              </p>
              <p>
                Earlier digital fare systems often relied on dedicated validators, NFC equipment, or
                point-of-sale hardware installed across every vehicle. That model can improve control, but it
                introduces procurement, installation, maintenance, and connectivity requirements that are
                difficult to sustain across a fragmented bus network.
              </p>
              <p>
                TapFare Lanka explored a different starting point: use passenger and conductor smartphones,
                printed or displayed QR codes, and a centralized fare engine before introducing new vehicle hardware.
              </p>
            </section>

            <section id="users" className="digiq-section">
              <div className="digiq-section__index">02</div>
              <h2>Defining the system around its users</h2>
              <p className="digiq-article__lead">
                The project was shaped around four roles rather than one passenger-facing application.
              </p>
              <dl className="tapfare-role-grid">
                <div>
                  <dt>Passengers</dt>
                  <dd>Manage authentication, wallet funds, trip entry, trip exit, receipts, and route progress.</dd>
                </div>
                <div>
                  <dt>Conductors</dt>
                  <dd>Control active shifts and verify passenger travel.</dd>
                </div>
                <div>
                  <dt>Managers</dt>
                  <dd>Coordinate buses, staff, assignments, and reporting.</dd>
                </div>
                <div>
                  <dt>Administrators</dt>
                  <dd>Maintain routes, stops, fare rules, permissions, and shared system configuration.</dd>
                </div>
              </dl>
              <CaseStudyFigure
                src={useCaseDiagram}
                alt="TapFare Lanka use-case diagram showing passenger, conductor, manager, and administrator responsibilities across the transport system"
                caption="The use-case model separates passenger travel, conductor operations, and administrative control while keeping them within one shared system."
                className="tapfare-figure tapfare-figure--portrait"
                width={1019}
                height={1218}
              />
              <p>
                This separation was important. A conductor should not work through a passenger interface, and a
                passenger should never be exposed to operational controls. Role-based access control keeps those
                responsibilities distinct while allowing every product to work from the same underlying transport data.
              </p>
              <p>
                The system therefore became more than a QR payment flow. It became a coordinated service model
                connecting people, buses, routes, stops, fare rules, wallets, trips, and operational records.
              </p>
            </section>

            <section id="fare-model" className="digiq-section">
              <div className="digiq-section__index">03</div>
              <h2>A fare model designed around an unfinished journey</h2>
              <p className="digiq-article__lead">The exact fare is not always known when a passenger boards.</p>
              <p>TapFare Lanka addresses this through a <strong>maximum-fare hold</strong>.</p>
              <p>
                When the passenger scans the active bus QR code, the system identifies the bus and route,
                determines the boarding point, and reserves enough wallet balance to cover the possible journey.
                The amount is held rather than immediately charged. The trip is then marked as active.
              </p>
              <p>
                When the passenger exits, a second scan closes the trip. The fare engine compares the boarding
                and exit points against the ordered route stops and applicable fare rules. It captures the actual
                fare and releases the unused portion of the hold.
              </p>
              <p>
                This creates a useful balance between passenger fairness and operator protection. The passenger
                pays for the completed journey, while the operator does not have to trust that sufficient funds
                will still be available at the end.
              </p>
              <CaseStudyFigure
                src={processDiagram}
                alt="TapFare Lanka passenger flow from login and wallet validation through QR boarding, active travel, exit confirmation, and fare settlement"
                caption="The passenger flow connects wallet validation, QR boarding, trip creation, exit handling, and fare settlement as one controlled lifecycle."
                className="tapfare-figure tapfare-figure--process"
                width={433}
                height={978}
              />
              <p>
                The flow also accounts for incomplete journeys. If no valid exit event is recorded within the
                permitted period, the trip cannot remain open indefinitely. An automatic closure rule estimates
                or applies the appropriate fare according to the configured policy.
              </p>
              <p>
                This is a deliberate trade-off. A strict full-route charge protects revenue but may penalize a
                passenger who forgot to scan. A softer estimate improves passenger fairness but requires stronger
                location evidence.
              </p>
              <p>
                The design keeps that behaviour within the fare rules so it can be adjusted during pilot testing
                rather than hard-coded into the passenger interface.
              </p>
            </section>

            <section id="wallet" className="digiq-section">
              <div className="digiq-section__index">04</div>
              <h2>Treating wallet activity as a ledger</h2>
              <p className="digiq-article__lead">A displayed balance is not enough for a transport payment system.</p>
              <p>Every top-up, hold, deduction, release, and penalty must be traceable.</p>
              <p>
                TapFare Lanka therefore models wallet activity as a transaction ledger rather than simply updating
                one balance value. At boarding, the system creates the hold as a financial event linked to the active trip.
              </p>
              <p>
                At exit, it captures the calculated fare and releases the remainder. The passenger receives a
                receipt, while management retains the underlying transaction history for reconciliation and dispute handling.
              </p>
              <CaseStudyFigure
                src={sequenceDiagram}
                alt="Sequence diagram showing QR boarding, trip creation, wallet fare hold, backend synchronization, exit validation, and final settlement"
                caption="The sequence model keeps trip state, wallet actions, and backend synchronization explicit throughout the journey."
                className="tapfare-figure tapfare-figure--wide"
                width={651}
                height={556}
              />
              <p>
                The technical requirements also considered duplicate requests and partial failures. Trip and payment
                operations need unique request identifiers, while wallet updates must complete atomically so a failed
                network response cannot create two trips or charge the same passenger twice.
              </p>
              <p>These concerns are less visible than the scan screen, but they determine whether the system can be trusted.</p>
            </section>

            <section id="transport-data" className="digiq-section">
              <div className="digiq-section__index">05</div>
              <h2>One source of transport data</h2>
              <p className="digiq-article__lead">Fare calculation depends on more than distance.</p>
              <p>
                The system needs to know which bus is active, which route it is assigned to, the direction of
                travel, the correct order of stops, and which fare rule applies between two positions.
              </p>
              <p>
                A change to a route or fare table must be reflected consistently in passenger trips, conductor
                validation, and management reports.
              </p>
              <p>
                The data model therefore connects users, wallets, buses, QR sessions, routes, ordered stops, trips,
                fare rules, payment transactions, and location records.
              </p>
              <CaseStudyFigure
                src={dataModelDiagram}
                alt="TapFare Lanka data model connecting users, wallets, buses, QR sessions, routes, stops, trips, fare rules, payments, and location records"
                caption="The refined data model separates transport operations from financial records while linking both through the trip."
                className="tapfare-figure tapfare-figure--wide"
                width={1200}
                height={834}
              />
              <p>
                The trip sits at the centre of this structure. It connects the passenger to a bus and route,
                records boarding and exit information, stores the held and final amounts, and provides the
                reference for payment transactions and location updates.
              </p>
              <p>
                This separation supports clearer reporting. Operational questions can be answered from trip and
                route records, while financial reconciliation remains grounded in the payment ledger.
              </p>
            </section>

            <section id="interfaces" className="digiq-section">
              <div className="digiq-section__index">06</div>
              <h2>Four interfaces, one set of rules</h2>
              <p className="digiq-article__lead">
                The documented architecture uses a shared backend rather than duplicating fare logic across each application.
              </p>
              <p>
                The passenger experience was planned as a React Progressive Web Application, reducing the need for
                an app-store installation and allowing the interface to adapt across common mobile devices.
              </p>
              <p>
                The conductor application uses Flutter, providing an Android-focused interface with direct camera
                access for repeated QR validation. Node.js with Express handles the central API layer. Firebase
                supports authentication, shared data, real-time updates, and managed backend services.
              </p>
              <p>
                The exact infrastructure can evolve, but the architectural decision remains important:
                authentication, fare calculation, wallet settlement, trip status, and permissions should be
                enforced centrally rather than trusted to an individual phone.
              </p>
              <h3>Passenger journey</h3>
              <ol className="tapfare-steps">
                {['Sign in', 'Check the wallet', 'Scan to board', 'Follow the route', 'Scan to exit', 'Review the receipt'].map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p>
                For conductors, the priorities are different. They need to start a shift, confirm the bus and route,
                display or manage the active QR session, validate passenger travel, and review a basic shift summary.
              </p>
              <p>
                Managers work at an operational level. Their portal supports vehicle and staff assignments, trip
                monitoring, revenue summaries, and filtered reports.
              </p>
              <p>
                Administrators maintain the system&apos;s controlled data: users, roles, routes, stops, terminals, fare
                bands, operators, settings, and audit records.
              </p>
              <p>
                The interfaces are different because the work is different. The data underneath them is shared
                because the service must remain consistent.
              </p>
            </section>

            <section id="constraints" className="digiq-section">
              <div className="digiq-section__index">07</div>
              <h2>Designing for imperfect conditions</h2>
              <p className="digiq-article__lead">
                A public transport system cannot assume continuous connectivity, recent smartphones, or confident digital users.
              </p>
              <p>
                The project diagrams explored an offline-aware flow in which boarding information can be stored
                locally and synchronized when connectivity returns. That direction reduces dependence on a stable
                signal at the exact moment a passenger boards.
              </p>
              <p>
                However, full offline settlement is more complex than local caching. QR validity, wallet funds,
                duplicated scans, fare-rule updates, and delayed synchronization all create conflict scenarios.
                Robust offline operation therefore remains a pilot-stage engineering requirement rather than a completed claim.
              </p>
              <p>
                The same caution applies to accessibility. A smartphone-first MVP is practical for testing the
                software model, but it cannot serve every passenger. Physical QR cards, assisted boarding, cash
                fallback procedures, and other access methods would need to be evaluated before broader adoption.
              </p>
              <p>
                Security introduces another trade-off. OTP authentication reduces password friction, but it still
                requires expiry, rate limiting, secure session handling, encrypted communication, and carefully
                enforced roles. Financial and personal data also require ongoing auditing rather than a one-time security decision.
              </p>
              <p>These constraints were not treated as secondary concerns. They define whether the concept can move beyond a controlled demonstration.</p>
            </section>

            <section id="outcome" className="digiq-section digiq-outcome tapfare-outcome">
              <div className="digiq-section__index">08</div>
              <h2>What the project produced</h2>
              <p className="digiq-article__lead">TapFare Lanka reached an MVP stage centred on intercity bus travel.</p>
              <h3>The work produced</h3>
              <ul>
                <li>a defined passenger journey;</li>
                <li>a conductor workflow;</li>
                <li>manager and administrator responsibilities;</li>
                <li>a maximum-fare hold model;</li>
                <li>wallet-ledger logic;</li>
                <li>system and process diagrams;</li>
                <li>a connected data model;</li>
                <li>interface designs;</li>
                <li>and a proposed shared architecture.</li>
              </ul>
              <h3>Edge cases made explicit</h3>
              <ul>
                <li>insufficient wallet balance before boarding;</li>
                <li>an invalid or expired QR session;</li>
                <li>a passenger who does not complete the exit scan;</li>
                <li>duplicate start or payment requests;</li>
                <li>conflicting bus and staff assignments;</li>
                <li>fare-band overlaps;</li>
                <li>and restricted access between passenger, conductor, manager, and administrator roles.</li>
              </ul>
              <p>
                The outcome is not evidence of a national deployment or measured improvement across the transport
                network. It is a structured MVP showing how a complete digital bus journey could be coordinated
                without installing a dedicated validator on every vehicle.
              </p>
              <p>
                That distinction matters. The project demonstrates the system logic and interaction model. Real
                operational value still needs to be established through a controlled route pilot.
              </p>
            </section>

            <section id="next-stage" className="digiq-section tapfare-next-stage">
              <div className="digiq-section__index">09</div>
              <h2>From bus ticketing to connected mobility</h2>
              <p className="digiq-article__lead">
                The next stage should begin with selected buses and routes rather than a broad rollout.
              </p>
              <p>A pilot would test:</p>
              <ul>
                <li>QR scanning under real boarding pressure;</li>
                <li>stop-detection accuracy;</li>
                <li>wallet settlement;</li>
                <li>conductor verification;</li>
                <li>intermittent connectivity;</li>
                <li>passenger support needs;</li>
                <li>and daily operator reconciliation.</li>
              </ul>
              <p>It would also reveal whether the maximum-fare hold feels understandable and fair to passengers.</p>
              <p>
                Once the core bus workflow is reliable, the same transport model could be extended carefully.
                Shared identity, wallet, route, stop, and payment services could support transfers between operators
                or, later, additional modes such as rail.
              </p>
              <blockquote>
                <span>Scope boundary</span>
                Future rail integration is not part of the implemented MVP.
              </blockquote>
              <p>
                What TapFare Lanka provides is the groundwork: a way to treat fare collection, passenger
                information, operational control, and transport data as parts of one service rather than separate tools.
              </p>
            </section>
          </article>
        </div>

        <section className="digiq-next">
          <div className="case-container digiq-next__inner" style={{ maxWidth: MAX_W }}>
            <div>
              <span>Previous case study</span>
              <h2>Explore DigiQ&apos;s connected public-service queue.</h2>
            </div>
            <Link to="/case-studies/digiq" className="digiq-next__link">
              View DigiQ
              <ArrowUpRight size={22} strokeWidth={1.6} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
