import { useEffect, useMemo, useState } from "react";
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

type ModalType =
  | "recommendations"
  | "attendees"
  | "universities"
  | null;

type ParticipantCategory =
  | "presidents"
  | "delegations"
  | "academic-advisor"
  | "keynote-speakers";

type Participant = {
  name: string;
  role: string;
  institution: string;
  country?: string;
  bio: string;
  image: string;
  virtual?: boolean;
};

type UniversityProfile = {
  name: string;
  country: string;
  founded: string;
  summary: string;
  highlight: string;
  ranking: string;
  students: string;
  academicOffer: string;
  note?: string;
};

type RecommendationSection = {
  title: string;
  intro?: string;
  items?: string[];
  links?: ActionLink[];
};

const googleMapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;

const welcomePageESUrl =
  "https://www.uniandes.edu.co/internacionalizacion/en/node/114926";

const welcomePageENUrl =
  "https://www.uniandes.edu.co/internacionalizacion/en/welcome-page/";

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
            title: "HUC Universities' Short Presentation",
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
        title: "Official Photo & Cultural Performance",
        type: "social",
        location: "Villa Paulina",

        subActivities: [
          {
            title: "Walk to Lunch Venue & Official Photo",
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
        location: "Council Room · School of Engineering",

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
            title: "Social Ideas Challenge Reflections",
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
          "Collaborative working tables on the HUC pillars, including Research, Education, and other priority areas, to review and align ongoing initiatives, explore opportunities for continuity and enhancement, and identify potential new initiatives.",
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
        title: "Workshop: Shaping the 2027 Efforts",
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
                text: "Define milestones towards 2027.",
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

const recommendationSections: RecommendationSection[] = [
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
      "Recommended hotels are located in the Chapinero area, near the university and close to restaurants, pharmacies and supermarkets.",
    links: [
      {
        label: "Mercure BH El Retiro · Av. Cl. 80 #10-11",
        href: googleMapsUrl("Mercure BH El Retiro Bogotá"),
      },
      {
        label: "JW Marriott Hotel Bogotá · Cl. 73 #8-60",
        href: googleMapsUrl("JW Marriott Hotel Bogotá"),
      },
      {
        label: "BH La Quinta · Cra. 5 #74-52",
        href: googleMapsUrl("Hotel BH La Quinta Bogotá"),
      },
      {
        label: "Estelar Parque de la 93 Hotel · Cl. 93 #11-19",
        href: googleMapsUrl("Estelar Parque de la 93 Hotel Bogotá"),
      },
    ],
  },
  {
    title: "Attendees",
    items: [
      "Each institution is asked to register all its attendees through the designated form to confirm the number of participants and identify any dietary restrictions.",
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
      "For airport transfers, Uniandes recommends contacting Andrés Ruíz, a trusted transportation provider, at +57 315 554 9113.",
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
    title: "Health & Altitude",
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
      "We recommend having medical insurance that covers any contingencies during your stay in Colombia.",
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

const participantTabs: {
  id: ParticipantCategory;
  label: string;
  shortLabel: string;
}[] = [
  { id: "presidents", label: "Presidents", shortLabel: "Presidents" },
  { id: "delegations", label: "Delegations", shortLabel: "Delegations" },
  {
    id: "academic-advisor",
    label: "Academic Advisor",
    shortLabel: "Advisor",
  },
  {
    id: "keynote-speakers",
    label: "Keynote Speakers",
    shortLabel: "Keynotes",
  },
];

const participants: Record<ParticipantCategory, Participant[]> = {
  presidents: [
    {
      name: "Raquel Bernal",
      role: "Rector",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/raquel-bernal.jpg",
      bio: "Raquel Bernal has served as Rector of Universidad de los Andes since 2022 and is a Full Professor in the School of Economics. She previously served as Vice President for Academic Affairs and as a member of the University’s Superior Council. She holds a degree in Economics from Universidad de los Andes and a master’s degree and PhD in Economics from New York University. Her research focuses on social economics, education, early childhood, human capital, household economics and labor economics.",
    },
    {
      name: "Julián Esteban Rodríguez",
      role: "Rector · HUC President",
      institution: "Universidad Austral",
      country: "Argentina",
      image: "/images/participants/julian-rodriguez.jpg",
      bio: "Julián Rodríguez has served as Rector of Universidad Austral since 2018 and is President of the Hemispheric University Consortium. He holds a degree in Physics from Universidad de Buenos Aires and an Executive MBA from IAE Business School. His experience includes university management, teaching, fundraising, institutional communications, staff training and nonprofit project leadership.",
    },
    {
      name: "Carlos Araya Leandro",
      role: "Rector",
      institution: "Universidad de Costa Rica",
      country: "Costa Rica",
      image: "/images/participants/carlos-araya.jpg",
      bio: "Carlos Araya Leandro has served as Rector of Universidad de Costa Rica since May 2020. He holds a PhD in Economics, Management and Control of Public Entities and Policies from the University of Granada, as well as bachelor’s and master’s degrees in Business Administration from UCR. A faculty member since 1996, he has held several academic and administrative leadership positions within the university.",
    },
    {
      name: "Diego Quiroga Ferri",
      role: "Rector",
      institution: "Universidad San Francisco de Quito",
      country: "Ecuador",
      image: "/images/participants/diego-quiroga.jpg",
      bio: "Diego Quiroga Ferri is Rector of Universidad San Francisco de Quito and holds a PhD in Anthropology from the University of Illinois Urbana-Champaign. He led USFQ’s Research and International Programs for more than a decade and previously co-directed the Galápagos Institute for the Arts and Sciences. His research spans urban ecology, political ecology and medical anthropology.",
    },
    {
      name: "Lisa Colleen Philipps",
      role: "Interim President and Vice-Chancellor",
      institution: "York University",
      country: "Canada",
      image: "/images/participants/lisa-philipps3.jpeg",
      bio: "Lisa Philipps is Interim President and Vice-Chancellor of York University, where she has spent nearly three decades, including seven years as Provost and Vice-President Academic. Her leadership focuses on academic quality, research and innovation, and community engagement. An expert in taxation law and fiscal policy, she has advised bodies including Ontario's Ministry of Finance and the National Association of Women and the Law. "
    },
    {
      name: "Juan Carlos de la Llera Martin",
      role: "Rector",
      institution: "Pontificia Universidad Católica de Chile",
      country: "Chile",
      image: "/images/participants/juan-carlos-de-la-llera.jpg",
      bio: "Juan Carlos de la Llera became Rector of Pontificia Universidad Católica de Chile in March 2025 and is a Full Professor in the School of Engineering. He holds Civil Engineering, MSc and PhD degrees, with graduate studies at the University of California, Berkeley. A former three-term Dean of Engineering, his research focuses on structural dynamics, seismic control and technologies that mitigate earthquake impacts on critical infrastructure.",
    },
    {
      name: "Julio Castro Sepúlveda",
      role: "Rector",
      institution: "Universidad Andrés Bello",
      country: "Chile",
      image: "/images/participants/julio-castro.jpg",
      bio: "Julio Castro Sepúlveda has served as Rector of Universidad Andrés Bello since 2019. He holds a degree in Philosophy and a master’s degree in Management and Public Policy from Universidad de Chile. His career has been closely linked to higher education and public policy, including senior university roles and leadership in Chile’s Ministry of Education.",
    },
    {
      name: "Secilio Espinal Espinal",
      role: "Rector",
      institution: "Pontificia Universidad Católica Madre y Maestra",
      country: "Dominican Republic",
      image: "/images/participants/secilio-espinal1.jpg",
      bio: "Secilio Espinal Espinal has served as Rector of Pontificia Universidad Católica Madre y Maestra since November 2021. He is a Dominican priest, academic and university leader with a PhD in Education focused on Higher Education Leadership, along with graduate studies in university management and theology. He previously served as Rector of UCATEBA and has held leadership roles in academic and community organizations.",
    },
    {
      name: "Wilfredo Gonzales Lozada",
      role: "Rector",
      institution: "Universidad Peruana Cayetano Heredia",
      country: "Peru",
      image: "/images/participants/wilfredo-gonzales.jpg",
      bio: "Wilfredo Gonzáles has served as Rector of Universidad Peruana Cayetano Heredia since May 2026. He is a professor, researcher and academic leader with more than 15 years of experience in ecology and biodiversity. He holds a PhD in Sciences focused on Ecology and Evolutionary Biology and previously served as Dean of the Faculty of Sciences and Engineering at UPCH.",
    },
  ],
  delegations: [
    {
      name: "María Montt",
      role: "Vice President for International Affairs",
      institution: "Pontificia Universidad Católica de Chile",
      country: "Chile",
      image: "/images/participants/maria-montt.jpg",
      bio: "María Montt Strabucchi has served as Vice President for International Affairs at PUC Chile since 2025. She holds a BA in History, an MA in Chinese Studies from SOAS University of London and a PhD in Latin American Cultural Studies from the University of Manchester. Her research examines cultural and diplomatic relations between China, Asia and Latin America.",
    },
    {
      name: "Rafael Dias",
      role: "Executive Director for International Relations",
      institution: "Universidade Estadual de Campinas",
      country: "Brazil",
      image: "/images/participants/Rafel_Díaz.jpeg",
      bio: "Rafael Dias is a Full Professor at the University of Campinas (Unicamp) and currently serves as Executive Director for International Relations. His research focuses on science, technology and innovation policy, social innovation, and science diplomacy. He holds a PhD in Science and Technology Policy from Unicamp and conducted postdoctoral research at the University of Sussex, UK.",
    },
    {
      name: "Evelissy Rodríguez",
      role: "Vice President for Administration and Finance",
      institution: "Pontificia Universidad Católica Madre y Maestra",
      country: "Dominican Republic",
      image: "/images/participants/evelissy-rodriguez.jpg",
      bio: "Evelissy Rodríguez Taveras is Vice President for Administration and Finance at PUCMM. She holds bachelor’s degrees in Accounting and Business Administration, a master’s degree in Financial Management and is completing doctoral studies in Business Administration. She has also taught at PUCMM since 2006 and has led institutional administrative-management processes.",
    },
    {
      name: "Jonathan Palatz",
      role: "Director of International Relations and Strategic Partnerships",
      institution: "Pontificia Universidad Católica Madre y Maestra",
      country: "Dominican Republic",
      image: "/images/participants/jonathan-palatz.jpg",
      bio: "Jonathan Palatz Cedeño is Director of International Relations and Strategic Partnerships at PUCMM. He holds a PhD and MA in Latin American Studies from Universidad Andina Simón Bolívar and a BA in International Studies. He is also a professor and previously worked with UNICEF, UNHCR and the Dominican Republic’s National Institute of Migration.",
    },
    {
      name: "Jovana Batarce",
      role: "Director of Global Affairs",
      institution: "Universidad Andrés Bello",
      country: "Chile",
      image: "/images/participants/jovana-batarce.jpg",
      bio: "Jovana Batarce is Director of Global Affairs at Universidad Andrés Bello, where she leads strategic international engagement and collaboration across academia, research, innovation and external relations. She holds a master’s degree in International Strategy and Trade Policy and a degree in Social Communication and Journalism, with more than 12 years of experience in higher education internationalization.",
    },
    {
      name: "Fabiola Novoa",
      role: "General Director of International Relations",
      institution: "Universidad Andrés Bello",
      country: "Chile",
      image: "/images/participants/fabiola-novoa.jpg",
      bio: "Fabiola Novoa is General Director of International Relations at Universidad Andrés Bello, where she leads the university’s internationalization strategy, global partnerships and engagement initiatives. She holds a degree in Psychology and has specialized in higher education internationalization, curriculum development, educational projects and people management.",
    },
    {
      name: "Ana Eugenia Galiano",
      role: "Vice-Rector for Outreach",
      institution: "Universidad Austral",
      country: "Argentina",
      image: "/images/participants/ana-eugenia-galiano.jpg",
      bio: "Ana Galiano is Vice Rector of Universidad Austral and holds a bachelor’s degree in Business Sciences from the same institution. Before becoming Vice Rector, she served as Dean of the School of Business Sciences at the Rosario campus and held management positions at Austral University Hospital. Her work focuses on higher education management, sustainable leadership and business education.",
    },
    {
      name: "María Gabriela Espeche",
      role: "Director of International Relations",
      institution: "Universidad Austral",
      country: "Argentina",
      image: "/images/participants/maria-gabriela-espeche1.jpg",
      bio: "María Gabriela Espeche Gil directs international relations at Universidad Austral, overseeing international partnerships and mobility programs. She studied at the University of Buenos Aires and has specialized training in international education and intercultural competence. Her work focuses on strategic partnerships, international opportunities and intercultural learning.",
    },
    {
      name: "Nazareth López Gabeiras",
      role: "Institutional Reputation and University Rankings Lead",
      institution: "Universidad Austral · HUC Secretariat",
      country: "Argentina",
      image: "/images/participants/nazareth-lopez.jpg",
      bio: "Nazareth López Gabeiras leads Institutional Reputation and University Rankings at Universidad Austral and serves as Project Manager of the HUC Secretariat. Her background spans institutional and advertising communication, teaching, internationalization, professional development and strategic communications, with a focus on reputation, rankings and international collaboration.",
    },
    {
      name: "Luis Adrián Mora",
      role: "Director, Office of International Affairs and External Cooperation",
      institution: "Universidad de Costa Rica",
      country: "Costa Rica",
      image: "/images/participants/luis-adrian-mora.jpg",
      bio: "Luis Adrián Mora Ramírez directs the Office of International Affairs and External Cooperation at Universidad de Costa Rica. He holds a PhD in Political Philosophy, an MBA and graduate studies in Philosophy from French institutions. He is also a Full Professor and has held academic and research positions in Costa Rica and Europe.",
    },
    {
      name: "Cristina Guerra Giraldez",
      role: "Full Professor · Responsible for Institutional Networking",
      institution: "Universidad Peruana Cayetano Heredia",
      country: "Peru",
      image: "/images/participants/cristina-guerra.jpg",
      bio: "Cristina Guerra Giráldez is a Full Professor at UPCH’s Faculty of Science and Engineering and is responsible for institutional networking. She trained in Biology and Biochemistry at UPCH, earned a PhD in Molecular Biology from Heidelberg University and completed postdoctoral work in the United Kingdom. She previously served as Director of Internationalization at UPCH.",
    },
    {
      name: "Alexandra Velasco Hornby",
      role: "Vice President of Commercial and Development",
      institution: "Universidad San Francisco de Quito",
      country: "Ecuador",
      image: "/images/participants/alexandra-velasco.jpg",
      bio: "Alexandra Velasco is Vice President of Commercial and Development at USFQ. She holds a doctorate in Education focused on Organizational Leadership and an MBA in Sustainability and Innovation. She founded GAIAS Europa and has led sustainability and innovation initiatives that strengthened USFQ’s international and institutional development.",
    },
    {
      name: "Estefania Aspiazu",
      role: "Communication and Event Coordinator",
      institution: "Universidad San Francisco de Quito",
      country: "Ecuador",
      image: "/images/participants/estefania-aspiazu.jpg",
      bio: "Estefania Aspiazu works at Universidad San Francisco de Quito on digital strategy, communications and institutional engagement. She holds a master’s degree in Digital Marketing and E-Commerce and has specialized in digital analytics, online communications and customer relationship management. Her work centers on data-driven communication and audience engagement.",
    },
    {
      name: "Daniel Cantinelli Sevillano",
      role: "Advisor for International Relations",
      institution: "Universidade Estadual de Campinas",
      country: "Brazil",
      image: "/images/participants/daniel-cantinelli.jpg",
      bio: "Daniel Cantinelli Sevillano is Advisor for International Relations at UNICAMP and has worked in the university’s International Relations Office since 2010. He holds graduate degrees in Social History from the University of São Paulo and degrees in International Relations and History. His work combines international cooperation, institutional relations and academic partnerships.",
    },
    {
      name: "Valérie Amiraux",
      role: "Vice-Rector, Global Engagement and First Peoples",
      institution: "Université de Montréal",
      country: "Canada",
      image: "/images/participants/valerie-amiraux.jpg",
      bio: "Valérie Amiraux is Vice-Rector for Global Engagement and First Peoples at Université de Montréal and a Professor of Sociology. She holds a PhD from Sciences Po Paris and previously served in senior faculty international-partnership roles. Her research focuses on religious pluralism, citizenship, migration and the relationship between religious minorities and secular states.",
    },
    {
      name: "Virginie Allard-Cameus",
      role: "Executive Director, UdeM International",
      institution: "Université de Montréal",
      country: "Canada",
      image: "/images/participants/virginie-allard-cameus.jpg",
      bio: "Virginie Allard-Caméus is Executive Director of UdeM International at Université de Montréal. She holds a BBA in International Management from HEC Montréal and a master’s degree in Management from ENAP. With more than 25 years at UdeM, she now leads the integration of internationalization teams and facilitates global projects across the institution.",
    },
    {
      name: "Cindy Fan",
      role: "Vice Provost for International Studies and Global Engagement",
      institution: "University of California, Los Angeles",
      country: "United States",
      image: "/images/participants/cindy-fan.jpg",
      bio: "Cindy Fan is Vice Provost for International Studies and Global Engagement at UCLA and Professor of Geography. She holds degrees from the University of Hong Kong, the Chinese University of Hong Kong and The Ohio State University. As UCLA’s senior international officer, she provides strategic leadership for global partnerships, international agreements, education and research.",
    },
    {
      name: "Kathryn Paul",
      role: "Assistant Vice Provost and Director for International Collaborations",
      institution: "University of California, Los Angeles",
      country: "United States",
      image: "/images/participants/kathryn-paul1.jpg",
      bio: "Kathryn Paul is Assistant Vice Provost and Director for International Collaborations at UCLA. She helps implement international agreements and works across academic, legal and administrative units to develop global partnerships. She brings more than 20 years of grant and project-management experience at UCLA.",
    },
    {
      name: "Helen Chua Balderama",
      role: "Director of Global Engagement and Partnerships",
      institution: "York University",
      country: "Canada",
      image: "/images/participants/helen-chua-balderama.jpg",
      bio: "Helen Chua Balderama directs Global Engagement and Partnerships at York University and has more than 20 years of experience in international education cooperation, policy development and partnership management. Her work advances York’s global strategy, mobility opportunities and collaboration with institutions, governments and international organizations.",
    },
    {
      name: "Jimena Hurtado",
      role: "Vice President for Research and Creation",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/jimena-hurtado.jpg",
      bio: "Jimena Hurtado Prieto is Vice President for Research and Creation at Universidad de los Andes and a Professor in the School of Economics. She holds graduate degrees in economics and economic epistemology from institutions in Colombia and France. Her research interests include the history of economic thought, economic methodology, ethics and inequality.",
    },
    {
      name: "Silvia Caro Spinel",
      role: "Academic Vice President",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/silvia-caro1.jpg",
      bio: "Silvia Caro Spinel is Academic Vice President at Universidad de los Andes and a Full Professor in Civil and Environmental Engineering. She previously served as Associate Dean for Academic Affairs in Engineering and led initiatives in teaching, curriculum reform, academic-quality automation, online education and internationalization. Her research focuses on transportation infrastructure and pavement engineering.",
    },
    {
      name: "Harold Castro",
      role: "Vice President for Digital Transformation",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/harold-castro.jpg",
      bio: "Harold Castro is Vice President for Digital Transformation at Universidad de los Andes. He is a Systems and Computing Engineer with a PhD in Computer Science from Grenoble Institute of Technology. His career includes academic leadership, high-performance computing, communications infrastructure, cybersecurity and research networking across Latin America.",
    },
    {
      name: "Mauricio Olivera",
      role: "Vice President for Administration and Finance",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/mauricio-olivera.jpg",
      bio: "Mauricio Olivera is Vice President for Administration and Finance at Universidad de los Andes. An economist with graduate studies in the United States, his career spans academic research, public policy and executive leadership. He has held senior roles in government, social protection, consulting and higher education, with a focus on economic policy and institutional management.",
    },
    {
      name: "Alejandro Noguera",
      role: "General Secretary",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/alejandro-noguera.jpeg",
      bio: "Alejandro Noguera Cepeda is the General Secretary at Universidad de los Andes. He holds a law degree from Pontificia Universidad Javeriana, a specialization in Educational Institutions Management from Universidad de los Andes, and a Master of Laws from Fordham University School of Law in the United States. He has held leadership positions in education, including Rector of Gimnasio Campestre and Vice President for Transformation at CESA. His experience includes educational leadership, institutional transformation, accreditation, and international education."
    },
    {
      name: "Johanna Mick Clausen",
      role: "Director of Internationalization",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/johanna-mick-clausen1.jpg",
      bio: "Johanna Mick Clausen is Director of Internationalization at Universidad de los Andes. She holds degrees in Economics and Philosophy from Uniandes and graduate degrees in philosophy and social thought from the University of Chicago. Her work centers on ethics, political theory, economic thought, liberal education and the internationalization of higher education.",
    },
    {
      name: "Paola Vargas",
      role: "Head of Science Diplomacy",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/paola-vargas.jpg",
      bio: "Paola Vargas is Head of Science Diplomacy at Universidad de los Andes and trained in Mechanical and Biomedical Engineering. She previously led initiatives in technology transfer, innovation and research co-development. In her current role, she strengthens international scientific cooperation, global research networks and doctoral education.",
    },
    {
      name: "Juan David Martinez",
      role: "Head of Academic Cooperation",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/juan-david-martinez1.jpg",
      bio: "Juan David Martínez is Head of Academic Cooperation at Universidad de los Andes, where he develops institutional partnerships with universities, research centers and diplomatic missions. He holds a master’s degree in International Relations and has experience in higher education management, international cooperation and Colombia’s diplomatic service.",
    },
    {
      name: "Yadira Mogollón",
      role: "Head of Mobility",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/yadira-mogollon.jpg",
      bio: "Yadira Mogollón Acevedo is Head of Mobility at Universidad de los Andes and has more than two decades of experience in higher education internationalization. She has led mobility programs, exchange policies and international student services, with a focus on global learning opportunities and intercultural engagement.",
    },
    {
      name: "Andrés Mantilla Orozco",
      role: "Science Diplomacy Officer",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/andres-mantilla-orozco.jpg",
      bio: "Andrés Mantilla is a Science Diplomacy Officer at Universidad de los Andes, where he develops international partnerships that support research, innovation, entrepreneurship and academic collaboration. He holds an MSc in Biomedical Engineering and previously conducted interdisciplinary research in nanobiomaterials, drug delivery, microfluidics and computational modeling.",
    },
    {
  name: "Ana María Aponte",
  role: "Information Professional",
  institution: "Universidad de los Andes",
  country: "Colombia",
  image: "/images/participants/ana-maria-aponte.jpg",
  bio: "Ana María Aponte is an Information Professional at Universidad de los Andes, where she supports internationalization efforts through information management and digital literacy initiatives."
},
    {
      name: "Maria Jose Saenz",
      role: "Science Diplomacy Officer",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/maria-jose-saenz.jpg",
      bio: "Maria Jose Saenz Rodriguez is a Science Diplomacy Officer at Universidad de los Andes and holds a degree in Physics. Her academic background includes scientific research, programming, nanomaterials and emerging technologies. She supports international partnerships in research, innovation and entrepreneurship and is also co-founder and COO of SeebGen.",
    },
    {
      name: "Hanna Ramirez",
      role: "Science Diplomacy Officer",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/hanna-ramirez.jpg",
      bio: "Hanna Ramírez is a Science Diplomacy Officer at Universidad de los Andes. She develops and manages international partnerships involving universities, governments, embassies, funding agencies and international organizations. Her work focuses on science diplomacy, research cooperation, mobility and opportunities for researchers and doctoral students.",
    },
    {
      name: "Johan Cruz",
      role: "Academic Cooperation Officer",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/johan-cruz1.jpg",
      bio: "Johan Sebastián Cruz is an Academic Cooperation Officer in the Office of International Affairs at Universidad de los Andes. He holds a degree in Business and International Relations and is pursuing graduate studies in Global Studies and International Cooperation. He has more than five years of experience in higher education internationalization.",
    },
    {
      name: "Felipe Velasco",
      role: "Academic Cooperation Officer",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/felipe-velasco.jpg",
      bio: "Felipe Velasco Leal is an International Relations professional with a concentration in Security, Peace and Conflict Studies. His experience spans international cooperation, project management, interinstitutional agreements, data analysis, research and community engagement, supporting partnerships and institutional-development initiatives.",
    },
  ],
  "academic-advisor": [
    {
      name: "Sandra Vilardy",
      role: "Professor, School of Management · Former Vice Minister of Environment",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/sandra-vilardy.jpg",
      bio: "Sandra Vilardy holds a PhD in Ecology and Environment and is a marine biologist by training. She was a professor and Dean at Universidad del Magdalena and later served as Colombia’s Vice Minister of Environment. Her work examines socio-ecological systems, ecosystem services and environmental conflicts, with a strong focus on connecting science, public authorities and decision-makers.",
    },
  ],
  "keynote-speakers": [
    {
      name: "Angelika Rettberg",
      role: "Dean of Social Sciences",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/angelika-rettberg.jpg",
      bio: "Angelika Rettberg holds a PhD in Political Science from Boston University and is widely recognized for research on peacebuilding, transitional justice, civil society and the relationship between natural resources, conflict and development. She has published extensively on conflict and peace studies and participated in national and international peace and post-conflict initiatives.",
    },
    {
      name: "Daniel Cadena",
      role: "Dean of Sciences",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/daniel-cadena.jpg",
      bio: "Daniel Cadena holds a PhD in Biology and leads the Vertebrate Evolutionary Biology Laboratory, where he studies the ecology, evolution and conservation of tropical wildlife, particularly birds. He is an internationally recognized evolutionary biologist, President of the American Ornithological Society and a member of the Colombian Academy of Sciences.",
    },
    {
      name: "Juan Camilo Cárdenas",
      role: "Director of the SDGs Center",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/juan-camilo-cardenas.jpg",
      virtual: true,
      bio: "Juan Camilo Cárdenas holds a PhD in Environmental and Natural Resource Economics from the University of Massachusetts Amherst. As Director of the Center for the Sustainable Development Goals for Latin America and the Caribbean, he leads initiatives connecting research, education and public policy to advance sustainability and climate action across the region.",
    },
    {
      name: "Catalina González-Arango",
      role: "Professor, School of Sciences · Seventh IPCC Assessment Report",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/catalina-gonzalez-arango.jpg",
      bio: "Catalina González Arango is a forest engineer with graduate training in environmental conservation and paleosciences. She has more than 20 years of experience reconstructing past ecosystems and climate dynamics in northern South America, leads the PALEO research group at Uniandes and was appointed a Lead Author of the Seventh IPCC Assessment Report in 2025.",
    },
    {
      name: "Carlos Guarnizo",
      role: "Head of Science Communication",
      institution: "Universidad de los Andes",
      country: "Colombia",
      image: "/images/participants/carlos-guarnizo.jpg",
      bio: "Carlos Guarnizo is a biologist and science communicator with a PhD in Ecology, Evolution and Behavior from The University of Texas at Austin. He is known for innovative science-outreach initiatives and public engagement through television, exhibitions, publications and educational programs, and currently leads science communication at Uniandes’ Vice Presidency for Research and Creation.",
    },
    {
      name: "Marina Santucci",
      role: "Associate Professor, Faculty of Business Sciences",
      institution: "Universidad Austral",
      country: "Argentina",
      image: "/images/participants/marina-santucci.jpg",
      virtual: true,
      bio: "Marina Santucci is an Associate Professor at Universidad Austral and a researcher at the Center for Sustainability and Social Innovation. Her research and publications cover knowledge management, agile methodologies, climate change in SMEs, sustainable reporting and responsible practices across industries. Her current work focuses on regenerative business models and responsible consumption through digital platforms.",
    },
    {
      name: "Valeria Ochoa Herrera",
      role: "Professor, College of Sciences and Engineering · Head of Environmental Management Office",
      institution: "Universidad San Francisco de Quito",
      country: "Ecuador",
      image: "/images/participants/valeria-ochoa-herrera.jpg",
      virtual: true,
      bio: "Valeria Ochoa-Herrera is a Professor of Chemical Engineering at USFQ and Adjunct Professor at the University of North Carolina at Chapel Hill. She leads USFQ’s Environmental Management Office and multidisciplinary research on water contamination mitigation, sustainable resource management, emerging contaminants and bioremediation in Ecuador and Colombia.",
    },
  ],
};

const universityProfiles: UniversityProfile[] = [
  {
    name: "York University",
    country: "Canada",
    founded: "1959",
    summary:
      "A large, globally oriented research university known for access, experiential learning, and impact-driven work on the UN Sustainable Development Goals.",
    highlight:
      "Top 40 globally in the Times Higher Education Impact Rankings 2025.",
    ranking: "322+",
    students: "53,100+ (June 2025)",
    academicOffer: "200+ undergraduate and graduate degree programs",
  },
  {
    name: "Pontificia Universidad Católica Madre y Maestra (PUCMM)",
    country: "Dominican Republic",
    founded: "1962",
    summary:
      "The Dominican Republic’s first university, combining national reach with a nonprofit, Catholic and internationally connected mission.",
    highlight:
      "No. 1 in the Dominican Republic in QS Latin America & the Caribbean 2026; fourth in the Caribbean.",
    ranking: "1401+",
    students: "12,774 (QS institutional profile)",
    academicOffer:
      "166 academic offerings reported in 2022, including 41 undergraduate, 84 master’s and 3 doctoral programs",
  },
  {
    name: "Universidad de Costa Rica (UCR)",
    country: "Costa Rica",
    founded: "1940",
    summary:
      "Costa Rica’s oldest and largest public university and a national anchor for teaching, research, and social action.",
    highlight:
      "No. 15 in Latin America and the highest-ranked institution in Costa Rica and Central America.",
    ranking: "463+",
    students: "44,499 (First academic cycle 2026)",
    academicOffer:
      "188 academic programs, including doctoral programs, specialties, academic and professional master’s programs, licentiate degrees, undergraduate degrees and diplomas",
  },
  {
    name: "Universidad de los Andes",
    country: "Colombia",
    founded: "1948",
    summary:
      "Colombia’s leading university, grounded in liberal education, scientific thinking, humanistic values and excellence, and committed to using knowledge, creativity and technology to build a better future.",
    highlight:
      "No. 8 in QS Latin America & the Caribbean 2026 and the highest-ranked university in Colombia.",
    ranking: "233+",
    students: "20,629 (Annual report · June 2026)",
    academicOffer: "190 undergraduate and postgraduate programs",
  },
  {
    name: "Universidad San Francisco de Quito (USFQ)",
    country: "Ecuador",
    founded: "1988",
    summary:
      "Ecuador’s first private liberal-arts university, with field-based learning and research in both the Galápagos Islands and the Amazon.",
    highlight: "No. 38 in QS Latin America & the Caribbean 2026.",
    ranking: "771–780",
    students: "9,050 (QS institutional profile)",
    academicOffer: "51 bachelor’s, 15+ master’s and 1 doctoral program",
  },
  {
    name: "Universidad Peruana Cayetano Heredia (UPCH)",
    country: "Peru",
    founded: "1961",
    summary:
      "A specialist research university whose identity and impact are centered on medicine, public health and the life sciences.",
    highlight:
      "Peru’s No. 1 university for the eighth consecutive year in the THE World University Rankings 2026.",
    ranking: "1001–1200",
    students: "10,260 (QS institutional profile)",
    academicOffer: "20+ undergraduate careers and 67 postgraduate programs",
  },
  {
    name: "Universidade Estadual de Campinas (Unicamp)",
    country: "Brazil",
    founded: "1966",
    summary:
      "A research-intensive public university with an unusually large postgraduate community and a major share of Brazil’s advanced-degree research.",
    highlight:
      "Postgraduate students represent about 48% of enrolment; Unicamp accounts for roughly 12% of master’s and doctoral theses under development in Brazil.",
    ranking: "277+",
    students: "Approximately 33,000",
    academicOffer: "65 undergraduate courses and 169 postgraduate programs",
  },
  {
    name: "Pontificia Universidad Católica de Chile (UC Chile)",
    country: "Chile",
    founded: "1888",
    summary:
      "A Catholic university offering a broad range of academic programs and providing strong regional leadership with consistent strengths across many fields.",
    highlight: "No. 1 in QS Latin America & the Caribbean 2026.",
    ranking: "119+",
    students: "40,536",
    academicOffer:
      "71 undergraduate; 109 master’s (including 4 online); 39 doctoral; and 76 clinical-specialty programs",
    note:
      "Values follow the visible final revisions in the supplied profile document.",
  },
  {
    name: "Universidad Andrés Bello (UNAB)",
    country: "Chile",
    founded: "1988",
    summary:
      "A private nonprofit university with a national footprint, recognized for research output and international quality assurance.",
    highlight:
      "Recognized as a leading research university in Chile and consistently ranked among the top five nationwide in scientific research output.",
    ranking: "1001–1200 · Top 50 LATAM · Top 10 Chile",
    students: "66,000+ across campuses and online",
    academicOffer:
      "68 undergraduate, 39 master’s, 22 medical and dental specialties and 15 doctoral programs",
  },
  {
    name: "Universidad Austral",
    country: "Argentina",
    founded: "1991",
    summary:
      "A not-for-profit university recognized for personalized education, research, active teaching methods and high-level business education.",
    highlight:
      "Argentina’s No. 1 privately managed university in QS Latin America & the Caribbean 2026; also No. 1 in Argentina in THE WUR 2026.",
    ranking: "530+",
    students: "11,000+",
    academicOffer:
      "100+ undergraduate, pre-degree, postgraduate and specialization programs",
  },
  {
    name: "The University of the West Indies (The UWI)",
    country: "The Caribbean · serving 17 countries and territories",
    founded: "1948",
    summary:
      "One of the world’s few regional universities, serving the Caribbean through five campuses and a network of global centers.",
    highlight:
      "Placed in the top 3.6% of universities worldwide in the THE World University Rankings 2026.",
    ranking: "Not listed as one unified institution",
    students: "Nearly 50,000",
    academicOffer:
      "800+ certificate, diploma, undergraduate and postgraduate options",
    note:
      "QS WUR 2027 does not currently display The UWI as one unified regional institution on TopUniversities.",
  },
  {
    name: "Université de Montréal",
    country: "Canada",
    founded: "1878",
    summary:
      "A research-intensive French-language ecosystem that brings together Université de Montréal, HEC Montréal and Polytechnique Montréal.",
    highlight: "Canada’s No. 2 university by volume of research activity.",
    ranking: "162+",
    students: "71,146 across UdeM and affiliated schools",
    academicOffer: "600 study programs across all cycles",
  },
  {
    name: "University of California, Los Angeles (UCLA)",
    country: "United States",
    founded: "1919",
    summary:
      "A leading public research university whose campus helped launch the Internet, with exceptional breadth across the arts, sciences, health and professional education.",
    highlight:
      "Ranked the No. 1 public university in the United States in eight of the past nine years by U.S. News.",
    ranking: "49+",
    students:
      "49,013 in 2025–26: 33,534 undergraduate; 13,898 graduate; 1,581 interns/residents",
    academicOffer:
      "141 undergraduate majors; 101 master’s and 111 doctoral/professional degrees",
  },
];

const normalizeSearch = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

function ParticipantCard({ participant }: { participant: Participant }) {
  return (
    <article className="participant-card">
      <div className="participant-photo-wrap">
        <img
          src={participant.image}
          alt={`Portrait of ${participant.name}`}
          className="participant-photo"
          loading="lazy"
        />

        {participant.virtual && (
          <span className="participant-virtual">Virtual</span>
        )}
      </div>

      <div className="participant-card-content">
        <span className="participant-country">
          {participant.country ?? "HUC"}
        </span>

        <div className="participant-card-heading">
          <h3>{participant.name}</h3>
          <p className="participant-role">{participant.role}</p>
          <p className="participant-institution">
            {participant.institution}
          </p>
        </div>

        <details className="participant-bio">
          <summary>
            <span>View profile</span>
            <span aria-hidden="true">+</span>
          </summary>
          <p>{participant.bio}</p>
        </details>
      </div>
    </article>
  );
}

function UniversityCard({ university }: { university: UniversityProfile }) {
  return (
    <article className="university-card">
      <div className="university-card-top">
        <span className="university-country">{university.country}</span>
        <span className="university-founded">
          Founded {university.founded}
        </span>
      </div>

      <h3>{university.name}</h3>
      <p className="university-summary">{university.summary}</p>

      <div className="university-highlight">
        <span>Institutional highlight</span>
        <p>{university.highlight}</p>
      </div>

      <dl className="university-metrics">
        <div>
          <dt>QS WUR 2027</dt>
          <dd>{university.ranking}</dd>
        </div>
        <div>
          <dt>Students</dt>
          <dd>{university.students}</dd>
        </div>
        <div className="university-offer">
          <dt>Academic offer</dt>
          <dd>{university.academicOffer}</dd>
        </div>
      </dl>

      {university.note && (
        <p className="university-note">{university.note}</p>
      )}
    </article>
  );
}

function App() {
  const [selectedDay, setSelectedDay] = useState("day1");
  const [expandedSession, setExpandedSession] = useState<string | null>(
    null
  );
  const [modal, setModal] = useState<ModalType>(null);
  const [participantSection, setParticipantSection] =
    useState<ParticipantCategory>("presidents");
  const [participantSearch, setParticipantSearch] = useState("");
  const [universitySearch, setUniversitySearch] = useState("");

  const day = days.find((item) => item.id === selectedDay)!;

  const filteredParticipants = useMemo(() => {
    const query = normalizeSearch(participantSearch);
    const current = participants[participantSection];

    if (!query) {
      return current;
    }

    return current.filter((participant) =>
      normalizeSearch(
        `${participant.name} ${participant.role} ${participant.institution} ${participant.country ?? ""}`
      ).includes(query)
    );
  }, [participantSearch, participantSection]);

  const filteredUniversities = useMemo(() => {
    const query = normalizeSearch(universitySearch);

    if (!query) {
      return universityProfiles;
    }

    return universityProfiles.filter((university) =>
      normalizeSearch(
        `${university.name} ${university.country} ${university.summary} ${university.highlight}`
      ).includes(query)
    );
  }, [universitySearch]);

  const toggleSession = (id: string) => {
    setExpandedSession((current) => (current === id ? null : id));
  };

  const hasExpandableContent = (session: Session) =>
    Boolean(
      session.subActivities?.length ||
        session.detailGroups?.length ||
        session.links?.length
    );

  const modalTitle =
    modal === "recommendations"
      ? "Travel Tips & Recommendations"
      : modal === "attendees"
      ? "Attendees"
      : modal === "universities"
      ? "HUC University Profiles"
      : "";

  useEffect(() => {
    if (!modal) {
      document.body.classList.remove("modal-open");
      return;
    }

    document.body.classList.add("modal-open");

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModal(null);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeWithEscape);
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

            <div className="info-actions" aria-label="Assembly information">
              <button
                type="button"
                className="info-glass-button"
                onClick={() => setModal("recommendations")}
              >
                <span className="info-action-icon" aria-hidden="true">
                  ✦
                </span>
                <span className="info-action-copy">
                  <small>PLAN YOUR VISIT</small>
                  <strong>Travel Tips & Recommendations</strong>
                </span>
                <span className="info-action-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>

              <button
                type="button"
                className="info-glass-button"
                onClick={() => setModal("attendees")}
              >
                <span className="info-action-icon" aria-hidden="true">
                  ◉
                </span>
                <span className="info-action-copy">
                  <small>MEET THE COMMUNITY</small>
                  <strong>Attendees</strong>
                </span>
                <span className="info-action-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>

              <button
                type="button"
                className="info-glass-button"
                onClick={() => setModal("universities")}
              >
                <span className="info-action-icon" aria-hidden="true">
                  ◫
                </span>
                <span className="info-action-copy">
                  <small>EXPLORE THE CONSORTIUM</small>
                  <strong>HUC University Profiles</strong>
                </span>
                <span className="info-action-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
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
                Select a day to explore sessions, workshops, transportation and
                social activities.
              </p>
            </div>

            <div className="day-tabs" role="tablist" aria-label="Agenda days">
              {days.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedDay === item.id}
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
                const expandable = hasExpandableContent(session);

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
                            {(!session.type || session.type === "session") &&
                              "SESSION"}
                          </span>

                          <h4>{session.title}</h4>
                        </div>

                        {expandable && (
                          <button
                            type="button"
                            className={`expand-button ${
                              expanded ? "expanded" : ""
                            }`}
                            onClick={() => toggleSession(sessionId)}
                            aria-expanded={expanded}
                            aria-controls={`${sessionId}-details`}
                            aria-label={
                              expanded ? "Hide session details" : "Show session details"
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
                            href={session.locationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location location-link"
                          >
                            ⌖ {session.location}
                          </a>
                        ) : (
                          <p className="location">⌖ {session.location}</p>
                        ))}

                      {session.description && (
                        <p className="description">{session.description}</p>
                      )}

                      {expandable && (
                        <div
                          id={`${sessionId}-details`}
                          className={`details-wrapper ${expanded ? "open" : ""}`}
                        >
                          <div className="details-inner">
                            {session.subActivities &&
                              session.subActivities.length > 0 && (
                                <div className="subactivities">
                                  {session.subActivities.map(
                                    (activity, activityIndex) => (
                                      <div
                                        className="subactivity"
                                        key={`${activity.title}-${activityIndex}`}
                                      >
                                        {activity.time && (
                                          <span className="subactivity-time">
                                            {activity.time}
                                          </span>
                                        )}

                                        <div className="subactivity-content">
                                          <span className="subactivity-title">
                                            {activity.title}
                                          </span>

                                          {activity.description && (
                                            <p>{activity.description}</p>
                                          )}
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}

                            {session.detailGroups?.map((group, groupIndex) => (
                              <div
                                className="detail-group"
                                key={`${group.title}-${groupIndex}`}
                              >
                                <h5>{group.title}</h5>

                                {group.items.map((item, itemIndex) => (
                                  <div
                                    className="detail-row"
                                    key={`${item.text}-${itemIndex}`}
                                  >
                                    <span>→</span>

                                    {item.href ? (
                                      <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {item.text}
                                      </a>
                                    ) : (
                                      <p>{item.text}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ))}

                            {session.links && session.links.length > 0 && (
                              <div className="session-links">
                                {session.links.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="session-link"
                                  >
                                    {link.label}
                                    <span>↗</span>
                                  </a>
                                ))}
                              </div>
                            )}
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

      {modal && (
        <div className="modal-backdrop" onMouseDown={() => setModal(null)}>
          <div
            className={`glass-modal ${
              modal === "attendees" || modal === "universities"
                ? "glass-modal--wide"
                : ""
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="huc-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="glass-modal-glow" />

            <header className="modal-header">
              <div>
                <span className="modal-eyebrow">HUC GENERAL ASSEMBLY 2026</span>
                <h2 id="huc-modal-title">{modalTitle}</h2>
                <p>Universidad de los Andes · Bogotá, Colombia</p>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
            </header>

            <div className="modal-content">
              {modal === "recommendations" && (
                <>
                  <section className="welcome-guide-card">
                    <div className="welcome-guide-copy">
                      <span className="welcome-guide-kicker">
                        WELCOME PAGE · EXPLORE
                      </span>
                      <h3>Discover Bogotá and Colombia beyond the agenda</h3>
                      <p>
                        The Uniandes Welcome Page brings together cultural,
                        mobility and destination information for visitors who
                        want to explore Bogotá and other regions of Colombia.
                        We keep this agenda focused on practical event logistics
                        and link to the Welcome Page for the full visitor guide.
                      </p>

                      <div className="welcome-guide-tags" aria-label="Guide topics">
                        <span>Welcome Page English</span>
                        <span>Welcome Page Spanish</span>
                      </div>
                    </div>

                    <div className="welcome-guide-actions">
                      <a
                        href={welcomePageENUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="welcome-guide-link"
                      >
                        Welcome Page English
                        <span aria-hidden="true">↗</span>
                      </a>

                      <a
                        href={welcomePageESUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="welcome-guide-link welcome-guide-link--secondary"
                      >
                        Welcome Page Spanish
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </section>

                  <div className="recommendations-grid">
                    {recommendationSections.map((section) => (
                      <section
                        className="recommendation-card"
                        key={section.title}
                      >
                        <span className="recommendation-dot" />
                        <h3>{section.title}</h3>

                        {section.intro && (
                          <p className="recommendation-intro">
                            {section.intro}
                          </p>
                        )}

                        {section.items && (
                          <ul>
                            {section.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}

                        {section.links && (
                          <div className="recommendation-links">
                            {section.links.map((link) => (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={link.label}
                              >
                                <span>{link.label}</span>
                                <span>↗</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </section>
                    ))}
                  </div>
                </>
              )}

              {modal === "attendees" && (
                <div className="directory-layout">
                  <div className="directory-toolbar">
                    <div
                      className="participant-tabs"
                      role="tablist"
                      aria-label="Attendee categories"
                    >
                      {participantTabs.map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          role="tab"
                          aria-selected={participantSection === tab.id}
                          className={
                            participantSection === tab.id ? "active" : ""
                          }
                          onClick={() => {
                            setParticipantSection(tab.id);
                            setParticipantSearch("");
                          }}
                        >
                          <span className="participant-tab-full">
                            {tab.label}
                          </span>
                          <span className="participant-tab-short">
                            {tab.shortLabel}
                          </span>
                          <small>{participants[tab.id].length}</small>
                        </button>
                      ))}
                    </div>

                    <label className="directory-search">
                      <span className="sr-only">Search attendees</span>
                      <span aria-hidden="true">⌕</span>
                      <input
                        type="search"
                        placeholder="Search by name, role or university"
                        value={participantSearch}
                        onChange={(event) =>
                          setParticipantSearch(event.target.value)
                        }
                      />
                    </label>
                  </div>

                  <div className="directory-result-meta" aria-live="polite">
                    <span>
                      {
                        participantTabs.find(
                          (tab) => tab.id === participantSection
                        )?.label
                      }
                    </span>
                    <span>
                      {filteredParticipants.length} profile
                      {filteredParticipants.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  {filteredParticipants.length > 0 ? (
                    <div className="participants-grid">
                      {filteredParticipants.map((participant) => (
                        <ParticipantCard
                          key={`${participant.name}-${participant.institution}`}
                          participant={participant}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="directory-empty">
                      <span>⌕</span>
                      <h3>No profiles found</h3>
                      <p>Try a different name, role or university.</p>
                    </div>
                  )}
                </div>
              )}

              {modal === "universities" && (
                <div className="directory-layout">
                  <div className="university-directory-intro">
                    <div>
                      <span className="modal-eyebrow">13 MEMBER UNIVERSITIES</span>
                      <h3>Institutional profiles across the hemisphere</h3>
                      <p>
                        Explore each member university’s institutional profile,
                        QS World University Rankings 2027 reference, student
                        population and academic offer.
                      </p>
                    </div>

                    <label className="directory-search university-search">
                      <span className="sr-only">Search universities</span>
                      <span aria-hidden="true">⌕</span>
                      <input
                        type="search"
                        placeholder="Search university or country"
                        value={universitySearch}
                        onChange={(event) =>
                          setUniversitySearch(event.target.value)
                        }
                      />
                    </label>
                  </div>

                  <div className="directory-result-meta" aria-live="polite">
                    <span>HUC Member Universities</span>
                    <span>
                      {filteredUniversities.length} institution
                      {filteredUniversities.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  {filteredUniversities.length > 0 ? (
                    <div className="universities-grid">
                      {filteredUniversities.map((university) => (
                        <UniversityCard
                          key={university.name}
                          university={university}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="directory-empty">
                      <span>⌕</span>
                      <h3>No universities found</h3>
                      <p>Try a different university name or country.</p>
                    </div>
                  )}
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
