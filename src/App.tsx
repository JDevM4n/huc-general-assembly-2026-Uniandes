import { useState } from "react";
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

const googleMapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;

const pickUpPoints: DetailItem[] = [
  {
    text: "Hotel BH La Quinta — Cra. 5 #74-52",
    href: googleMapsUrl("Hotel BH La Quinta, Cra. 5 #74-52, Bogotá"),
  },
  {
    text: "Hotel JW Marriott — Cl. 73 #8-60",
    href: googleMapsUrl("JW Marriott Bogotá, Cl. 73 #8-60, Bogotá"),
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

        location: "La Central Cevichería · Kr 13 #85-14, Bogotá",
        locationUrl: googleMapsUrl(
          "La Central Cevichería, Kr 13 #85-14, Bogotá"
        ),

        detailGroups: [
          {
            title: "Additional Information",
            items: [{ text: "Dress code: Business formal" }],
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

      /* REGISTRATION + OPENING */

      {
        time: "08:30 – 09:15",
        duration: "45 min",
        title: "Welcome & Official Opening",
        type: "session",
        location: "Council Room · Rectors’ Building",

        subActivities: [
          {
            time: "",
            title: "Registration & Welcome Coffee",
          },
          {
            time: "",
            title: "Official Opening : Presidents of Universidad de los Andes and HUC.",
            description:
              "",
          },
        ],
      },

      /* HUC PRESENTATIONS + MOU */

      {
        time: "09:15 – 10:15",
        duration: "60 min",
        title: "Introduction to New Members",
        type: "session",
        location: "Council Room · Rectors’ Building",

        subActivities: [
          {
            time: "",
            title: "HUC Universities' Short Presentation",
          },
          {
            time: "",
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

      /* HIGH LEVEL PANEL */

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
              }
            ],
          },

          {
            title: "Participation",
            items: [

              {
                text: "Hybrid session available for remote participants. Join the session here: Zoom Link.",
                href: "https://uniandes-edu-co.zoom.us/j/89624317003",
              },
            ],
          },
        ],

        /*
        Cuando te entreguen el Zoom:
        links: [
          {
            label: "Join via Zoom",
            href: "PEGAR_AQUI_LINK_ZOOM"
          }
        ],
        */
      },

      /* WALK + CULTURAL PERFORMANCE */

      {
        time: "12:00 – 12:45",
        duration: "45 min",
        title: "Official Photo & Cultural Performance",
        type: "social",
        location: "Villa Paulina",

        subActivities: [
          {
            time: "",
            title: "Walk to Lunch Venue & Official Photo",
          },
          {
            time: "",
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

      /* HUC BALANCE */

      {
        time: "14:15 – 15:45",
        duration: "90 min",
        title: "HUC Balance and Reflections",
        type: "session",
        location: "Council Room · School of Engineering",

        subActivities: [
          {
            time: "",
            title: "HUC Annual Report Presentation - HUC Secretariat.",
          },
          {
            time: "",
            title: "Seed Fund Project Presentations & VRI Reflections",
          },
          {
            time: "",
            title: "Social Ideas Challenge Reflections",
          },
          {
            time: "",
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

      /* WORKSHOP */

      {
        time: "16:00 – 17:45",
        duration: "105 min",
        title: "Workshop: Fostering Collaborative Initiatives",
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

        /*
        Cuando te pasen los enlaces, descomenta y reemplaza:

        links: [
          {
            label: "Research Working Group · Zoom",
            href: "PEGAR_LINK_ZOOM_RESEARCH"
          },
          {
            label: "Academics Working Group · Zoom",
            href: "PEGAR_LINK_ZOOM_ACADEMICS"
          },
          {
            label: "View Session Guidelines",
            href: "PEGAR_LINK_DOCUMENTO_DINAMICA"
          }
        ],
        */
      },

      {
        time: "17:45 – 18:00",
        duration: "15 min",
        title: "Coffee Break & Walk to Dinner Venue",
        type: "break",
      },

      {
        time: "18:00 – 20:00",
        duration: "120 min",
        title: "Welcome Reception",
        type: "social",
        location: "ML Building · Rooftop",

        detailGroups: [

        ],
        subActivities: [
          {
            time: "",
            title: "HUC at a glance by the President. Mag. Julián Rodríguez — Universidad Austral ",
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

      /* SHAPING 2027 */

      {
        time: "09:00 – 11:00",
        duration: "120 min",
        title: "Workshop: Shaping the 2027 Efforts",
        type: "workshop",
        location: "Council Room · School of Architecture & Design",

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
                text: "Define milestones towards 2027.",
              },
            ],
          },
          {
            title: "Participation",
            items: [
              {
                text: "Hybrid participation available.",
              },
            ],
          },
        ],

        /*
        links: [
          {
            label: "Join via Zoom",
            href: "PEGAR_LINK_ZOOM"
          },
          {
            label: "View Session Guidelines",
            href: "PEGAR_LINK_DOCUMENTO"
          }
        ],
        */
      },

      {
        time: "11:00 – 11:15",
        duration: "15 min",
        title: "Coffee Break",
        type: "break",
      },

      /* ACADEMIC DIALOGUE */

      {
        time: "11:15 – 12:45",
        duration: "90 min",
        title: "Academic Dialogue",
        type: "session",
        location: "Council Room · School of Architecture & Design",

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
                  "Horacio Payá — Director, Master's in Environmental Policy, Law and Management, Universidad Austral (TBD)",
              },
              
            ],
          },

          {
            title: "Participation",
            items: [
              {
                text: "Hybrid session available for remote participants. Join the session here: Zoom Link.",
                href: "https://uniandes-edu-co.zoom.us/j/89624317003",
              },
            ],
          },
        ],

        /*
        links: [
          {
            label: "Join via Zoom",
            href: "PEGAR_LINK_ZOOM"
          }
        ],
        */
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
        title: "Campus Tour: Uniandes’ Lighthouses",
        type: "social",
        location: "Universidad de los Andes",
      },

      {
        time: "16:00 – 17:00",
        duration: "60 min",
        title: "Closing Session",
        type: "session",
        location: "Japan Center · UME Auditorium",

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
        location: "Japan Center · UME Auditorium",  
        type: "social",
      },
    ],
  },
];

function App() {
  const [selectedDay, setSelectedDay] = useState("day1");

  const [expandedSession, setExpandedSession] = useState<
    string | null
  >(null);

  const day = days.find((item) => item.id === selectedDay)!;

  const toggleSession = (id: string) => {
    setExpandedSession((current) =>
      current === id ? null : id
    );
  };

  const hasExpandableContent = (session: Session) =>
    Boolean(
      session.subActivities?.length ||
        session.detailGroups?.length ||
        session.links?.length
    );

  return (
    <div className="site">
      {/* HEADER */}

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

      {/* HERO */}

      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="eyebrow">
            BOGOTÁ · COLOMBIA
          </span>

          <h1>
            HUC General
            <br />
            Assembly <span>2026</span>
          </h1>

          <p>
            Connecting universities across the Americas to
            strengthen collaboration, research, education and
            collective impact.
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
        {/* GENERAL ASSEMBLY */}

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
              Presidents and university delegations from
              across the Americas come together at
              Universidad de los Andes for three days of
              dialogue, collaboration and strategic
              planning.
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

        {/* PROGRAM */}

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

            {/* DAY TABS */}

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

            {/* DAY HEADER */}

            <div className="day-header">
              <p>{day.date}</p>
              <h3>{day.title}</h3>
            </div>

            {/* TIMELINE */}

            <div className="timeline">
              {day.sessions.map(
                (session, index) => {
                  const sessionId = `${day.id}-${index}`;

                  const expanded =
                    expandedSession === sessionId;

                  const expandable =
                    hasExpandableContent(session);

                  return (
                    <article
                      className={`session-card ${
                        session.type ?? "session"
                      }`}
                      key={sessionId}
                    >
                      <div className="session-time">
                        <strong>
                          {session.time}
                        </strong>

                        {session.duration && (
                          <span>
                            {session.duration}
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
                                "break" && "BREAK"}

                              {session.type ===
                                "meal" && "MEAL"}

                              {session.type ===
                                "social" && "SOCIAL"}

                              {session.type ===
                                "workshop" &&
                                "WORKSHOP"}

                              {(!session.type ||
                                session.type ===
                                  "session") &&
                                "SESSION"}
                            </span>

                            <h4>
                              {session.title}
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

                        {/* LOCATION */}

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
                              ⌖ {session.location}
                            </a>
                          ) : (
                            <p className="location">
                              ⌖ {session.location}
                            </p>
                          ))}

                        {/* DESCRIPTION */}

                        {session.description && (
                          <p className="description">
                            {session.description}
                          </p>
                        )}

                        {/* EXPANDED INFO */}

                        {expandable && (
                          <div
                            className={`details-wrapper ${
                              expanded
                                ? "open"
                                : ""
                            }`}
                          >
                            <div className="details-inner">
                              {/* SUB ACTIVITIES */}

                              {session.subActivities &&
                                session
                                  .subActivities
                                  .length > 0 && (
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

                                          <div>
                                            <strong>
                                              {
                                                activity.title
                                              }
                                            </strong>

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

                              {/* DETAIL GROUPS */}

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
                                      {group.title}
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

                              {/* ACTION BUTTONS */}

                              {session.links &&
                                session.links.length >
                                  0 && (
                                  <div className="session-links">
                                    {session.links.map(
                                      (link) => (
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

        {/* RECOMMENDATIONS */}

        <section className="information-section recommendations-section">
          <div className="container">
            <p className="section-kicker">
              03 · RECOMMENDATIONS
            </p>

            <h2>Useful information for your stay</h2>

            <p className="section-placeholder">
              Practical recommendations for delegates
              will be available here soon.
            </p>
          </div>
        </section>

        {/* ATTENDEES */}

        <section className="information-section attendees-section">
          <div className="container">
            <p className="section-kicker">
              04 · ATTENDEES
            </p>

            <h2>HUC General Assembly attendees</h2>

            <p className="section-placeholder">
              The complete list of participants is
              currently being finalized and will be
              published here soon.
            </p>
          </div>
        </section>

        {/* HUC NETWORK */}

        </main>

      {/* FOOTER */}

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
    </div>
  );
}

export default App;