import { useEffect, useState } from "react";
import "./App.css";

type SessionType =
  | "session"
  | "transport"
  | "break"
  | "meal"
  | "social"
  | "workshop";

type SubActivity = {
  time?: string;
  title: string;
  description?: string;
};

type DetailItem = {
  text: string;
  href?: string;
};

type DetailGroup = {
  title: string;
  items: DetailItem[];
};

type ActionLink = {
  label: string;
  href: string;
};

type Session = {
  time: string;
  duration?: string;
  title: string;
  description?: string;
  location?: string;
  locationUrl?: string;
  type?: SessionType;
  subActivities?: SubActivity[];
  detailGroups?: DetailGroup[];
  links?: ActionLink[];
};

type Day = {
  id: string;
  short: string;
  date: string;
  title: string;
  sessions: Session[];
};

type ModalType = "recommendations" | "attendees" | null;

const googleMapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;

const pickUpPoints: DetailItem[] = [
  {
    text: "Hotel BH La Quinta — Cra. 5 #74-52",
    href: googleMapsUrl(
      "Hotel BH La Quinta, Cra. 5 #74-52, Bogotá"
    ),
  },
  {
    text: "Hotel JW Marriott — Cl. 73 #8-60",
    href: googleMapsUrl(
      "JW Marriott Bogotá, Cl. 73 #8-60, Bogotá"
    ),
  },
  {
    text: "Hotel Mercure BH El Retiro — Av. Cl. 80 #10-10",
    href: googleMapsUrl(
      "Hotel Mercure BH El Retiro, Av. Cl. 80 #10-10, Bogotá"
    ),
  },
  {
    text: "Hotel ESTELAR Parque de la 93 — Cl. 93 #11-19",
    href: googleMapsUrl(
      "Hotel ESTELAR Parque de la 93, Cl. 93 #11-19, Bogotá"
    ),
  },
];

const days: Day[] = [
  {
    id: "day0",
    short: "SUN 30",
    date: "Sunday, August 30",
    title: "Welcome to Colombia",
    sessions: [
      {
        time: "17:30 – 18:00",
        duration: "30 min",
        title: "Transportation to Welcome Dinner",
        type: "transport",
        description:
          "Members of the Universidad de los Andes team will accompany delegates during the journey and provide on-site assistance upon arrival.",
        detailGroups: [
          {
            title: "Pick-Up Points",
            items: pickUpPoints,
          },
        ],
      },
      {
        time: "18:00 – 20:00",
        duration: "120 min",
        title: "Welcome Dinner",
        type: "social",
        location:
          "La Central Cevichería · Kr 13 #85-14, Bogotá",
        locationUrl: googleMapsUrl(
          "La Central Cevichería, Kr 13 #85-14, Bogotá"
        ),
        detailGroups: [
          {
            title: "Additional Information",
            items: [
              {
                text: "Dress code: Business formal",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "day1",
    short: "MON 31",
    date: "Monday, August 31",
    title: "Governance, Community & Impact",
    sessions: [
      {
        time: "07:30 – 08:30",
        duration: "60 min",
        title: "Transportation to Campus",
        type: "transport",
        description:
          "Universidad de los Andes staff will accompany delegates from the designated hotels to campus.",
        detailGroups: [
          {
            title: "Pick-Up Points",
            items: pickUpPoints,
          },
        ],
      },

      {
        time: "08:30 – 09:15",
        duration: "45 min",
        title: "Welcome & Official Opening",
        type: "session",
        location: "Council Room · Rectors’ Building",
        subActivities: [
          {
            title: "Registration & Welcome Coffee",
          },
          {
            title:
              "Official Opening · Presidents of Universidad de los Andes and HUC.",
          },
        ],
      },

      {
        time: "09:15 – 10:15",
        duration: "60 min",
        title: "Introduction to New Members",
        type: "session",
        location: "Council Room · Rectors’ Building",
        subActivities: [
          {
            title:
              "HUC Universities' Short Presentation",
          },
          {
            title:
              "Introduction of New HUC Members & MOU Signing Ceremony",
          },
        ],
      },

      {
        time: "10:15 – 10:30",
        duration: "15 min",
        title: "Coffee Break",
        type: "break",
      },

      {
        time: "10:30 – 12:00",
        duration: "90 min",
        title: "High-Level Panel",
        type: "session",
        location: "Council Room · Rectors’ Building",
        description:
          "Conversation with the Presidents — A Climate Dialogue Across the Americas: Contrasting Perspectives from the Global North and South.",
        detailGroups: [
          {
            title: "Moderator",
            items: [
              {
                text:
                  "Prof. Catalina González Arango — School of Sciences, Universidad de los Andes",
              },
            ],
          },
          {
            title: "Panelists",
            items: [
              {
                text:
                  "Raquel Bernal Salazar — President, Universidad de los Andes",
              },
              {
                text:
                  "Julián Rodríguez Priore — President, Universidad Austral",
              },
              {
                text:
                  "Juan Carlos de la Llera — President, Pontificia Universidad Católica de Chile (TBD)",
              },
              {
                text:
                  "Lisa Philipps — Interim President, York University (TBD)",
              },
              {
                text:
                  "Carlos Araya Leandro — President, Universidad de Costa Rica (TBD)",
              },
            ],
          },
          {
            title: "Participation",
            items: [
              {
                text:
                  "Hybrid session available for remote participants. Join the session here: Zoom Link.",
                href:
                  "https://uniandes-edu-co.zoom.us/j/89624317003",
              },
            ],
          },
        ],
      },

      {
        time: "12:00 – 12:45",
        duration: "45 min",
        title:
          "Official Photo & Cultural Performance",
        type: "social",
        location: "Villa Paulina",
        subActivities: [
          {
            title:
              "Walk to Lunch Venue & Official Photo",
          },
          {
            title: "Cultural Performance",
          },
        ],
      },

      {
        time: "12:45 – 14:00",
        duration: "75 min",
        title: "Networking Lunch",
        type: "meal",
        location: "Villa Paulina",
      },

      {
        time: "14:15 – 15:45",
        duration: "90 min",
        title: "HUC Balance and Reflections",
        type: "session",
        location:
          "Council Room · School of Engineering",
        subActivities: [
          {
            title:
              "HUC Annual Report Presentation — HUC Secretariat",
          },
          {
            title:
              "Seed Fund Project Presentations & VRI Reflections",
          },
          {
            title:
              "Social Ideas Challenge Reflections",
          },
          {
            title: "Testimonial Videos",
          },
        ],
      },

      {
        time: "15:45 – 16:00",
        duration: "15 min",
        title: "Coffee Break",
        type: "break",
      },

      {
        time: "16:00 – 17:45",
        duration: "105 min",
        title:
          "Workshop: Fostering Collaborative Initiatives",
        type: "workshop",
        location: "Universidad de los Andes",
        description:
          "Two parallel collaborative sessions on the HUC pillars of Research and Education to review and align ongoing initiatives, explore opportunities for continuity and enhancement, and identify potential new initiatives.",
        detailGroups: [
          {
            title: "Working Groups",
            items: [
              {
                text: "Research Working Group",
              },
              {
                text: "Academics Working Group",
              },
            ],
          },
        ],
      },

      {
        time: "17:45 – 18:00",
        duration: "15 min",
        title:
          "Coffee Break & Walk to Dinner Venue",
        type: "break",
      },

      {
        time: "18:00 – 20:00",
        duration: "120 min",
        title: "Welcome Reception",
        type: "social",
        location: "ML Building · Rooftop",
        subActivities: [
          {
            title:
              "HUC at a glance by the President · Mag. Julián Rodríguez — Universidad Austral",
          },
        ],
      },
    ],
  },

  {
    id: "day2",
    short: "TUE 1",
    date: "Tuesday, September 1",
    title: "Strategy & Projection",
    sessions: [
      {
        time: "08:00",
        duration: "60 min",
        title: "Transportation to Campus",
        type: "transport",
        description:
          "Members of the Universidad de los Andes team will accompany delegates during the journey to campus and provide on-site assistance upon arrival.",
        detailGroups: [
          {
            title: "Pick-Up Points",
            items: pickUpPoints,
          },
        ],
      },

      {
        time: "09:00 – 11:00",
        duration: "120 min",
        title:
          "Workshop: Shaping the 2027 Efforts",
        type: "workshop",
        location:
          "Council Room · School of Architecture & Design",
        description:
          "Strategic alignment session on the HUC pillars of Research and Education to consolidate insights from the previous workshop, reach consensus on the consortium's priorities and define milestones towards 2027.",
        detailGroups: [
          {
            title: "Session Objectives",
            items: [
              {
                text:
                  "Consolidate insights from the previous workshop.",
              },
              {
                text:
                  "Reach consensus on consortium priorities and efforts.",
              },
              {
                text:
                  "Define milestones towards 2027.",
              },
            ],
          },
          {
            title: "Participation",
            items: [
              {
                text:
                  "Hybrid participation available.",
              },
            ],
          },
        ],
      },

      {
        time: "11:00 – 11:15",
        duration: "15 min",
        title: "Coffee Break",
        type: "break",
      },

      {
        time: "11:15 – 12:45",
        duration: "90 min",
        title: "Academic Dialogue",
        type: "session",
        location:
          "Council Room · School of Architecture & Design",
        description:
          "Best Practices Exchange Panel — “Leadership with Global Conscience: Shaping Tomorrow’s Leaders”.",
        detailGroups: [
          {
            title: "Moderator",
            items: [
              {
                text:
                  "Carlos Guarnizo — BioCore Leader, Universidad de los Andes",
              },
            ],
          },
          {
            title: "Panelists",
            items: [
              {
                text:
                  "Angelika Rettberg — Dean of Social Sciences, Universidad de los Andes",
              },
              {
                text:
                  "Daniel Cadena — Dean of Sciences, Universidad de los Andes",
              },
              {
                text:
                  "Juan Camilo Cárdenas — Director of the SDGs Center, Universidad de los Andes",
              },
              {
                text:
                  "Marina Santucci — Research Professor, School of Business Sciences, Universidad Austral",
              },
              {
                text:
                  "Valérie Amiraux — Vice-Rector, Global Engagement and First Peoples",
              },
            ],
          },
          {
            title: "Participation",
            items: [
              {
                text:
                  "Hybrid session available for remote participants. Join the session here: Zoom Link.",
                href:
                  "https://uniandes-edu-co.zoom.us/j/89624317003",
              },
            ],
          },
        ],
      },

      {
        time: "12:45 – 13:00",
        duration: "15 min",
        title: "Walk to Lunch Venue",
        type: "session",
      },

      {
        time: "13:00 – 14:15",
        duration: "75 min",
        title: "Networking Lunch",
        type: "meal",
        location: "Cafetería Central · 2nd floor",
      },

      {
        time: "14:30 – 16:00",
        duration: "90 min",
        title:
          "Campus Tour: Uniandes’ Lighthouses",
        type: "social",
        location: "Universidad de los Andes",
      },

      {
        time: "16:00 – 17:00",
        duration: "60 min",
        title: "Closing Session",
        type: "session",
        location:
          "Japan Center · UME Auditorium",
        description:
          "Closing remarks and confirmation of the 2027 host institution.",
      },

      {
        time: "17:00 – 17:45",
        duration: "45 min",
        title: "Break Time",
        type: "break",
        description:
          "Time to take a pause and check emails. Optional stretching session.",
      },

      {
        time: "18:00 – 20:00",
        duration: "120 min",
        title: "Closing Dinner",
        location:
          "Japan Center · UME Auditorium",
        type: "social",
      },
    ],
  },
];

const recommendationSections = [
  {
    title: "Entry into Colombia",
    items: [
      "Although citizens of visiting countries do not require a visa to enter Colombia, they must have a valid passport with at least 6 months’ validity at the time of entry.",
      "It is recommended to have proof of accommodation booking and a return ticket readily available, as Migration authorities may request these.",
      "It is recommended to complete the CheckMig form between 1 hour and 72 hours before travel. This pre-registration process facilitates entry and exit procedures with Migración Colombia.",
    ],
  },
  {
    title: "Hotels",
    intro:
      "Recommended hotels are located in the Chapinero area, a neighborhood near the university with restaurants, pharmacies and supermarkets.",
    links: [
      {
        label:
          "Mercure BH El Retiro · Av. Cl. 80 #10-11",
        href: googleMapsUrl(
          "Mercure BH El Retiro Bogotá"
        ),
      },
      {
        label:
          "JW Marriott Hotel Bogotá · Cl. 73 #8-60",
        href: googleMapsUrl(
          "JW Marriott Hotel Bogotá"
        ),
      },
      {
        label:
          "BH La Quinta · Cra. 5 #74-52",
        href: googleMapsUrl(
          "Hotel BH La Quinta Bogotá"
        ),
      },
      {
        label:
          "Estelar Parque de la 93 Hotel · Cl. 93 #11-19",
        href: googleMapsUrl(
          "Estelar Parque de la 93 Hotel Bogotá"
        ),
      },
    ],
  },
  {
    title: "Attendees",
    items: [
      "Each institution is asked to register all its attendees through the designated form to confirm the number of participants and identify any dietary restrictions.",
      "The form should be completed by the date indicated by the event organizers.",
    ],
  },
  {
    title: "Dress Code",
    items: [
      "Business casual attire is recommended for all activities.",
      "For on-campus activities, closed-toe shoes are recommended. High heels and platform shoes should be avoided.",
    ],
  },
  {
    title: "Weather",
    items: [
      "The average temperature in Bogotá ranges from 12°C to 19°C (54°F–66°F), with a chance of rain.",
      "We recommend bringing a light jacket and an umbrella.",
    ],
  },
  {
    title: "Transportation",
    items: [
      "Universidad de los Andes will provide transportation from the hotels to the main campus during the activities on August 31 and September 1.",
      "Transportation to and from the airport should be arranged by each institution.",
      "For airport transfers, Uniandes recommends contacting Andrés Ruíz, a trusted transportation provider, at +57 315 554 9113. Participants wishing to use this service should coordinate directly with him.",
    ],
  },
  {
    title: "Currency Exchange",
    items: [
      "The official currency is the Colombian Peso (COP).",
      "It is recommended to exchange money at authorized exchange offices, preferably at the airport or in shopping centers near the hotel.",
      "International credit and debit cards are widely accepted.",
    ],
  },
  {
    title: "Dining",
    items: [
      "The recommended hotels and surrounding areas offer a wide range of dining options, including healthy, vegetarian and gluten-free alternatives.",
    ],
  },
  {
    title: "Travel Recommendations",
    items: [
      "Bogotá is located at an elevation of over 2,600 meters (8,500 feet) above sea level. Mild fatigue may be experienced during the first few days.",
      "It is recommended to stay hydrated, avoid excessive physical exertion and eat light meals upon arrival.",
    ],
  },
  {
    title: "Safety Recommendations",
    items: [
      "Avoid carrying large amounts of cash.",
      "Use taxis arranged through the hotel or trusted ride-hailing apps such as DiDi, Cabify or Uber.",
      "We recommend having medical insurance that covers any contingencies during your stay in Colombia, as Uniandes will not cover medical expenses.",
    ],
  },
  {
    title: "Communication",
    items: [
      "If you wish to stay connected locally, you may purchase an eSIM or physical SIM card from providers such as Claro, Movistar or Tigo.",
      "Most hotels, cafés and restaurants offer free Wi-Fi.",
      "Colombia’s international dialing code is +57.",
    ],
  },
];

function App() {
  const [selectedDay, setSelectedDay] =
    useState("day1");

  const [expandedSession, setExpandedSession] =
    useState<string | null>(null);

  const [modal, setModal] =
    useState<ModalType>(null);

  const day = days.find(
    (item) => item.id === selectedDay
  )!;

  const toggleSession = (id: string) => {
    setExpandedSession((current) =>
      current === id ? null : id
    );
  };

  const hasExpandableContent = (
    session: Session
  ) =>
    Boolean(
      session.subActivities?.length ||
        session.detailGroups?.length ||
        session.links?.length
    );

  useEffect(() => {
    if (!modal) {
      document.body.classList.remove(
        "modal-open"
      );
      return;
    }

    document.body.classList.add("modal-open");

    const closeWithEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setModal(null);
      }
    };

    window.addEventListener(
      "keydown",
      closeWithEscape
    );

    return () => {
      document.body.classList.remove(
        "modal-open"
      );

      window.removeEventListener(
        "keydown",
        closeWithEscape
      );
    };
  }, [modal]);

  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar-inner">
          <img
            src="/images/logo-huc.png"
            alt="Hemispheric University Consortium"
            className="logo logo-huc"
          />

          <img
            src="/images/logo-uniandes.png"
            alt="Universidad de los Andes"
            className="logo logo-uniandes"
          />
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-tools">
            <button
              type="button"
              className="glass-action-button"
              onClick={() =>
                setModal("recommendations")
              }
            >
              <span className="glass-action-icon">
                ✦
              </span>

              <span>
                Travel Tips & Recommendations
              </span>
            </button>

            <button
              type="button"
              className="glass-action-button"
              onClick={() =>
                setModal("attendees")
              }
            >
              <span className="glass-action-icon">
                ◉
              </span>

              <span>Attendees</span>
            </button>
          </div>

          <span className="eyebrow">
            BOGOTÁ · COLOMBIA
          </span>

          <h1>
            HUC General
            <br />
            Assembly <span>2026</span>
          </h1>

          <p>
            Connecting universities across the
            Americas to strengthen collaboration,
            research, education and collective
            impact.
          </p>

          <div className="hero-meta">
            <div>
              <small>DATES</small>
              <strong>
                August 30 — September 1
              </strong>
            </div>

            <div>
              <small>HOST</small>
              <strong>
                Universidad de los Andes
              </strong>
            </div>

            <div>
              <small>LOCATION</small>
              <strong>Bogotá, Colombia</strong>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="intro container">
          <span className="section-number">
            01
          </span>

          <div>
            <p className="section-kicker">
              GENERAL ASSEMBLY
            </p>

            <h2>
              A hemispheric meeting in Bogotá
            </h2>

            <p className="intro-copy">
              Presidents and university delegations
              from across the Americas come together
              at Universidad de los Andes for three
              days of dialogue, collaboration and
              strategic planning.
            </p>

            <div className="stats">
              <div>
                <strong>13</strong>
                <span>Member universities</span>
              </div>

              <div>
                <strong>9</strong>
                <span>
                  University presidents attending
                </span>
              </div>

              <div>
                <strong>12</strong>
                <span>
                  Institutions represented
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="program-section">
          <div className="container">
            <div className="program-heading">
              <div>
                <p className="section-kicker">
                  PROGRAM
                </p>

                <h2>Explore the agenda</h2>
              </div>

              <p>
                Select a day to explore sessions,
                workshops, transportation and social
                activities.
              </p>
            </div>

            <div className="day-tabs">
              {days.map((item) => (
                <button
                  key={item.id}
                  className={
                    selectedDay === item.id
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    setSelectedDay(item.id);
                    setExpandedSession(null);
                  }}
                >
                  <span>{item.short}</span>
                  <small>{item.title}</small>
                </button>
              ))}
            </div>

            <div className="day-header">
              <p>{day.date}</p>
              <h3>{day.title}</h3>
            </div>

            <div className="timeline">
              {day.sessions.map(
                (session, index) => {
                  const sessionId = `${day.id}-${index}`;

                  const expanded =
                    expandedSession ===
                    sessionId;

                  const expandable =
                    hasExpandableContent(
                      session
                    );

                  return (
                    <article
                      className={`session-card ${
                        session.type ??
                        "session"
                      }`}
                      key={sessionId}
                    >
                      <div className="session-time">
                        <strong>
                          {session.time}
                        </strong>

                        {session.duration && (
                          <span>
                            {
                              session.duration
                            }
                          </span>
                        )}
                      </div>

                      <div className="session-body">
                        <div className="session-top">
                          <div>
                            <span className="session-type">
                              {session.type ===
                                "transport" &&
                                "TRANSPORT"}

                              {session.type ===
                                "break" &&
                                "BREAK"}

                              {session.type ===
                                "meal" &&
                                "MEAL"}

                              {session.type ===
                                "social" &&
                                "SOCIAL"}

                              {session.type ===
                                "workshop" &&
                                "WORKSHOP"}

                              {(!session.type ||
                                session.type ===
                                  "session") &&
                                "SESSION"}
                            </span>

                            <h4>
                              {
                                session.title
                              }
                            </h4>
                          </div>

                          {expandable && (
                            <button
                              className={`expand-button ${
                                expanded
                                  ? "expanded"
                                  : ""
                              }`}
                              onClick={() =>
                                toggleSession(
                                  sessionId
                                )
                              }
                              aria-label={
                                expanded
                                  ? "Hide details"
                                  : "Show details"
                              }
                            >
                              <span />
                              <span />
                            </button>
                          )}
                        </div>

                        {session.location &&
                          (session.locationUrl ? (
                            <a
                              href={
                                session.locationUrl
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="location location-link"
                            >
                              ⌖{" "}
                              {
                                session.location
                              }
                            </a>
                          ) : (
                            <p className="location">
                              ⌖{" "}
                              {
                                session.location
                              }
                            </p>
                          ))}

                        {session.description && (
                          <p className="description">
                            {
                              session.description
                            }
                          </p>
                        )}

                        {expandable && (
                          <div
                            className={`details-wrapper ${
                              expanded
                                ? "open"
                                : ""
                            }`}
                          >
                            <div className="details-inner">
                              {session.subActivities &&
                                session
                                  .subActivities
                                  .length >
                                  0 && (
                                  <div className="subactivities">
                                    {session.subActivities.map(
                                      (
                                        activity,
                                        activityIndex
                                      ) => (
                                        <div
                                          className="subactivity"
                                          key={`${activity.title}-${activityIndex}`}
                                        >
                                          {activity.time && (
                                            <span className="subactivity-time">
                                              {
                                                activity.time
                                              }
                                            </span>
                                          )}

                                          <div className="subactivity-content">
                                            <span className="subactivity-title">
                                              {
                                                activity.title
                                              }
                                            </span>

                                            {activity.description && (
                                              <p>
                                                {
                                                  activity.description
                                                }
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}

                              {session.detailGroups?.map(
                                (
                                  group,
                                  groupIndex
                                ) => (
                                  <div
                                    className="detail-group"
                                    key={`${group.title}-${groupIndex}`}
                                  >
                                    <h5>
                                      {
                                        group.title
                                      }
                                    </h5>

                                    {group.items.map(
                                      (
                                        item,
                                        itemIndex
                                      ) => (
                                        <div
                                          className="detail-row"
                                          key={`${item.text}-${itemIndex}`}
                                        >
                                          <span>
                                            →
                                          </span>

                                          {item.href ? (
                                            <a
                                              href={
                                                item.href
                                              }
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {
                                                item.text
                                              }
                                            </a>
                                          ) : (
                                            <p>
                                              {
                                                item.text
                                              }
                                            </p>
                                          )}
                                        </div>
                                      )
                                    )}
                                  </div>
                                )
                              )}

                              {session.links &&
                                session.links
                                  .length >
                                  0 && (
                                  <div className="session-links">
                                    {session.links.map(
                                      (
                                        link
                                      ) => (
                                        <a
                                          key={
                                            link.label
                                          }
                                          href={
                                            link.href
                                          }
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="session-link"
                                        >
                                          {
                                            link.label
                                          }

                                          <span>
                                            ↗
                                          </span>
                                        </a>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>
              HUC General Assembly 2026
            </strong>

            <span>
              Universidad de los Andes · Bogotá,
              Colombia
            </span>
          </div>

          <span>
            August 30 — September 1, 2026
          </span>
        </div>
      </footer>

      {modal && (
        <div
          className="modal-backdrop"
          onMouseDown={() =>
            setModal(null)
          }
        >
          <div
            className="glass-modal"
            role="dialog"
            aria-modal="true"
            aria-label={
              modal ===
              "recommendations"
                ? "Travel Tips and Recommendations"
                : "Attendees"
            }
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <div className="glass-modal-glow" />

            <header className="modal-header">
              <div>
                <span className="modal-eyebrow">
                  HUC GENERAL ASSEMBLY 2026
                </span>

                <h2>
                  {modal ===
                  "recommendations"
                    ? "Travel Tips & Recommendations"
                    : "Attendees"}
                </h2>

                <p>
                  Universidad de los Andes ·
                  Bogotá, Colombia
                </p>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() =>
                  setModal(null)
                }
                aria-label="Close"
              >
                ×
              </button>
            </header>

            <div className="modal-content">
              {modal ===
                "recommendations" && (
                <div className="recommendations-grid">
                  {recommendationSections.map(
                    (section) => (
                      <section
                        className="recommendation-card"
                        key={
                          section.title
                        }
                      >
                        <span className="recommendation-dot" />

                        <h3>
                          {
                            section.title
                          }
                        </h3>

                        {"intro" in
                          section &&
                          section.intro && (
                            <p className="recommendation-intro">
                              {
                                section.intro
                              }
                            </p>
                          )}

                        {"items" in
                          section &&
                          section.items && (
                            <ul>
                              {section.items.map(
                                (
                                  item
                                ) => (
                                  <li
                                    key={
                                      item
                                    }
                                  >
                                    {
                                      item
                                    }
                                  </li>
                                )
                              )}
                            </ul>
                          )}

                        {"links" in
                          section &&
                          section.links && (
                            <div className="recommendation-links">
                              {section.links.map(
                                (
                                  link
                                ) => (
                                  <a
                                    href={
                                      link.href
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={
                                      link.label
                                    }
                                  >
                                    <span>
                                      {
                                        link.label
                                      }
                                    </span>

                                    <span>
                                      ↗
                                    </span>
                                  </a>
                                )
                              )}
                            </div>
                          )}
                      </section>
                    )
                  )}
                </div>
              )}

              {modal ===
                "attendees" && (
                <div className="attendees-coming-soon">
                  <div className="attendees-icon">
                    ◉
                  </div>

                  <span className="modal-eyebrow">
                    ATTENDEES
                  </span>

                  <h3>
                    Participant information
                    is being finalized
                  </h3>

                  <p>
                    The complete attendee
                    information will be
                    available here soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;