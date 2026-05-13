import type { FaqItem } from "~/utils/geoSchema";

export type GeoPageType = "integration" | "comparison" | "sport";

export type GeoLink = {
  label: string;
  href: string;
};

export type GeoSection = {
  title: string;
  text: string;
  bullets?: string[];
};

export type GeoPage = {
  type: GeoPageType;
  slug: string;
  title: string;
  titleDe?: string;
  description: string;
  eyebrow: string;
  eyebrowDe?: string;
  h1: string;
  h1De?: string;
  intro: string;
  sections: GeoSection[];
  faqs: FaqItem[];
  links: GeoLink[];
};

const defaultLinks: GeoLink[] = [
  { label: "Triathlon Coach", href: "/triathlon-coach" },
  { label: "Running Coach", href: "/running-coach" },
  { label: "Cycling Coach", href: "/cycling-coach" },
  { label: "FAQ", href: "/faq" },
  { label: "Datenschutz", href: "/privacy-policy" },
  { label: "Mission", href: "/mission" },
];

const integrationTrustSection: GeoSection = {
  title: "Datenschutz, Kontrolle und Transparenz",
  text: "YOUB verarbeitet Gesundheits-, Trainings- und Kalenderdaten nur, um dein Coaching bereitzustellen. Die Kommunikation ist auf Klarheit ausgelegt: Du sollst verstehen, warum eine Einheit angepasst wird.",
  bullets: [
    "DSGVO-konforme Verarbeitung mit expliziter Einwilligung",
    "Google Calendar Daten werden nicht für allgemeines KI-Training genutzt",
    "KI erklärt sportwissenschaftliche Entscheidungen, statt sie als Blackbox zu verstecken",
  ],
};

const chatFirstSection: GeoSection = {
  title: "Warum chat-first Coaching anders ist",
  text: "YOUB zwingt dich nicht in ein Dashboard voller Zahlen. Der Coach meldet sich proaktiv, stellt Rückfragen und erklärt Entscheidungen im Dialog.",
  bullets: [
    "Feedback nach Einheiten, wenn es relevant ist",
    "Plananpassungen bei Stress, Schlafmangel oder wenig Zeit",
    "Sprache und Timing wie bei echtem Coaching, nicht wie bei einem Reporting-Tool",
  ],
};

const geoPages: GeoPage[] = [
  {
    type: "integration",
    slug: "garmin-ai-coach",
    title: "Garmin AI Coach für Laufen, Radsport und Triathlon",
    titleDe: "Garmin-KI-Coach für Laufen, Radsport und Triathlon",
    description:
      "Verbinde Garmin mit YOUB und erhalte chat-first Endurance Coaching, das Training, Schlaf, Recovery und Alltag berücksichtigt.",
    eyebrow: "Garmin Integration",
    eyebrowDe: "Garmin-Integration",
    h1: "Garmin AI Coach für Endurance Training im echten Leben",
    h1De: "Garmin-KI-Coach für Ausdauertraining im echten Leben",
    intro:
      "YOUB nutzt Garmin Daten, um dein Training, deine Belastung, deine Erholung und deinen Alltag besser zu verstehen. Statt nur Werte anzuzeigen, übersetzt YOUB deine Daten in konkrete Coaching-Entscheidungen im Chat.",
    sections: [
      {
        title: "Welche Garmin Daten YOUB nutzt",
        text: "Wenn du Garmin verbindest, kann YOUB Aktivitäten, Trainingshistorie, Herzfrequenz-, Schlaf- und Recovery-Signale in den Coaching-Kontext einordnen.",
        bullets: [
          "Laufen, Radfahren und Triathlon-Aktivitäten",
          "Herzfrequenz, Belastung, Dauer, Distanz und Intensität",
          "Schlaf-, Recovery- und Readiness-Signale, sofern verfügbar",
        ],
      },
      {
        title: "Wie YOUB dein Garmin Training anpasst",
        text: "YOUB betrachtet nicht nur die geplante Einheit, sondern auch dein aktuelles Belastungsbild. Wenn ein harter Tag nicht zu deiner Erholung oder deinem Kalender passt, schlägt YOUB eine sinnvolle Anpassung vor.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB ein Garmin AI Coach?",
        answer:
          "Ja. YOUB kann Garmin Daten als Grundlage für chat-first Coaching nutzen und Training für Laufen, Radsport und Triathlon anpassen.",
      },
      {
        question: "Ersetzt YOUB Garmin Connect?",
        answer:
          "Nein. Garmin Connect bleibt deine Datenquelle. YOUB legt eine Coaching-Schicht darüber und macht aus den Daten konkrete Entscheidungen.",
      },
      {
        question: "Kann YOUB Garmin Daten mit Google Calendar kombinieren?",
        answer:
          "Ja. YOUB kann Trainings- und Recovery-Kontext mit Kalenderverfügbarkeit kombinieren, damit Training besser in deinen Alltag passt.",
      },
    ],
    links: [
      { label: "Google Calendar Training", href: "/google-calendar-training" },
      { label: "WHOOP Training Coach", href: "/whoop-training-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "integration",
    slug: "strava-ai-coach",
    title: "Strava AI Coach für Endurance Athlet:innen",
    titleDe: "Strava-KI-Coach für Ausdauerathlet:innen",
    description:
      "Nutze Strava Aktivitätsdaten mit YOUB, um Lauf-, Rad- und Triathlontraining im Chat einzuordnen und anzupassen.",
    eyebrow: "Strava Integration",
    eyebrowDe: "Strava-Integration",
    h1: "Strava AI Coach für Training, das mehr kann als Aktivitäten sammeln",
    h1De: "Strava-KI-Coach für Training, das mehr kann als Aktivitäten sammeln",
    intro:
      "Strava zeigt, was du gemacht hast. YOUB hilft dir zu verstehen, was daraus für dein nächstes Training folgt. Aktivitätsdaten werden in Coaching-Dialoge und Plananpassungen übersetzt.",
    sections: [
      {
        title: "Welche Strava Daten relevant sind",
        text: "YOUB kann abgeschlossene Einheiten, Sportarten, Dauer, Distanz, Höhenmeter und Intensitätskontext für Coaching-Entscheidungen nutzen.",
        bullets: [
          "Lauf- und Radeinheiten aus deiner Trainingshistorie",
          "Belastungs- und Progressionsmuster über mehrere Wochen",
          "Kontext für Fragen wie: War das zu hart, passend oder zu leicht?",
        ],
      },
      {
        title: "Vom Aktivitätsfeed zur Trainingsentscheidung",
        text: "YOUB bewertet nicht nur einzelne Segmente oder Bestzeiten. Der Coach fragt, wie sich eine Einheit angefühlt hat, und verbindet dein Feedback mit dem Datenbild.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine Strava Alternative?",
        answer:
          "Nein. Strava ist ein Aktivitätsnetzwerk und Tracking-Feed. YOUB ist eine Coaching-Schicht, die Aktivitätsdaten für Trainingsentscheidungen nutzt.",
      },
      {
        question: "Kann YOUB Strava Daten für Triathlon nutzen?",
        answer:
          "Ja. Strava Aktivitäten können helfen, Lauf- und Radbelastung im Triathlon-Kontext einzuordnen.",
      },
      {
        question: "Optimiert YOUB auf Segmente?",
        answer:
          "YOUB optimiert primär auf nachhaltige Performance, Recovery und Zielerreichung, nicht auf einzelne Segmente.",
      },
    ],
    links: [
      { label: "Garmin AI Coach", href: "/garmin-ai-coach" },
      { label: "Cycling Coach", href: "/cycling-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "integration",
    slug: "whoop-training-coach",
    title: "WHOOP Training Coach für Recovery-basiertes Training",
    titleDe: "WHOOP-Trainingscoach für erholungsbasiertes Training",
    description:
      "YOUB nutzt Recovery-, Schlaf- und Readiness-Signale, um Ausdauertraining für ambitionierte Athlet:innen anzupassen.",
    eyebrow: "WHOOP Integration",
    eyebrowDe: "WHOOP-Integration",
    h1: "WHOOP Training Coach für smartere Belastungsentscheidungen",
    h1De: "WHOOP-Trainingscoach für smartere Belastungsentscheidungen",
    intro:
      "WHOOP liefert starke Hinweise darauf, wie gut dein Körper bereit für Belastung ist. YOUB macht daraus alltagstaugliche Coaching-Entscheidungen für Lauf-, Rad- und Triathlontraining.",
    sections: [
      {
        title: "Recovery-Daten als Trainingskontext",
        text: "YOUB kann WHOOP Signale wie Schlaf, HRV, Ruhepuls und Recovery-Kontext nutzen, um harte Einheiten, Ruhetage und Anpassungen besser zu begründen.",
        bullets: [
          "Schlafqualität und Schlafdauer",
          "HRV- und Recovery-Signale",
          "Warnsignale für Überlastung oder fehlende Anpassung",
        ],
      },
      {
        title: "Training wird nicht automatisch weicher",
        text: "Ein niedriger Recovery-Wert bedeutet nicht automatisch, dass alles gestrichen wird. YOUB sucht die sportlich sinnvollste Anpassung: verschieben, reduzieren, ersetzen oder bewusst durchziehen.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Kann YOUB WHOOP Recovery für Training nutzen?",
        answer:
          "Ja. YOUB kann Recovery- und Schlafsignale in Trainingsentscheidungen einbeziehen.",
      },
      {
        question: "Stoppt YOUB Training bei niedriger Recovery automatisch?",
        answer:
          "Nein. YOUB erklärt Optionen und passt Training kontextabhängig an, statt pauschal jede harte Einheit zu streichen.",
      },
      {
        question: "Hilft YOUB gegen Übertraining?",
        answer:
          "YOUB ist darauf ausgelegt, Warnsignale früh zu erkennen und bessere Belastungsentscheidungen vorzuschlagen.",
      },
    ],
    links: [
      { label: "Garmin AI Coach", href: "/garmin-ai-coach" },
      { label: "Running Coach", href: "/running-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "integration",
    slug: "google-calendar-training",
    title: "Google Calendar Trainingsplanung für Athlet:innen",
    titleDe: "Trainingsplanung mit Google Kalender für Athlet:innen",
    description:
      "YOUB passt Training an deinen Google Calendar, deine Verfügbarkeit und deinen Alltag an.",
    eyebrow: "Google Calendar Integration",
    eyebrowDe: "Google-Kalender-Integration",
    h1: "Google Calendar Training für Pläne, die in dein Leben passen",
    h1De: "Training mit Google Kalender für Pläne, die in dein Leben passen",
    intro:
      "Ein Trainingsplan ist nur gut, wenn er in deinen echten Kalender passt. YOUB berücksichtigt Termine, Arbeit, Familie und freie Zeit, damit Training nicht gegen dein Leben arbeitet.",
    sections: [
      {
        title: "Warum Kalenderkontext entscheidend ist",
        text: "Ambitionierte Athlet:innen scheitern selten an fehlender Motivation, sondern an Wochen, die anders laufen als geplant. YOUB nutzt Kalenderkontext, um Training realistischer zu platzieren.",
        bullets: [
          "Trainingseinheiten in passende Zeitfenster legen",
          "Eng getaktete Tage früh erkennen",
          "Harte Einheiten auf Tage mit mehr Luft verschieben",
        ],
      },
      {
        title: "Training exportieren und Verfügbarkeit verstehen",
        text: "YOUB kann geplante Trainings in Google Calendar sichtbar machen und bestehende Termine berücksichtigen, um den Plan alltagstauglicher zu machen.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Warum braucht ein Coach meinen Kalender?",
        answer:
          "Kalenderdaten helfen YOUB zu erkennen, wann Training realistisch ist und wann Stress oder Zeitmangel eine Anpassung erfordern.",
      },
      {
        question: "Nutzt YOUB Google Calendar Daten für KI-Training?",
        answer:
          "Nein. Google Calendar Daten werden nur für Kalender- und Trainingsplanungsfunktionen deines Accounts genutzt.",
      },
      {
        question: "Kann ich Google Calendar wieder trennen?",
        answer:
          "Ja. Du kannst den Zugriff widerrufen und eine Löschung deiner Daten anfordern.",
      },
    ],
    links: [
      { label: "Garmin AI Coach", href: "/garmin-ai-coach" },
      { label: "Ironman Training App", href: "/ironman-training-app" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "join-cycling-alternative",
    title: "Join Cycling Alternative für chat-first Coaching",
    titleDe: "Alternative zu Join Cycling für Coaching per Chat",
    description:
      "Vergleiche YOUB als Join Cycling Alternative für Athlet:innen, die adaptive Pläne, Kalenderkontext und Coaching im Dialog suchen.",
    eyebrow: "Vergleich",
    h1: "Join Cycling Alternative für Athlet:innen, die Coaching im Dialog wollen",
    h1De: "Alternative zu Join Cycling für Athlet:innen, die Coaching im Dialog wollen",
    intro:
      "Wenn du nach einer Join Cycling Alternative suchst, ist die zentrale Frage nicht nur, ob ein Plan adaptiv ist. Es geht darum, ob dein Coach deine Daten, dein Gefühl und deinen Alltag zusammenführt.",
    sections: [
      {
        title: "Worin YOUB sich positioniert",
        text: "YOUB fokussiert sich auf chat-first Endurance Coaching für ambitionierte Amateurathlet:innen. Der Coach erklärt Anpassungen, statt nur Planblöcke zu verschieben.",
        bullets: [
          "Dialog statt reiner Planansicht",
          "Google Calendar Kontext für echte Verfügbarkeit",
          "Laufen, Radsport und Triathlon statt nur einer Trainingsperspektive",
        ],
      },
      {
        title: "Für wen YOUB die bessere Wahl sein kann",
        text: "YOUB passt besonders, wenn du viele Daten sammelst, aber weniger Zeit für Analyse hast, und wenn dein Alltag regelmäßig Trainingsentscheidungen verändert.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine Join Cycling Alternative?",
        answer:
          "Ja, für Athlet:innen, die chat-first Coaching, Kalenderkontext und multi-sport Endurance Coaching suchen, kann YOUB eine passende Alternative sein.",
      },
      {
        question: "Bewertet YOUB Join Cycling negativ?",
        answer:
          "Nein. Diese Seite beschreibt die YOUB Positionierung und hilft bei der Wahl des passenden Coaching-Ansatzes.",
      },
      {
        question: "Ist YOUB nur für Radfahrer:innen?",
        answer:
          "Nein. YOUB richtet sich an Läufer:innen, Radfahrer:innen und Triathlet:innen.",
      },
    ],
    links: [
      { label: "Cycling Coach", href: "/cycling-coach" },
      { label: "Triathlon Coach", href: "/triathlon-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "humango-alternative",
    title: "Humango Alternative für chat-first AI Endurance Coaching",
    titleDe: "Alternative zu Humango für KI-Ausdauercoaching per Chat",
    description:
      "YOUB als Humango Alternative: chat-first Coaching, Wearable-Daten, Kalenderkontext und sportwissenschaftliche Entscheidungslogik.",
    eyebrow: "Vergleich",
    h1: "Humango Alternative für Endurance Coaching, das mit dir spricht",
    h1De: "Alternative zu Humango für Ausdauercoaching, das mit dir spricht",
    intro:
      "YOUB positioniert sich für Athlet:innen, die nicht nur einen algorithmischen Plan wollen, sondern einen Coach, der Daten, Alltag und Feedback im Dialog zusammenbringt.",
    sections: [
      {
        title: "YOUBs Schwerpunkt",
        text: "YOUB nutzt KI primär als Kommunikationslayer. Die Empfehlung soll nachvollziehbar sein und auf sportwissenschaftlicher Logik beruhen.",
        bullets: [
          "Proaktive Nachrichten statt passiver Dashboard-Auswertung",
          "Kalenderbasierte Anpassung an Arbeit, Familie und Termine",
          "Wearable- und Recovery-Daten als Entscheidungskontext",
        ],
      },
      {
        title: "Für wen YOUB interessant ist",
        text: "YOUB passt für ambitionierte Amateurathlet:innen, die Performance steigern wollen, ohne ihren Alltag einem starren Plan unterzuordnen.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine Humango Alternative?",
        answer:
          "YOUB kann eine Alternative sein, wenn du besonderen Wert auf chat-first Coaching, Kalenderkontext und erklärte Entscheidungen legst.",
      },
      {
        question: "Generiert YOUB Trainingspläne als Blackbox?",
        answer:
          "Nein. YOUB nutzt KI primär für Kommunikation und Erklärung, nicht als unkontrollierten Blackbox-Generator.",
      },
      {
        question: "Welche Sportarten unterstützt YOUB?",
        answer:
          "YOUB fokussiert Laufen, Radsport und Triathlon.",
      },
    ],
    links: [
      { label: "Running Coach", href: "/running-coach" },
      { label: "Garmin AI Coach", href: "/garmin-ai-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "tridot-alternative",
    title: "TriDot Alternative für adaptive Triathlon-Coaching Dialoge",
    titleDe: "Alternative zu TriDot für Triathlon-Coaching im Dialog",
    description:
      "Vergleiche YOUB als TriDot Alternative für Triathlet:innen, die Training im Alltag, Wearables und Chat-Coaching verbinden wollen.",
    eyebrow: "Vergleich",
    h1: "TriDot Alternative für Triathlet:innen mit echtem Alltag",
    h1De: "Alternative zu TriDot für Triathlet:innen mit echtem Alltag",
    intro:
      "Triathlontraining scheitert oft nicht an der Theorie, sondern an Wochen mit Job, Familie, schlechtem Schlaf und wechselnder Verfügbarkeit. YOUB legt den Fokus auf adaptive Entscheidungen im Dialog.",
    sections: [
      {
        title: "YOUB für Triathlon im Alltag",
        text: "YOUB verbindet Trainingsdaten, Recovery-Signale, Kalenderkontext und Feedback, um harte Einheiten, Umfang und Erholung besser abzustimmen.",
        bullets: [
          "Chat-first Anpassung statt stiller Planlogik",
          "Wearable-Daten und subjektives Gefühl im selben Kontext",
          "Google Calendar als Realitätscheck für Trainingsplanung",
        ],
      },
      {
        title: "Wann YOUB gut passt",
        text: "YOUB passt, wenn du ambitioniert trainierst, aber keine perfekte Trainingswoche hast und regelmäßig Entscheidungen neu bewerten musst.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine TriDot Alternative?",
        answer:
          "YOUB kann eine Alternative für Triathlet:innen sein, die chat-first Coaching und alltagsnahe Plananpassung suchen.",
      },
      {
        question: "Unterstützt YOUB Ironman Training?",
        answer:
          "Ja. YOUB eignet sich besonders für lange Vorbereitungen, in denen Recovery und Kalenderkontext wichtig sind.",
      },
      {
        question: "Ist YOUB ein menschlicher Coach?",
        answer:
          "YOUB ist ein digitaler Coach mit sportwissenschaftlichem Entscheidungsmodell und KI-Kommunikationslayer.",
      },
    ],
    links: [
      { label: "Ironman Training App", href: "/ironman-training-app" },
      { label: "Google Calendar Training", href: "/google-calendar-training" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "enduco-alternative",
    title: "enduco Alternative für chat-first Endurance Coaching",
    titleDe: "Alternative zu enduco für Ausdauercoaching per Chat",
    description:
      "YOUB als enduco Alternative: Coaching im Dialog, Wearable-Daten, Google Calendar und sportwissenschaftliche Plananpassung für Alltag und Training.",
    eyebrow: "Vergleich",
    h1: "enduco Alternative für Athlet:innen, die Coaching im Dialog wollen",
    h1De: "Alternative zu enduco für Athlet:innen, die Coaching im Dialog wollen",
    intro:
      "Wenn du nach einer enduco Alternative suchst, geht es meist um mehr als einen digitalen Trainingsplan. YOUB positioniert sich für Athlet:innen, die Plananpassung, Daten und Alltag direkt im Coaching-Dialog zusammenbringen wollen.",
    sections: [
      {
        title: "YOUBs Schwerpunkt im Vergleich",
        text: "YOUB setzt auf chat-first Coaching: Der Coach meldet sich, fragt nach, erklärt Entscheidungen und passt Training an, wenn Daten oder Alltag gegen den ursprünglichen Plan sprechen.",
        bullets: [
          "Dialog statt reiner Plan- oder Kalenderansicht",
          "Wearable-, Recovery- und Schlafdaten als Entscheidungskontext",
          "Google Calendar für realistische Verfügbarkeit im Alltag",
        ],
      },
      {
        title: "Für wen YOUB interessant ist",
        text: "YOUB passt, wenn du ambitioniert trainierst, schon Daten sammelst und einen digitalen Coach suchst, der dir Entscheidungen verständlich macht.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine enduco Alternative?",
        answer:
          "YOUB kann eine enduco Alternative sein, wenn du chat-first Coaching, Kalenderkontext und sportwissenschaftlich erklärte Trainingsanpassungen suchst.",
      },
      {
        question: "Für welche Sportarten ist YOUB geeignet?",
        answer:
          "YOUB fokussiert Endurance Training für Laufen, Radsport und Triathlon.",
      },
      {
        question: "Bewertet YOUB enduco negativ?",
        answer:
          "Nein. Diese Seite beschreibt die YOUB Positionierung und hilft bei der Wahl des passenden digitalen Coaching-Ansatzes.",
      },
    ],
    links: [
      { label: "Running Coach", href: "/running-coach" },
      { label: "Cycling Coach", href: "/cycling-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "runna-alternative",
    title: "Runna Alternative für adaptive Lauf- und Endurance-Coaching Dialoge",
    titleDe: "Alternative zu Runna für adaptives Lauf- und Ausdauercoaching",
    description:
      "YOUB als Runna Alternative für Läufer:innen und Triathlet:innen, die Wearable-Daten, Recovery, Kalenderkontext und Chat-Coaching verbinden wollen.",
    eyebrow: "Vergleich",
    h1: "Runna Alternative für Läufer:innen, deren Plan zum Alltag passen muss",
    h1De: "Alternative zu Runna für Läufer:innen, deren Plan zum Alltag passen muss",
    intro:
      "YOUB positioniert sich für Läufer:innen, die nicht nur einen Plan abarbeiten wollen, sondern verstehen möchten, wann Training angepasst, verschoben oder bewusst beibehalten werden sollte.",
    sections: [
      {
        title: "YOUB für Lauftraining mit Kontext",
        text: "YOUB verbindet Laufdaten, Schlaf, Recovery, subjektives Gefühl und Kalenderverfügbarkeit. Der Coach erklärt, warum Intervalle, lockeres Training oder Regeneration gerade sinnvoll sind.",
        bullets: [
          "Chat-first Feedback statt nur Planvorgaben",
          "Garmin, Strava und Recovery-Daten im Trainingskontext",
          "Google Calendar als Realitätscheck für harte Einheiten",
        ],
      },
      {
        title: "Wann YOUB gut passt",
        text: "YOUB passt besonders, wenn dein Lauftraining regelmäßig mit Arbeit, Familie, Müdigkeit oder anderen Sportarten konkurriert.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine Runna Alternative?",
        answer:
          "YOUB kann eine Runna Alternative sein, wenn du Laufcoaching mit Wearable-Daten, Kalenderkontext und erklärten Anpassungen im Chat suchst.",
      },
      {
        question: "Ist YOUB nur für Läufer:innen?",
        answer:
          "Nein. YOUB unterstützt Läufer:innen, Radfahrer:innen und Triathlet:innen.",
      },
      {
        question: "Kann YOUB Marathontraining unterstützen?",
        answer:
          "Ja. YOUB kann Laufbelastung, Recovery und Alltag in längeren Vorbereitungen einordnen.",
      },
    ],
    links: [
      { label: "Running Coach", href: "/running-coach" },
      { label: "Garmin AI Coach", href: "/garmin-ai-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "whoop-coach-alternative",
    title: "WHOOP Coach Alternative für Endurance Training",
    titleDe: "Alternative zu WHOOP Coach für Ausdauertraining",
    description:
      "YOUB als WHOOP Coach Alternative: Recovery-Daten, Trainingsplan, Kalenderkontext und chat-first Coaching für Ausdauerathlet:innen.",
    eyebrow: "Vergleich",
    h1: "WHOOP Coach Alternative für Training, das Recovery und Plan verbindet",
    h1De: "Alternative zu WHOOP Coach für Training, das Erholung und Plan verbindet",
    intro:
      "Recovery-Daten sind wertvoll, aber Athlet:innen brauchen daraus konkrete Trainingsentscheidungen. YOUB positioniert sich als Coaching-Layer, der Recovery-Signale mit Trainingsplan, Alltag und Dialog verbindet.",
    sections: [
      {
        title: "Von Recovery-Signal zu Trainingsentscheidung",
        text: "YOUB kann Recovery-, Schlaf- und HRV-Signale in den Kontext deiner geplanten Einheiten setzen und erklären, ob Verschieben, Reduzieren, Ersetzen oder Durchziehen sinnvoll ist.",
        bullets: [
          "Recovery nicht isoliert, sondern im Trainingskontext",
          "Wearable-Daten plus subjektives Feedback",
          "Kalenderverfügbarkeit als zusätzlicher Entscheidungsfaktor",
        ],
      },
      {
        title: "Für wen YOUB interessant ist",
        text: "YOUB passt für Athlet:innen, die Recovery-Daten nicht nur sehen, sondern daraus konkrete Anpassungen für Laufen, Radsport oder Triathlon ableiten wollen.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine WHOOP Coach Alternative?",
        answer:
          "YOUB kann eine Alternative sein, wenn du Recovery-Daten mit Trainingsplanung, Kalenderkontext und chat-first Coaching verbinden willst.",
      },
      {
        question: "Ersetzt YOUB WHOOP?",
        answer:
          "Nein. WHOOP kann eine Datenquelle sein. YOUB legt eine Coaching-Schicht darüber und macht Recovery-Signale für Trainingsentscheidungen nutzbar.",
      },
      {
        question: "Stoppt YOUB Training bei niedriger Recovery automatisch?",
        answer:
          "Nein. YOUB erklärt Optionen und passt Training abhängig von Ziel, Plan, Gefühl und Datenlage an.",
      },
    ],
    links: [
      { label: "WHOOP Training Coach", href: "/whoop-training-coach" },
      { label: "Triathlon Coach", href: "/triathlon-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "garmin-coaching-alternative",
    title: "Garmin Coaching Alternative für chat-first Endurance Training",
    titleDe: "Alternative zu Garmin Coaching für Ausdauertraining per Chat",
    description:
      "YOUB als Garmin Coaching Alternative: Garmin-Daten werden mit Kalender, Recovery, Feedback und sportwissenschaftlichem Chat-Coaching verbunden.",
    eyebrow: "Vergleich",
    h1: "Garmin Coaching Alternative für Athlet:innen, die Daten erklärt bekommen wollen",
    h1De: "Alternative zu Garmin Coaching für Athlet:innen, die Daten erklärt bekommen wollen",
    intro:
      "Garmin liefert starke Trainings- und Gesundheitsdaten. YOUB positioniert sich als Coaching-Schicht darüber: Deine Daten werden im Dialog in nachvollziehbare Trainingsentscheidungen übersetzt.",
    sections: [
      {
        title: "Garmin Daten als Grundlage, YOUB als Coach",
        text: "YOUB kann Garmin-Aktivitäten, Belastung, Herzfrequenz, Schlaf und Recovery-Kontext nutzen, um Training im Alltag besser zu steuern.",
        bullets: [
          "Erklärte Anpassungen statt reiner Datenansicht",
          "Google Calendar für echte Verfügbarkeit",
          "Laufen, Radsport und Triathlon im Endurance-Kontext",
        ],
      },
      {
        title: "Wann YOUB gut passt",
        text: "YOUB passt, wenn du Garmin nutzt, aber weniger Zeit mit Datenanalyse verbringen und mehr konkrete Coaching-Orientierung bekommen willst.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine Garmin Coaching Alternative?",
        answer:
          "YOUB kann eine Alternative oder Ergänzung sein, wenn du Garmin-Daten in chat-first Coaching und adaptive Trainingsentscheidungen übersetzen willst.",
      },
      {
        question: "Ersetzt YOUB Garmin Connect?",
        answer:
          "Nein. Garmin Connect bleibt die Datenquelle. YOUB nutzt diese Daten für Coaching, Erklärung und Plananpassung.",
      },
      {
        question: "Kann YOUB Garmin mit Google Calendar verbinden?",
        answer:
          "Ja. YOUB kann Trainings- und Recovery-Kontext mit Kalenderverfügbarkeit kombinieren.",
      },
    ],
    links: [
      { label: "Garmin AI Coach", href: "/garmin-ai-coach" },
      { label: "Google Calendar Training", href: "/google-calendar-training" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "menschlicher-trainer-alternative",
    title: "Menschlicher Trainer Alternative für tägliches Endurance Coaching",
    titleDe: "Alternative zum menschlichen Trainer für tägliches Ausdauercoaching",
    description:
      "YOUB als digitale Alternative oder Ergänzung zum menschlichen Trainer: chat-first Coaching, Wearable-Daten, Kalenderkontext und Sportwissenschaft.",
    eyebrow: "Vergleich",
    h1: "Menschlicher Trainer Alternative für tägliche Coaching-Entscheidungen",
    h1De: "Alternative zum menschlichen Trainer für tägliche Coaching-Entscheidungen",
    intro:
      "Ein guter menschlicher Trainer ist wertvoll. YOUB positioniert sich nicht als pauschaler Ersatz für jede Betreuung, sondern als digitaler Coach für tägliche Orientierung, Datenkontext und alltagsnahe Plananpassung.",
    sections: [
      {
        title: "Was YOUB digital verfügbar macht",
        text: "YOUB bringt Trainingsdaten, Recovery, Kalender und Feedback in einen laufenden Dialog. So bekommst du häufiger Orientierung, auch wenn kein persönlicher Coach jeden Tag verfügbar ist.",
        bullets: [
          "Proaktive Rückfragen und Erklärungen im Chat",
          "Datenbasierte Anpassungen für echte Alltagswochen",
          "Sportwissenschaftliche Entscheidungslogik statt generischer Tipps",
        ],
      },
      {
        title: "Wann ein Mensch weiterhin wichtig ist",
        text: "Bei Verletzungen, medizinischen Fragen, komplexen Spezialfällen oder Elite-Setups kann ein menschlicher Trainer oder ärztlicher Rat weiterhin sinnvoll sein.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine Alternative zum menschlichen Trainer?",
        answer:
          "YOUB kann eine digitale Alternative oder Ergänzung für tägliche Coaching-Entscheidungen sein, ersetzt aber keine medizinische Betreuung und nicht jeden individuellen Hochleistungsfall.",
      },
      {
        question: "Warum YOUB statt nur Trainingsplan?",
        answer:
          "YOUB passt Training im Dialog an Daten, Gefühl und Alltag an, statt nur einen statischen Plan abzuarbeiten.",
      },
      {
        question: "Kann YOUB Entscheidungen erklären?",
        answer:
          "Ja. YOUB soll nachvollziehbar erklären, warum eine Einheit passt, verändert oder verschoben wird.",
      },
    ],
    links: [
      { label: "So funktioniert's", href: "/how-it-works" },
      { label: "Mission", href: "/mission" },
      ...defaultLinks,
    ],
  },
  {
    type: "comparison",
    slug: "xert-alternative",
    title: "Xert Alternative für chat-first Cycling und Endurance Coaching",
    titleDe: "Alternative zu Xert für Radsport- und Ausdauercoaching",
    description:
      "YOUB als Xert Alternative für Athlet:innen, die Radsportdaten, Recovery, Kalenderkontext und Coaching im Dialog verbinden wollen.",
    eyebrow: "Vergleich",
    h1: "Xert Alternative für Radsporttraining mit Alltag, Recovery und Dialog",
    h1De: "Alternative zu Xert für Radsporttraining mit Alltag, Erholung und Dialog",
    intro:
      "Wenn du nach einer Xert Alternative suchst, geht es oft um datenbasiertes Radsporttraining. YOUB positioniert sich für Athlet:innen, die Daten nicht nur modellieren, sondern in alltagstaugliche Coaching-Entscheidungen übersetzen wollen.",
    sections: [
      {
        title: "YOUB für datenbasierten Radsport mit Kontext",
        text: "YOUB kann Leistungs-, Herzfrequenz-, Aktivitäts- und Recovery-Daten mit Kalender und Feedback kombinieren. Der Fokus liegt auf verständlichen Entscheidungen, nicht nur auf Metriken.",
        bullets: [
          "Radsportdaten im Endurance-Gesamtbild",
          "Recovery und Schlaf als Belastungskontext",
          "Chat-first Erklärungen für Anpassungen",
        ],
      },
      {
        title: "Für wen YOUB interessant ist",
        text: "YOUB passt, wenn du strukturiert Rad fährst, aber Training regelmäßig an Arbeit, Familie, Erholung oder Triathlon-Kontext anpassen musst.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB eine Xert Alternative?",
        answer:
          "YOUB kann eine Alternative sein, wenn du Radsportdaten mit chat-first Coaching, Recovery und Kalenderkontext verbinden willst.",
      },
      {
        question: "Ist YOUB nur für Radsport?",
        answer:
          "Nein. YOUB unterstützt Laufen, Radsport und Triathlon.",
      },
      {
        question: "Kann YOUB Leistungsdaten einordnen?",
        answer:
          "Ja. YOUB kann Leistungs- und Herzfrequenzdaten im Kontext von Erholung, Training und Alltag bewerten.",
      },
    ],
    links: [
      { label: "Cycling Coach", href: "/cycling-coach" },
      { label: "Strava AI Coach", href: "/strava-ai-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "sport",
    slug: "triathlon-coach",
    title: "AI Triathlon Coach für Training im echten Leben",
    titleDe: "KI-Triathlon-Coach für Training im echten Leben",
    description:
      "YOUB hilft Triathlet:innen, Lauf-, Rad-, Recovery- und Kalenderdaten in adaptive Trainingsentscheidungen zu übersetzen.",
    eyebrow: "Triathlon Coaching",
    eyebrowDe: "Triathlon-Coaching",
    h1: "AI Triathlon Coach für ambitionierte Age-Grouper",
    h1De: "KI-Triathlon-Coach für ambitionierte Age-Grouper",
    intro:
      "Triathlon ist komplex: mehrere Sportarten, viel Belastung, wenig Zeit. YOUB hilft dir, Training über Dialog, Daten und Kalenderkontext besser zu steuern.",
    sections: [
      {
        title: "Was YOUB für Triathlet:innen analysiert",
        text: "YOUB ordnet Lauf- und Radeinheiten, Recovery, Schlaf, Herzfrequenz, Leistung, Feedback und Kalenderverfügbarkeit in einen gemeinsamen Coaching-Kontext ein.",
        bullets: [
          "Belastung über mehrere Sportarten hinweg",
          "Recovery und Schlaf als Entscheidungsgrundlage",
          "Alltag und verfügbare Zeit statt Idealwoche",
        ],
      },
      {
        title: "Training, das sich anpasst",
        text: "Wenn Arbeit, Familie oder Erholung gegen die geplante Einheit sprechen, hilft YOUB beim Verschieben, Reduzieren oder Ersetzen der Einheit.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB ein AI Triathlon Coach?",
        answer:
          "Ja. YOUB ist für Triathlet:innen konzipiert, die datenbasiert und alltagstauglich trainieren wollen.",
      },
      {
        question: "Kann YOUB mehrere Sportarten zusammen bewerten?",
        answer:
          "Ja. YOUB betrachtet Endurance Training über Laufen, Radsport und Triathlon-Kontext hinweg.",
      },
      {
        question: "Ist YOUB für Einsteiger:innen gedacht?",
        answer:
          "YOUB passt am besten für Athlet:innen, die bereits strukturiert trainieren und Wearable-Daten nutzen.",
      },
    ],
    links: [
      { label: "Ironman Training App", href: "/ironman-training-app" },
      { label: "TriDot Alternative", href: "/tridot-alternative" },
      ...defaultLinks,
    ],
  },
  {
    type: "sport",
    slug: "running-coach",
    title: "AI Running Coach, der sich deinem Leben anpasst",
    titleDe: "KI-Laufcoach, der sich deinem Leben anpasst",
    description:
      "YOUB verbindet Laufdaten, Recovery, Schlaf und Kalenderkontext zu chat-first Coaching für ambitionierte Läufer:innen.",
    eyebrow: "Running Coaching",
    eyebrowDe: "Laufcoaching",
    h1: "AI Running Coach für Läufer:innen mit ambitionierten Zielen",
    h1De: "KI-Laufcoach für Läufer:innen mit ambitionierten Zielen",
    intro:
      "YOUB hilft dir, Lauftraining nicht nur zu absolvieren, sondern im Kontext deines Körpers und Alltags zu verstehen. Der Coach spricht mit dir, statt dich allein mit Daten zu lassen.",
    sections: [
      {
        title: "Welche Laufdaten YOUB einordnet",
        text: "YOUB kann Pace, Herzfrequenz, Dauer, Distanz, Intensität, subjektives Gefühl, Schlaf und Recovery in Trainingsentscheidungen einbeziehen.",
        bullets: [
          "Grundlageneinheiten, Intervalle und lange Läufe",
          "Belastungsverlauf und Erholungsstatus",
          "Alltagsstress und Kalenderverfügbarkeit",
        ],
      },
      {
        title: "Vom Plan zur Entscheidung",
        text: "YOUB kann dir erklären, warum heute Intervalle sinnvoll sind, warum ein lockerer Lauf besser passt oder warum ein Ruhetag langfristig Performance schützt.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB ein AI Running Coach?",
        answer:
          "Ja. YOUB unterstützt ambitionierte Läufer:innen mit datenbasiertem, dialogorientiertem Coaching.",
      },
      {
        question: "Kann YOUB Marathontraining unterstützen?",
        answer:
          "Ja. YOUB kann Laufbelastung, Recovery und Alltag in längeren Vorbereitungen berücksichtigen.",
      },
      {
        question: "Was passiert, wenn ich mich müde fühle?",
        answer:
          "YOUB kann dein Feedback mit Daten abgleichen und eine passende Anpassung vorschlagen.",
      },
    ],
    links: [
      { label: "Garmin AI Coach", href: "/garmin-ai-coach" },
      { label: "WHOOP Training Coach", href: "/whoop-training-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "sport",
    slug: "cycling-coach",
    title: "AI Cycling Coach für adaptive Radsport-Trainingsplanung",
    titleDe: "KI-Radsport-Coach für adaptive Trainingsplanung",
    description:
      "YOUB hilft Radfahrer:innen, Leistung, Herzfrequenz, Recovery und Kalenderdaten in bessere Trainingsentscheidungen zu übersetzen.",
    eyebrow: "Cycling Coaching",
    eyebrowDe: "Radsport-Coaching",
    h1: "AI Cycling Coach für Radsporttraining mit Kontext",
    h1De: "KI-Radsport-Coach für Radsporttraining mit Kontext",
    intro:
      "Radsportdaten sind wertvoll, aber ohne Kontext schwer zu interpretieren. YOUB verbindet Trainingsleistung, Recovery, Feedback und Alltag zu Coaching im Dialog.",
    sections: [
      {
        title: "Was YOUB für Radfahrer:innen nutzt",
        text: "YOUB kann Fahrten, Dauer, Distanz, Höhenmeter, Herzfrequenz, Leistung, Intensität und Recovery-Signale in Trainingsentscheidungen einordnen.",
        bullets: [
          "Strukturierte Einheiten und lange Ausfahrten",
          "Belastung im Verhältnis zur Erholung",
          "Kalenderkontext für realistische Wochenplanung",
        ],
      },
      {
        title: "Mehr als Wattwerte",
        text: "300 Watt bedeuten nach gutem Schlaf etwas anderes als nach einem vollen Arbeitstag. YOUB hilft, Zahlen im richtigen Kontext zu lesen.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Ist YOUB ein AI Cycling Coach?",
        answer:
          "Ja. YOUB unterstützt Radfahrer:innen mit adaptivem Coaching auf Basis von Trainings-, Recovery- und Kalenderdaten.",
      },
      {
        question: "Kann YOUB Leistung und Herzfrequenz einordnen?",
        answer:
          "Ja. YOUB kann Leistungs- und Herzfrequenzdaten zusammen mit Erholung und Feedback betrachten.",
      },
      {
        question: "Ist YOUB nur für Rennrad geeignet?",
        answer:
          "YOUB ist für Endurance-orientiertes Radsporttraining ausgelegt, unabhängig davon, ob dein Fokus Straße, Gravel oder Triathlon ist.",
      },
    ],
    links: [
      { label: "Join Cycling Alternative", href: "/join-cycling-alternative" },
      { label: "Strava AI Coach", href: "/strava-ai-coach" },
      ...defaultLinks,
    ],
  },
  {
    type: "sport",
    slug: "ironman-training-app",
    title: "Ironman Training App für ambitionierte Amateur-Triathlet:innen",
    titleDe: "Ironman-Trainingsapp für ambitionierte Amateur-Triathlet:innen",
    description:
      "YOUB hilft bei Ironman Vorbereitung mit adaptivem Coaching, Wearable-Daten, Recovery und Kalenderkontext.",
    eyebrow: "Ironman Vorbereitung",
    h1: "Ironman Training App für Vorbereitung, die in dein Leben passt",
    h1De: "Ironman-Trainingsapp für Vorbereitung, die in dein Leben passt",
    intro:
      "Ironman Training ist ein Langzeitprojekt. YOUB hilft dir, Belastung, Erholung und Alltag über Monate hinweg besser auszubalancieren.",
    sections: [
      {
        title: "Warum Ironman Training Kontext braucht",
        text: "Lange Vorbereitungen bestehen aus vielen kleinen Entscheidungen. YOUB hilft, harte Einheiten, Umfang, Ruhetage und Verschiebungen nicht isoliert, sondern im Gesamtbild zu bewerten.",
        bullets: [
          "Trainingshistorie und aktuelle Belastung",
          "Schlaf, Recovery und subjektives Gefühl",
          "Kalenderverfügbarkeit für realistische Wochen",
        ],
      },
      {
        title: "Für ambitionierte Age-Grouper",
        text: "YOUB richtet sich an Athlet:innen, die Leistung ernst nehmen, aber keine Profiwoche leben. Der Coach passt Training an deinen echten Alltag an.",
      },
      chatFirstSection,
      integrationTrustSection,
    ],
    faqs: [
      {
        question: "Kann YOUB Ironman Training unterstützen?",
        answer:
          "Ja. YOUB ist für ambitionierte Triathlet:innen geeignet, die lange Vorbereitungen datenbasiert und alltagstauglich steuern wollen.",
      },
      {
        question: "Hilft YOUB bei begrenzter Trainingszeit?",
        answer:
          "Ja. YOUB nutzt Kalenderkontext und Recovery-Signale, um Training realistischer zu planen.",
      },
      {
        question: "Kann YOUB Überlastung in der Ironman Vorbereitung vermeiden?",
        answer:
          "YOUB ist darauf ausgelegt, Warnsignale früh sichtbar zu machen und Anpassungen vorzuschlagen.",
      },
    ],
    links: [
      { label: "Triathlon Coach", href: "/triathlon-coach" },
      { label: "Google Calendar Training", href: "/google-calendar-training" },
      ...defaultLinks,
    ],
  },
];

export const getGeoPages = () => geoPages;

export const getGeoPageBySlug = (slug: string) =>
  geoPages.find((page) => page.slug === slug);
