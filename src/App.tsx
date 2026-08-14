import { useState } from "react";
import "./App.css";

type Session = {
  time: string;
  duration?: string;
  title: string;
  description?: string;
  location?: string;
  type?:
    | "session"
    | "transport"
    | "break"
    | "meal"
    | "social"
    | "workshop";
  details?: string[];
};

type Day = {
  id: string;
  short: string;
  date: string;
  title: string;
  sessions: Session[];
};

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
          "Members of the Universidad de los Andes team will accompany delegates and provide on-site assistance.",
        details: [
          "Hotel BH La Quinta — Cra. 5 #74-52",
          "Hotel JW Marriott — Cl. 73 #8-60",
          "Hotel Mercure BH El Retiro — Av. Cl. 80 #10-10",
        ],
      },
      {
        time: "18:00 – 20:00",
        duration: "120 min",
        title: "Welcome Dinner",
        type: "social",
        location: "La Central Cevichería · Kr 13 #85-14, Bogotá",
        details: ["Dress code: Business formal"],
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
        details: [
          "Hotel BH La Quinta — Cra. 5 #74-52",
          "Hotel JW Marriott — Cl. 73 #8-60",
          "Hotel Mercure BH El Retiro — Av. Cl. 80 #10-10",
        ],
      },

      {
        time: "08:30 – 09:00",
        duration: "30 min",
        title: "Registration & Welcome Coffee",
        type: "break",
        location: "Council Room · Rectors’ Building",
      },

      {
        time: "09:00 – 09:15",
        duration: "15 min",
        title: "Official Opening",
        type: "session",
        location: "Council Room · Rectors’ Building",
        description:
          "Opening by the Presidents of Universidad de los Andes and HUC.",
      },

      {
        time: "09:15 – 09:30",
        duration: "15 min",
        title: "HUC Universities' Short Presentation",
        type: "session",
        location: "Council Room · Rectors’ Building",
      },

      {
        time: "09:30 – 10:15",
        duration: "45 min",
        title: "Introduction of New HUC Members & MOU Signing Ceremony",
        type: "session",
        location: "Council Room · Rectors’ Building",
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
        details: [
          "Moderator: Prof. Catalina González Arango — Universidad de los Andes",
          "Raquel Bernal Salazar — President, Universidad de los Andes",
          "Julián Rodríguez Priore — President, Universidad Austral",
          "Juan Carlos de la Llera — President, Pontificia Universidad Católica de Chile (TBD)",
          "Lisa Philipps — Interim President, York University (TBD)",
          "Hybrid session available for remote participants",
        ],
      },

      {
        time: "12:00 – 12:15",
        duration: "15 min",
        title: "Walk to Lunch Venue & Official Photo",
        type: "session",
        location: "Villa Paulina",
      },

      {
        time: "12:15 – 12:45",
        duration: "30 min",
        title: "Cultural Performance",
        type: "social",
        location: "Villa Paulina",
      },

      {
        time: "12:45 – 14:00",
        duration: "75 min",
        title: "Networking Lunch",
        type: "meal",
        location: "Villa Paulina",
      },

      {
        time: "14:15 – 14:45",
        duration: "30 min",
        title: "HUC Annual Report Presentation",
        type: "session",
        location: "Council Room · School of Engineering",
        description: "HUC Secretariat.",
      },

      {
        time: "14:45 – 15:15",
        duration: "30 min",
        title: "Seed Fund Project Presentations & VRI Reflections",
        type: "session",
        location: "Council Room · School of Engineering",
      },

      {
        time: "15:15 – 15:30",
        duration: "15 min",
        title: "Social Ideas Challenge Reflections",
        type: "session",
        location: "Council Room · School of Engineering",
      },

      {
        time: "15:30 – 15:45",
        duration: "15 min",
        title: "Testimonial Videos",
        type: "session",
        location: "Council Room · School of Engineering",
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
        title: "Workshop: Fostering Collaborative Initiatives",
        type: "workshop",
        location: "Universidad de los Andes",
        description:
          "Parallel collaborative sessions focused on the HUC pillars of Research and Education.",
        details: [
          "Research Working Group",
          "Academics Working Group",
          "Hybrid participation available",
          "Review ongoing initiatives",
          "Explore continuity and enhancement opportunities",
          "Identify potential new collaborative initiatives",
        ],
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
        details: [
          "HUC at a glance by the President",
          "Mag. Julián Rodríguez — Universidad Austral",
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
        details: [
          "Hotel BH La Quinta — Cra. 5 #74-52",
          "Hotel JW Marriott — Cl. 73 #8-60",
          "Hotel Mercure BH El Retiro — Av. Cl. 80 #10-10",
        ],
      },

      {
        time: "09:00 – 11:00",
        duration: "120 min",
        title: "Workshop: Shaping the 2027 Efforts",
        type: "workshop",
        location: "Council Room · School of Architecture & Design",
        description:
          "Strategic alignment session on the HUC pillars of Research and Education.",
        details: [
          "Consolidate insights from the previous workshop",
          "Reach consensus on consortium priorities",
          "Define milestones towards 2027",
          "Hybrid participation available",
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
        location: "Council Room · School of Architecture & Design",
        description:
          "Leadership with Global Conscience: Shaping Tomorrow’s Leaders.",
        details: [
          "Moderator: Carlos Guarnizo — Universidad de los Andes",
          "Angelika Rettberg — Dean of Social Sciences, Universidad de los Andes",
          "Daniel Cadena — Dean of Sciences, Universidad de los Andes",
          "Juan Camilo Cárdenas — Director of the SDGs Center, Universidad de los Andes",
          "Horacio Payá — Universidad Austral (TBD)",
          "Sonia Regina de Cal Seixas — UNICAMP (TBD)",
          "Hybrid participation available",
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
          "Time to pause and check emails. Optional stretching session.",
      },

      {
        time: "18:00 – 20:00",
        duration: "120 min",
        title: "Closing Dinner",
        type: "social",
      },
    ],
  },
];

function App() {
  const [selectedDay, setSelectedDay] = useState("day1");
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const day = days.find((d) => d.id === selectedDay)!;

  const toggleSession = (id: string) => {
    setExpandedSession((current) => (current === id ? null : id));
  };

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
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="eyebrow">BOGOTÁ · COLOMBIA</span>

          <h1>
            HUC General
            <br />
            Assembly <span>2026</span>
          </h1>

          <p>
            Connecting universities across the Americas to strengthen
            collaboration, research, education and collective impact.
          </p>

          <div className="hero-meta">
            <div>
              <small>DATES</small>
              <strong>August 30 — September 1</strong>
            </div>

            <div>
              <small>HOST</small>
              <strong>Universidad de los Andes</strong>
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
          <span className="section-number">01</span>

          <div>
            <p className="section-kicker">GENERAL ASSEMBLY</p>

            <h2>A hemispheric meeting in Bogotá</h2>

            <p className="intro-copy">
              Presidents and university delegations from across the Americas
              come together at Universidad de los Andes for three days of
              dialogue, collaboration and strategic planning.
            </p>

            <div className="stats">
              <div>
                <strong>13</strong>
                <span>Member universities</span>
              </div>

              <div>
                <strong>9</strong>
                <span>University presidents attending</span>
              </div>

              <div>
                <strong>12</strong>
                <span>Institutions represented</span>
              </div>
            </div>
          </div>
        </section>

        <section className="program-section">
          <div className="container">
            <div className="program-heading">
              <div>
                <p className="section-kicker">PROGRAM</p>
                <h2>Explore the agenda</h2>
              </div>

              <p>
                Select a day to explore sessions, workshops, transportation
                and social activities.
              </p>
            </div>

            <div className="day-tabs">
              {days.map((item) => (
                <button
                  key={item.id}
                  className={selectedDay === item.id ? "active" : ""}
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
              {day.sessions.map((session, index) => {
                const sessionId = `${day.id}-${index}`;
                const expanded = expandedSession === sessionId;

                return (
                  <article
                    className={`session-card ${session.type ?? "session"}`}
                    key={sessionId}
                  >
                    <div className="session-time">
                      <strong>{session.time}</strong>
                      {session.duration && <span>{session.duration}</span>}
                    </div>

                    <div className="session-body">
                      <div className="session-top">
                        <div>
                          <span className="session-type">
                            {session.type === "transport" && "TRANSPORT"}
                            {session.type === "break" && "BREAK"}
                            {session.type === "meal" && "MEAL"}
                            {session.type === "social" && "SOCIAL"}
                            {session.type === "workshop" && "WORKSHOP"}
                            {(!session.type ||
                              session.type === "session") &&
                              "SESSION"}
                          </span>

                          <h4>{session.title}</h4>
                        </div>

                        {session.details && (
                          <button
                            className={`expand-button ${
                              expanded ? "expanded" : ""
                            }`}
                            onClick={() => toggleSession(sessionId)}
                            aria-label="Toggle details"
                          >
                            <span />
                            <span />
                          </button>
                        )}
                      </div>

                      {session.location && (
                        <p className="location">⌖ {session.location}</p>
                      )}

                      {session.description && (
                        <p className="description">{session.description}</p>
                      )}

                      {session.details && (
                        <div
                          className={`details-wrapper ${
                            expanded ? "open" : ""
                          }`}
                        >
                          <div className="details-inner">
                            {session.details.map((detail) => (
                              <div className="detail-row" key={detail}>
                                <span>→</span>
                                <p>{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="universities">
          <div className="container">
            <p className="section-kicker">HUC NETWORK</p>
            <h2>Universities across the Americas</h2>

            <div className="university-grid">
              {[
                "Universidad de los Andes",
                "Universidad Austral",
                "Universidad San Francisco de Quito",
                "York University",
                "Pontificia Universidad Católica de Chile",
                "UNICAMP",
                "UCLA",
                "Université de Montréal",
                "PUCMM",
                "Universidad de Costa Rica",
                "Universidad Peruana Cayetano Heredia",
                "Universidad Andrés Bello",
              ].map((university) => (
                <div key={university}>{university}</div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>HUC General Assembly 2026</strong>
            <span>Universidad de los Andes · Bogotá, Colombia</span>
          </div>

          <span>August 30 — September 1, 2026</span>
        </div>
      </footer>
    </div>
  );
}

export default App;