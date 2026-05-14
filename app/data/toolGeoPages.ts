import type { FaqItem } from "~/utils/geoSchema";

export type ToolKey = "pace" | "chainLength" | "gearRatio";

export type ToolRelatedLink = {
  label: string;
  href: string;
};

export type ToolGeoSection = {
  title: string;
  text: string;
  bullets?: string[];
};

export type LocalizedToolGeoCopy = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  toolTitle: string;
  toolDescription: string;
  quickFactsTitle: string;
  quickFacts: string[];
  sections: ToolGeoSection[];
  faqs: FaqItem[];
  relatedTitle: string;
  relatedLinks: ToolRelatedLink[];
};

export type ToolGeoPage = {
  slug: string;
  path: string;
  toolKey: ToolKey;
  icon: string;
  schemaName: string;
  schemaDescription: string;
  copy: {
    de: LocalizedToolGeoCopy;
    en: LocalizedToolGeoCopy;
  };
};

const defaultGermanLinks: ToolRelatedLink[] = [
  { label: "Alle kostenlosen Tools", href: "/tools" },
  { label: "Radsport-Coach", href: "/cycling-coach" },
  { label: "Laufcoach", href: "/running-coach" },
  { label: "Triathlon-Coach", href: "/triathlon-coach" },
];

const defaultEnglishLinks: ToolRelatedLink[] = [
  { label: "All free tools", href: "/tools" },
  { label: "Cycling coach", href: "/cycling-coach" },
  { label: "Running coach", href: "/running-coach" },
  { label: "Triathlon coach", href: "/triathlon-coach" },
];

const toolGeoPages: ToolGeoPage[] = [
  {
    slug: "pace-converter",
    path: "/tools/pace-converter",
    toolKey: "pace",
    icon: "ph:timer-bold",
    schemaName: "YOUB Pace Converter",
    schemaDescription:
      "Free pace and speed converter for runners, cyclists, and triathletes.",
    copy: {
      de: {
        seoTitle: "Pace Rechner kostenlos: min/km, min/mi, km/h und mph umrechnen - YOUB",
        seoDescription:
          "Kostenloser Pace Rechner von YOUB: rechne min/km, min/mi, km/h und mph direkt um und interpretiere deine Trainingsgeschwindigkeit besser.",
        eyebrow: "Kostenloser Pace Rechner",
        h1: "Pace Rechner für min/km, min/mi, km/h und mph",
        intro:
          "Der YOUB Pace Rechner wandelt Laufpace und Geschwindigkeit sofort ineinander um. Gib einen Wert ein und sieh direkt, welche Pace pro Kilometer, Pace pro Meile und Geschwindigkeit dazu passt.",
        toolTitle: "Pace & Speed Rechner",
        toolDescription:
          "Konvertiere zwischen Pace und Geschwindigkeit ohne Anmeldung.",
        quickFactsTitle: "Kurzantwort",
        quickFacts: [
          "Berechnet min/km, min/mi, km/h und mph aus einem Eingabewert.",
          "Geeignet für Lauftraining, Radtraining, Triathlon und Wettkampfplanung.",
          "Hilft, Trainingsbereiche und Zielzeiten schneller einzuordnen.",
        ],
        sections: [
          {
            title: "Was der Pace Rechner macht",
            text: "Das Tool übersetzt eine einzelne Eingabe in die gebräuchlichsten Pace- und Speed-Einheiten. So kannst du zum Beispiel eine Laufpace in km/h umrechnen oder eine Geschwindigkeit aus dem Radtraining mit Laufwerten vergleichen.",
            bullets: [
              "Pace pro Kilometer in Geschwindigkeit umrechnen",
              "Pace pro Meile für englischsprachige Trainingspläne prüfen",
              "km/h und mph für Laufband, Radcomputer oder Smarttrainer vergleichen",
            ],
          },
          {
            title: "Wie du den Wert im Training nutzt",
            text: "Pace ist nur dann hilfreich, wenn sie in den Trainingskontext passt. Nutze den Rechner für Zielpace, Intervallvorgaben und schnelle Plausibilitätschecks, aber bewerte harte Einheiten immer zusammen mit Herzfrequenz, Gefühl, Strecke und Erholung.",
          },
          {
            title: "Grenzen einer reinen Pace-Umrechnung",
            text: "Eine Pace-Umrechnung ersetzt keine Trainingsentscheidung. Wind, Höhenmeter, Untergrund, Hitze, Müdigkeit und Vorbelastung können dieselbe Pace deutlich leichter oder schwerer machen. YOUB nutzt solche Kontextsignale im Coaching, statt nur Zahlen zu vergleichen.",
          },
        ],
        faqs: [
          {
            question: "Wie rechne ich min/km in km/h um?",
            answer:
              "Teile 60 durch die Pace in Minuten pro Kilometer. Eine Pace von 5:00 min/km entspricht 12,0 km/h.",
          },
          {
            question: "Kann ich den Rechner für Marathonpace nutzen?",
            answer:
              "Ja. Du kannst deine Zielpace eingeben und die passende Geschwindigkeit sehen. Für eine Marathonentscheidung solltest du zusätzlich Trainingshistorie, Ermüdung und Strecke berücksichtigen.",
          },
          {
            question: "Ist Pace oder Herzfrequenz wichtiger?",
            answer:
              "Beides beantwortet unterschiedliche Fragen. Pace beschreibt das äußere Tempo, Herzfrequenz zeigt einen Teil der inneren Belastung. Im Coaching sollten beide Signale zusammen bewertet werden.",
          },
        ],
        relatedTitle: "Weitere Seiten für dein Training",
        relatedLinks: defaultGermanLinks,
      },
      en: {
        seoTitle: "Free Pace Calculator: convert min/km, min/mi, km/h and mph - YOUB",
        seoDescription:
          "Use the free YOUB pace calculator to convert min/km, min/mi, km/h and mph for running, cycling and triathlon training.",
        eyebrow: "Free pace calculator",
        h1: "Pace calculator for min/km, min/mi, km/h and mph",
        intro:
          "The YOUB pace calculator converts pace and speed instantly. Enter one value and get pace per kilometer, pace per mile, kilometers per hour and miles per hour.",
        toolTitle: "Pace & speed converter",
        toolDescription:
          "Convert between pace and speed without signing up.",
        quickFactsTitle: "Quick answer",
        quickFacts: [
          "Calculates min/km, min/mi, km/h and mph from one input.",
          "Useful for running, cycling, triathlon and race planning.",
          "Helps interpret training zones and target speeds faster.",
        ],
        sections: [
          {
            title: "What the pace calculator does",
            text: "The tool translates one input into the most common pace and speed units. You can convert running pace into speed or compare treadmill, bike computer and training plan values.",
            bullets: [
              "Convert pace per kilometer into speed",
              "Check pace per mile for English training plans",
              "Compare km/h and mph across devices",
            ],
          },
          {
            title: "How to use the result in training",
            text: "Pace is useful only when it fits the training context. Use the calculator for target pace, interval planning and quick checks, but judge demanding sessions together with heart rate, perceived effort, terrain and recovery.",
          },
          {
            title: "Limits of a pace conversion",
            text: "A pace conversion is not a coaching decision. Wind, elevation, surface, heat, fatigue and previous training can make the same pace feel very different. YOUB uses these context signals in coaching instead of comparing numbers in isolation.",
          },
        ],
        faqs: [
          {
            question: "How do I convert min/km to km/h?",
            answer:
              "Divide 60 by the pace in minutes per kilometer. A pace of 5:00 min/km equals 12.0 km/h.",
          },
          {
            question: "Can I use this calculator for marathon pace?",
            answer:
              "Yes. Enter your target pace to see the matching speed. For marathon pacing, also consider training history, fatigue and course profile.",
          },
          {
            question: "Is pace or heart rate more important?",
            answer:
              "They answer different questions. Pace shows external speed, while heart rate reflects part of the internal load. Coaching should evaluate both together.",
          },
        ],
        relatedTitle: "More pages for your training",
        relatedLinks: defaultEnglishLinks,
      },
    },
  },
  {
    slug: "chain-length-calculator",
    path: "/tools/chain-length-calculator",
    toolKey: "chainLength",
    icon: "ph:link-bold",
    schemaName: "YOUB Chain Length Calculator",
    schemaDescription:
      "Free bicycle chain length calculator for road, gravel, and triathlon bikes.",
    copy: {
      de: {
        seoTitle: "Kettenlänge Rechner kostenlos für Rennrad, Gravel und Triathlon - YOUB",
        seoDescription:
          "Berechne deine Fahrrad-Kettenlänge kostenlos: ATH in Millimetern, Zähne vorne, Zähne hinten und Schaltrollen eingeben und passende Kettenglieder erhalten.",
        eyebrow: "Kostenloser Kettenlänge Rechner",
        h1: "Kettenlänge Rechner für Fahrrad, Rennrad und Gravel",
        intro:
          "Der YOUB Kettenlänge Rechner schätzt die passende Kettenlänge anhand von ATH, größtem Kettenblatt, größtem Ritzel und Schaltrollen. So bekommst du schnell einen Richtwert für die Anzahl der Kettenglieder.",
        toolTitle: "Kettenlänge Rechner",
        toolDescription:
          "Berechne Kettenglieder und Gesamtlänge für dein Setup.",
        quickFactsTitle: "Kurzantwort",
        quickFacts: [
          "Nutzt ATH in Millimetern, größtes Kettenblatt, größtes Ritzel und Schaltrollen.",
          "Gibt Kettenglieder sowie Länge in Zoll und Zentimetern aus.",
          "Geeignet als Richtwert vor Montage, Wartung oder Setup-Wechsel.",
        ],
        sections: [
          {
            title: "Welche Eingaben wichtig sind",
            text: "Für eine praxisnahe Schätzung braucht der Rechner den Abstand zwischen Mittelachse Tretlager und Hinterrad, die größten Zahnzahlen vorne und hinten sowie die Schaltrollen. Diese Kombination bildet den längsten Kettenweg ab und ist deshalb entscheidend für die Mindestlänge.",
            bullets: [
              "ATH in Millimetern, Zentimetern oder Zoll",
              "Zähne des größten Kettenblatts",
              "Zähne des größten Ritzels oder der größten Kassette",
              "Zähne je Schaltrolle bei zwei gleich großen Schaltrollen",
            ],
          },
          {
            title: "Wie du das Ergebnis interpretierst",
            text: "Das Ergebnis ist ein rechnerischer Startpunkt. Bei modernen Schaltwerken, Full-Suspension-Bikes, großen Kassetten oder Hersteller-Spezifikationen solltest du das Ergebnis mit der jeweiligen Montageanleitung abgleichen.",
          },
          {
            title: "Warum die richtige Kettenlänge wichtig ist",
            text: "Eine zu kurze Kette kann Schaltwerk, Rahmen oder Antrieb beschädigen. Eine zu lange Kette verschlechtert Schaltpräzision und Kettenspannung. Der Rechner hilft, vor dem Kürzen eine nachvollziehbare Basis zu haben.",
          },
        ],
        faqs: [
          {
            question: "Welche Methode nutzt der Kettenlänge Rechner?",
            answer:
              "Der Rechner nutzt ATH sowie die Zahnzahlen von größtem Kettenblatt, größtem Ritzel und den beiden Schaltrollen, um eine passende Kettenlänge zu schätzen.",
          },
          {
            question: "Kann ich das Ergebnis direkt zum Kürzen der Kette nutzen?",
            answer:
              "Ja, als Richtwert. Prüfe bei der Montage trotzdem die Vorgaben deines Schaltwerks, Rahmenherstellers und Antriebsherstellers.",
          },
          {
            question: "Funktioniert der Rechner für 1x und 2x Antriebe?",
            answer:
              "Ja. Entscheidend ist jeweils die größte genutzte Zahnkombination vorne und hinten.",
          },
        ],
        relatedTitle: "Weitere Seiten für Radtraining und Setup",
        relatedLinks: [
          { label: "Übersetzung & Speed Rechner", href: "/tools/gear-ratio-calculator" },
          ...defaultGermanLinks,
        ],
      },
      en: {
        seoTitle: "Free chain length calculator for road, gravel and triathlon bikes - YOUB",
        seoDescription:
          "Calculate bicycle chain length for free: enter ATH in millimeters, front teeth, rear teeth and derailleur pulley teeth to estimate links and total chain length.",
        eyebrow: "Free chain length calculator",
        h1: "Chain length calculator for bikes, road and gravel",
        intro:
          "The YOUB chain length calculator estimates chain length from ATH, largest chainring, largest rear cog and derailleur pulleys. It gives you a quick starting point for the number of chain links.",
        toolTitle: "Chain length calculator",
        toolDescription:
          "Calculate chain links and total length for your setup.",
        quickFactsTitle: "Quick answer",
        quickFacts: [
          "Uses ATH in millimeters, largest chainring, largest rear cog and derailleur pulleys.",
          "Returns links plus total length in inches and centimeters.",
          "Useful before installation, maintenance or drivetrain changes.",
        ],
        sections: [
          {
            title: "Which inputs matter",
            text: "For a practical estimate, the calculator needs the distance between bottom bracket center and rear axle, the largest tooth counts in front and rear, and the derailleur pulleys. That combination creates the longest chain path and is therefore key for minimum length.",
            bullets: [
              "ATH in millimeters, centimeters or inches",
              "Teeth on the largest chainring",
              "Teeth on the largest cog or cassette sprocket",
              "Teeth per pulley when both derailleur pulleys are the same size",
            ],
          },
          {
            title: "How to interpret the result",
            text: "The result is a calculated starting point. For modern derailleurs, full-suspension bikes, large cassettes or manufacturer-specific setups, compare it with the official installation guide.",
          },
          {
            title: "Why correct chain length matters",
            text: "A chain that is too short can damage the derailleur, frame or drivetrain. A chain that is too long can hurt shifting precision and chain tension. The calculator gives you a clear baseline before cutting.",
          },
        ],
        faqs: [
          {
            question: "Which method does the chain length calculator use?",
            answer:
              "It uses ATH plus the tooth counts of the largest front chainring, largest rear cog and both derailleur pulleys to estimate a suitable chain length.",
          },
          {
            question: "Can I use the result directly before cutting a chain?",
            answer:
              "Use it as a guideline. During installation, still check the requirements from your derailleur, frame and drivetrain manufacturer.",
          },
          {
            question: "Does the calculator work for 1x and 2x drivetrains?",
            answer:
              "Yes. Use the largest relevant tooth combination in front and rear.",
          },
        ],
        relatedTitle: "More pages for cycling training and setup",
        relatedLinks: [
          { label: "Gear ratio & speed calculator", href: "/tools/gear-ratio-calculator" },
          ...defaultEnglishLinks,
        ],
      },
    },
  },
  {
    slug: "gear-ratio-calculator",
    path: "/tools/gear-ratio-calculator",
    toolKey: "gearRatio",
    icon: "ph:bicycle-bold",
    schemaName: "YOUB Gear Ratio Calculator",
    schemaDescription:
      "Free bicycle gear ratio and speed calculator for cadence, chainring, cog, and wheel circumference.",
    copy: {
      de: {
        seoTitle: "Übersetzung Rechner Fahrrad: Gear Ratio, Trittfrequenz und Speed - YOUB",
        seoDescription:
          "Kostenloser Fahrrad-Übersetzung Rechner: berechne Gear Ratio, Gear Inches und Geschwindigkeit aus Kettenblatt, Ritzel, Trittfrequenz und Radumfang.",
        eyebrow: "Kostenloser Übersetzung Rechner",
        h1: "Fahrrad Übersetzung Rechner für Gear Ratio und Speed",
        intro:
          "Der YOUB Übersetzung Rechner zeigt, welche Geschwindigkeit aus Kettenblatt, Ritzel, Trittfrequenz und Radumfang entsteht. So kannst du Setups für Rennrad, Gravel, Zeitfahren und Triathlon besser vergleichen.",
        toolTitle: "Übersetzung & Speed Rechner",
        toolDescription:
          "Berechne Gear Ratio, Gear Inches und Geschwindigkeit.",
        quickFactsTitle: "Kurzantwort",
        quickFacts: [
          "Berechnet Übersetzung, Gear Inches, km/h und mph.",
          "Verbindet Zahnzahlen, Trittfrequenz und Radumfang.",
          "Hilft bei Setup-Vergleich, Kadenzplanung und Wettkampfvorbereitung.",
        ],
        sections: [
          {
            title: "Was Gear Ratio bedeutet",
            text: "Die Übersetzung beschreibt das Verhältnis von Kettenblatt zu Ritzel. Ein größeres Verhältnis bewegt das Rad pro Kurbelumdrehung weiter, verlangt aber mehr Kraft. Ein kleineres Verhältnis erleichtert Anstiege und niedrigere Geschwindigkeiten.",
            bullets: [
              "Großes Kettenblatt und kleines Ritzel ergeben eine schwere Übersetzung",
              "Kleines Kettenblatt und großes Ritzel ergeben eine leichte Übersetzung",
              "Trittfrequenz und Radumfang bestimmen die resultierende Geschwindigkeit",
            ],
          },
          {
            title: "Wie du den Rechner im Training nutzt",
            text: "Nutze das Tool, um zu prüfen, welche Geschwindigkeit bei einer realistischen Trittfrequenz möglich ist. Das hilft bei Intervallen, Zeitfahr-Setups, Berggängen und der Frage, ob eine Kassette zu deinem Zielprofil passt.",
          },
          {
            title: "Warum Übersetzung nicht allein entscheidet",
            text: "Die perfekte Übersetzung hängt von Leistung, Aerodynamik, Strecke, Wind, Ermüdung und Technik ab. Der Rechner liefert die mechanische Grundlage. YOUB bewertet im Coaching zusätzlich Trainingsdaten und Kontext.",
          },
        ],
        faqs: [
          {
            question: "Wie berechne ich die Fahrrad-Übersetzung?",
            answer:
              "Teile die Zähne des Kettenblatts durch die Zähne des Ritzels. 52 vorne und 11 hinten ergeben eine Übersetzung von 4,73.",
          },
          {
            question: "Was sind Gear Inches?",
            answer:
              "Gear Inches verbinden Übersetzung und Radgröße. Der Wert beschreibt, wie schwer oder leicht ein Gang im Vergleich zu anderen Setups wirkt.",
          },
          {
            question: "Welche Trittfrequenz sollte ich eingeben?",
            answer:
              "Nutze eine realistische Kadenz für deinen Einsatz. Für viele Ausdauerfahrten liegen typische Werte grob zwischen 80 und 95 RPM, individuell kann das deutlich abweichen.",
          },
        ],
        relatedTitle: "Weitere Seiten für Radtraining und Setup",
        relatedLinks: [
          { label: "Kettenlänge Rechner", href: "/tools/chain-length-calculator" },
          ...defaultGermanLinks,
        ],
      },
      en: {
        seoTitle: "Bike gear ratio calculator: cadence, speed and gear inches - YOUB",
        seoDescription:
          "Free bike gear ratio calculator: calculate gear ratio, gear inches and speed from chainring, cog, cadence and wheel circumference.",
        eyebrow: "Free gear ratio calculator",
        h1: "Bike gear ratio calculator for speed and cadence",
        intro:
          "The YOUB gear ratio calculator shows which speed results from chainring, cog, cadence and wheel circumference. Use it to compare road, gravel, time trial and triathlon setups.",
        toolTitle: "Gear ratio & speed calculator",
        toolDescription:
          "Calculate gear ratio, gear inches and speed.",
        quickFactsTitle: "Quick answer",
        quickFacts: [
          "Calculates gear ratio, gear inches, km/h and mph.",
          "Connects tooth counts, cadence and wheel circumference.",
          "Helps compare setups, cadence targets and race gearing.",
        ],
        sections: [
          {
            title: "What gear ratio means",
            text: "Gear ratio describes the relationship between chainring and rear cog. A larger ratio moves the bike farther per crank revolution but requires more force. A smaller ratio helps on climbs and lower speeds.",
            bullets: [
              "Large chainring and small cog create a harder gear",
              "Small chainring and large cog create an easier gear",
              "Cadence and wheel circumference determine resulting speed",
            ],
          },
          {
            title: "How to use the calculator in training",
            text: "Use the tool to check which speed is possible at a realistic cadence. It helps with intervals, time trial setups, climbing gears and deciding whether a cassette fits your target course.",
          },
          {
            title: "Why gearing is only one part of the decision",
            text: "The perfect gear depends on power, aerodynamics, route, wind, fatigue and technique. The calculator gives the mechanical baseline. YOUB adds training data and context in coaching.",
          },
        ],
        faqs: [
          {
            question: "How do I calculate bike gear ratio?",
            answer:
              "Divide chainring teeth by rear cog teeth. A 52 tooth chainring and 11 tooth cog create a gear ratio of 4.73.",
          },
          {
            question: "What are gear inches?",
            answer:
              "Gear inches combine gear ratio and wheel size. The value helps compare how hard or easy a gear feels across setups.",
          },
          {
            question: "Which cadence should I enter?",
            answer:
              "Use a realistic cadence for your use case. Many endurance rides sit roughly between 80 and 95 RPM, but individual values can differ.",
          },
        ],
        relatedTitle: "More pages for cycling training and setup",
        relatedLinks: [
          { label: "Chain length calculator", href: "/tools/chain-length-calculator" },
          ...defaultEnglishLinks,
        ],
      },
    },
  },
];

export const getToolGeoPages = () => toolGeoPages;

export const getToolGeoPageBySlug = (slug: string) =>
  toolGeoPages.find((page) => page.slug === slug);
