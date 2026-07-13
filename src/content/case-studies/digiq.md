# DigiQ

## Efficient virtual queue management for public services

DigiQ is a virtual queue management system designed for public offices where long physical queues, uncertain waiting times, and uneven connectivity affect both citizens and staff.

The system brings the full queue operation into one connected service. Citizens can join remotely, counter staff can manage tickets from a focused workspace, and administrators can monitor demand across the branch. For people without smartphones, a small handheld device provides access to the same live queue.

<figure>
  <img
    src="src/imports/cases/digiq/main dashboard for admin.png"
    alt="DigiQ administrative dashboard showing queue demand, active counters and service performance"
    loading="lazy"
  />
  <figcaption>
    The administrative dashboard combines live queue pressure, counter availability, service demand and operational controls in one view.
  </figcaption>
</figure>

---

## Context

Many public services still depend on people arriving early, collecting a number, and remaining close to the office until they are called.

This creates friction on both sides of the counter. Citizens have little visibility into how long they will wait. Staff must manage changing demand without a clear view of queue load, counter availability, or service performance.

A mobile-only system could improve part of the experience, but it would exclude citizens who do not own a smartphone or are less comfortable using one. DigiQ therefore began with a broader requirement: one queue had to support different levels of digital access without creating separate service paths.

---

## One queue, two ways to access it

Smartphone users enter the queue by scanning a QR code. Their digital ticket shows the service type, the number of people ahead, and an estimated service time. Live updates allow them to follow the queue without remaining inside the waiting area.

The interface also gives users control over their place in the queue. They can request a delay, leave the queue, review status changes, and receive a notification as their turn approaches.

<figure>
  <img
    src="src/imports/cases/digiq/User UI.png"
    alt="DigiQ citizen interface displaying an active ticket, estimated waiting time and queue updates"
    loading="lazy"
  />
  <figcaption>
    The citizen view keeps the most important information visible: ticket number, queue position, expected service time and recent changes.
  </figcaption>
</figure>

Citizens without smartphones use the DigiQ Pebble. The device displays their ticket and service information, then provides a physical alert when the queue moves or their turn is approaching.

The Pebble is not treated as a separate queue system. It is another interface connected to the same queue state. This decision keeps accessibility within the core architecture rather than adding it later as a secondary feature.

---

## Designing around the counter workflow

The staff interface was kept intentionally direct. Counter employees need to understand the current ticket, complete the service, handle a no-show, recall a citizen, pause the counter, or call the next person.

These actions are placed around the current service state rather than distributed across several screens. Upcoming tickets remain visible, but they do not compete with the task in progress.

<figure>
  <img
    src="src/imports/cases/digiq/staff UI.png"
    alt="DigiQ counter staff interface showing the current ticket, upcoming queue and counter actions"
    loading="lazy"
  />
  <figcaption>
    The counter workspace focuses on a small set of repeatable actions while keeping the next tickets within view.
  </figcaption>
</figure>

The administrative view addresses a different need. It shows how the branch is operating as a whole.

Administrators can compare waiting volume with available counters, identify services under pressure, review average waiting time, manage staff breaks, adjust priority rules, and respond when a queue exceeds its expected capacity.

Clear states such as **open**, **busy**, and **on break** make the dashboard readable at a glance. Detailed operational information is available without exposing staff to unnecessary system complexity.

---

## Building the DigiQ Pebble

The Pebble was shaped around a narrow purpose: show the ticket clearly, communicate a change, and provide a simple physical interaction.

Early CAD work explored the size of the enclosure, the position of the display, the main control, and access to the charging connection. The form was kept small enough to carry comfortably while leaving enough surface area for readable queue information.

<div>
  <figure>
    <img
      src="src/imports/cases/digiq/Product design 1.jpeg"
      alt="CAD model of the DigiQ Pebble enclosure"
      loading="lazy"
    />
    <figcaption>
      The enclosure was developed around screen visibility, simple controls and a compact handheld form.
    </figcaption>
  </figure>

  <figure>
    <img
      src="src/imports/cases/digiq/Product design 2.jpeg"
      alt="Refined render of the DigiQ Pebble displaying a queue ticket"
      loading="lazy"
    />
    <figcaption>
      The refined concept shows only the information needed while a citizen is waiting.
    </figcaption>
  </figure>

  <figure>
    <img
      src="src/imports/cases/digiq/Product design 3.jpeg"
      alt="Physical DigiQ Pebble prototype held in a hand"
      loading="lazy"
    />
    <figcaption>
      A physical enclosure prototype was produced to test scale, handling and component placement.
    </figcaption>
  </figure>
</div>

The electronics prototype uses an ESP32 microcontroller with a 0.96-inch OLED display, battery power, button input, and a vibration motor for alerts.

The component set was deliberately small. More controls would increase manufacturing and support requirements without improving the main queue experience.

<figure>
  <img
    src="src/imports/cases/digiq/wire diagram.png"
    alt="DigiQ Pebble wiring diagram showing the ESP32, OLED display, vibration motor, button and battery"
    loading="lazy"
  />
  <figcaption>
    The prototype electronics connect the display, physical input and vibration alert through an ESP32-based controller.
  </figcaption>
</figure>

---

## Working within real service constraints

Public offices vary in size, connectivity, staffing and the services they provide. DigiQ was therefore structured as a configurable system rather than a fixed workflow.

The same queue model can support document submissions, licence renewals, permits, healthcare services and other appointment-based processes. Each department can define its services and counter rules without changing the core citizen experience.

Connectivity was another practical constraint. The service was designed for environments where internet quality may be inconsistent, particularly outside major urban areas. Core queue access and status communication were prioritised over features that depend on continuous high-quality connectivity.

AI-based waiting-time prediction, biometric authentication and broader multilingual support were kept outside the initial MVP. They remain possible extensions, but adding them too early would have increased implementation risk before the basic queue operation had been tested.

---

## Outcome

The result is an end-to-end MVP that connects four parts of the same service:

- a citizen-facing ticket and queue-status experience;
- a focused workspace for counter staff;
- an administrative dashboard for branch-level oversight;
- and a physical queue device for citizens without smartphones.

The project demonstrates more than a digital ticket. It shows how queue state can remain consistent across software and hardware while each user receives an interface suited to their role.

DigiQ now provides a practical foundation for pilot testing in real public-service environments. The next stage is not simply to add more features. It is to observe how citizens move through the service, how staff respond to live demand, and where the queue model needs to adapt before wider deployment.
