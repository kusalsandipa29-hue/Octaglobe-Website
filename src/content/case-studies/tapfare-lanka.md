# TapFare Lanka

## Designing a more connected public transportation system

TapFare Lanka is an R&D project exploring how Sri Lanka’s public transport services could move from isolated, cash-based transactions towards a shared digital operating model.

The broader ambition is integrated public transportation. The current MVP deliberately begins with intercity buses in Colombo and surrounding suburbs, where the team could study one complete journey in detail: boarding, fare reservation, travel, exit validation, settlement, and operational reporting.

This narrower scope made it possible to test the foundation without presenting an early prototype as a national transport platform.

---

## The service behind the ticket

A bus ticket is a small part of a much larger operation.

Passengers need to know what they paid and where they are in the journey. Conductors need a quick way to verify travel without adding more work inside a crowded bus. Operators need reliable records of passenger activity and revenue. Route managers need consistent stops, fares, vehicles, and assignments.

In the existing process, much of this information is carried through cash, printed tickets, memory, and manual reconciliation.

Change shortages can create disputes. Fare calculations may vary. Missing transaction records make revenue leakage difficult to identify. Management receives little dependable data for planning routes or understanding demand.

Earlier digital fare systems often relied on dedicated validators, NFC equipment, or point-of-sale hardware installed across every vehicle. That model can improve control, but it introduces procurement, installation, maintenance, and connectivity requirements that are difficult to sustain across a fragmented bus network.

TapFare Lanka explored a different starting point: use passenger and conductor smartphones, printed or displayed QR codes, and a centralized fare engine before introducing new vehicle hardware.

---

## Defining the system around its users

The project was shaped around four roles rather than one passenger-facing application.

Passengers manage authentication, wallet funds, trip entry, trip exit, receipts, and route progress.

Conductors control active shifts and verify passenger travel.

Managers coordinate buses, staff, assignments, and reporting.

Administrators maintain the routes, stops, fare rules, permissions, and system configuration that every other interface depends on.

<figure>
  <img
    src="src/imports/cases/tapfare-lanka/Usecase TapFare Lanka.png"
    alt="TapFare Lanka use-case diagram showing passenger, conductor, manager, and administrator responsibilities across the transport system"
    loading="lazy"
  />
  <figcaption>
    The use-case model separates passenger travel, conductor operations, and administrative control while keeping them within one shared system.
  </figcaption>
</figure>

This separation was important.

A conductor should not work through a passenger interface, and a passenger should never be exposed to operational controls. Role-based access control keeps those responsibilities distinct while allowing every product to work from the same underlying transport data.

The system therefore became more than a QR payment flow. It became a coordinated service model connecting people, buses, routes, stops, fare rules, wallets, trips, and operational records.

---

## A fare model designed around an unfinished journey

The exact fare is not always known when a passenger boards.

TapFare Lanka addresses this through a **maximum-fare hold**.

When the passenger scans the active bus QR code, the system identifies the bus and route, determines the boarding point, and reserves enough wallet balance to cover the possible journey. The amount is held rather than immediately charged.

The trip is then marked as active.

When the passenger exits, a second scan closes the trip. The fare engine compares the boarding and exit points against the ordered route stops and applicable fare rules.

It captures the actual fare and releases the unused portion of the hold.

This creates a useful balance between passenger fairness and operator protection. The passenger pays for the completed journey, while the operator does not have to trust that sufficient funds will still be available at the end.

<figure>
  <img
    src="src/imports/cases/tapfare-lanka/Process Diagram TapFare Lanka.png"
    alt="TapFare Lanka passenger flow from login and wallet validation through QR boarding, active travel, exit confirmation, and fare settlement"
    loading="lazy"
  />
  <figcaption>
    The passenger flow connects wallet validation, QR boarding, trip creation, exit handling, and fare settlement as one controlled lifecycle.
  </figcaption>
</figure>

The flow also accounts for incomplete journeys.

If no valid exit event is recorded within the permitted period, the trip cannot remain open indefinitely. An automatic closure rule estimates or applies the appropriate fare according to the configured policy.

This is a deliberate trade-off.

A strict full-route charge protects revenue but may penalize a passenger who forgot to scan. A softer estimate improves passenger fairness but requires stronger location evidence.

The design keeps that behaviour within the fare rules so it can be adjusted during pilot testing rather than hard-coded into the passenger interface.

---

## Treating wallet activity as a ledger

A displayed balance is not enough for a transport payment system.

Every top-up, hold, deduction, release, and penalty must be traceable.

TapFare Lanka therefore models wallet activity as a transaction ledger rather than simply updating one balance value.

At boarding, the system creates the hold as a financial event linked to the active trip.

At exit, it captures the calculated fare and releases the remainder.

The passenger receives a receipt, while management retains the underlying transaction history for reconciliation and dispute handling.

<figure>
  <img
    src="src/imports/cases/tapfare-lanka/Sequence TapFare Lanka.png"
    alt="Sequence diagram showing QR boarding, trip creation, wallet fare hold, backend synchronization, exit validation, and final settlement"
    loading="lazy"
  />
  <figcaption>
    The sequence model keeps trip state, wallet actions, and backend synchronization explicit throughout the journey.
  </figcaption>
</figure>

The technical requirements also considered duplicate requests and partial failures.

Trip and payment operations need unique request identifiers, while wallet updates must complete atomically so a failed network response cannot create two trips or charge the same passenger twice.

These concerns are less visible than the scan screen, but they determine whether the system can be trusted.

---

## One source of transport data

Fare calculation depends on more than distance.

The system needs to know which bus is active, which route it is assigned to, the direction of travel, the correct order of stops, and which fare rule applies between two positions.

A change to a route or fare table must be reflected consistently in passenger trips, conductor validation, and management reports.

The data model therefore connects users, wallets, buses, QR sessions, routes, ordered stops, trips, fare rules, payment transactions, and location records.

<figure>
  <img
    src="src/imports/cases/tapfare-lanka/class TapFare Lanka.png"
    alt="TapFare Lanka data model connecting users, wallets, buses, QR sessions, routes, stops, trips, fare rules, payments, and location records"
    loading="lazy"
  />
  <figcaption>
    The refined data model separates transport operations from financial records while linking both through the trip.
  </figcaption>
</figure>

The trip sits at the centre of this structure.

It connects the passenger to a bus and route, records boarding and exit information, stores the held and final amounts, and provides the reference for payment transactions and location updates.

This separation supports clearer reporting.

Operational questions can be answered from trip and route records, while financial reconciliation remains grounded in the payment ledger.

---

## Four interfaces, one set of rules

The documented architecture uses a shared backend rather than duplicating fare logic across each application.

The passenger experience was planned as a React Progressive Web Application, reducing the need for an app-store installation and allowing the interface to adapt across common mobile devices.

The conductor application uses Flutter, providing an Android-focused interface with direct camera access for repeated QR validation.

Node.js with Express handles the central API layer.

Firebase supports authentication, shared data, real-time updates, and managed backend services.

The exact infrastructure can evolve, but the architectural decision remains important: authentication, fare calculation, wallet settlement, trip status, and permissions should be enforced centrally rather than trusted to an individual phone.

For passengers, the interface concentrates on a small sequence of actions:

1. Sign in.
2. Check the wallet.
3. Scan to board.
4. Follow the route.
5. Scan to exit.
6. Review the receipt.

For conductors, the priorities are different.

They need to start a shift, confirm the bus and route, display or manage the active QR session, validate passenger travel, and review a basic shift summary.

Managers work at an operational level. Their portal supports vehicle and staff assignments, trip monitoring, revenue summaries, and filtered reports.

Administrators maintain the system’s controlled data: users, roles, routes, stops, terminals, fare bands, operators, settings, and audit records.

The interfaces are different because the work is different.

The data underneath them is shared because the service must remain consistent.

---

## Designing for imperfect conditions

A public transport system cannot assume continuous connectivity, recent smartphones, or confident digital users.

The project diagrams explored an offline-aware flow in which boarding information can be stored locally and synchronized when connectivity returns.

That direction reduces dependence on a stable signal at the exact moment a passenger boards.

However, full offline settlement is more complex than local caching.

QR validity, wallet funds, duplicated scans, fare-rule updates, and delayed synchronization all create conflict scenarios.

Robust offline operation therefore remains a pilot-stage engineering requirement rather than a completed claim.

The same caution applies to accessibility.

A smartphone-first MVP is practical for testing the software model, but it cannot serve every passenger.

Physical QR cards, assisted boarding, cash fallback procedures, and other access methods would need to be evaluated before broader adoption.

Security introduces another trade-off.

OTP authentication reduces password friction, but it still requires expiry, rate limiting, secure session handling, encrypted communication, and carefully enforced roles.

Financial and personal data also require ongoing auditing rather than a one-time security decision.

These constraints were not treated as secondary concerns. They define whether the concept can move beyond a controlled demonstration.

---

## What the project produced

TapFare Lanka reached an MVP stage centred on intercity bus travel.

The work produced:

- a defined passenger journey;
- a conductor workflow;
- manager and administrator responsibilities;
- a maximum-fare hold model;
- wallet-ledger logic;
- system and process diagrams;
- a connected data model;
- interface designs;
- and a proposed shared architecture.

It also clarified several edge cases that a simple ticketing prototype might overlook:

- insufficient wallet balance before boarding;
- an invalid or expired QR session;
- a passenger who does not complete the exit scan;
- duplicate start or payment requests;
- conflicting bus and staff assignments;
- fare-band overlaps;
- and restricted access between passenger, conductor, manager, and administrator roles.

The outcome is not evidence of a national deployment or measured improvement across the transport network.

It is a structured MVP showing how a complete digital bus journey could be coordinated without installing a dedicated validator on every vehicle.

That distinction matters.

The project demonstrates the system logic and interaction model. Real operational value still needs to be established through a controlled route pilot.

---

## From bus ticketing to connected mobility

The next stage should begin with selected buses and routes rather than a broad rollout.

A pilot would test:

- QR scanning under real boarding pressure;
- stop-detection accuracy;
- wallet settlement;
- conductor verification;
- intermittent connectivity;
- passenger support needs;
- and daily operator reconciliation.

It would also reveal whether the maximum-fare hold feels understandable and fair to passengers.

Once the core bus workflow is reliable, the same transport model could be extended carefully.

Shared identity, wallet, route, stop, and payment services could support transfers between operators or, later, additional modes such as rail.

That future integration is not yet part of the implemented MVP.

What TapFare Lanka provides is the groundwork: a way to treat fare collection, passenger information, operational control, and transport data as parts of one service rather than separate tools.
