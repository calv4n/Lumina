export const meta = {
  title: "Lumina – Websites für Schweizer KMU. Gratis-Demo sichern",
  description:
    "Deine Kunden googeln. Finden sie dich? Lumina baut dir die Startseite deiner neuen Website gratis als Vorschau. Websites für Schweizer KMU ab CHF 119/Mt.",
  imageAlt:
    "Lumina – Deine Kunden suchen dich. Finden andere. Gratis-Demo deiner neuen Startseite.",
};

export const nav = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#preise", label: "Preise" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#faq", label: "FAQ" },
];

export const hero = {
  sub: "Wir bauen dir die Startseite deiner neuen Website. Gratis, als Vorschau. Gefällt sie dir nicht, kostet dich das keinen Franken.",
  primary: "Gratis-Demo sichern",
  secondary: "Preise ansehen",
  badges: ["Gratis-Demo", "Keine Verpflichtung", "Schweizer KMU"],
};

export const introWords: { text: string; accent?: boolean }[] = [
  { text: "Deine" },
  { text: "Kunden" },
  { text: "googeln," },
  { text: "bevor" },
  { text: "sie" },
  { text: "anrufen." },
  { text: "Wer" },
  { text: "dort" },
  { text: "nicht" },
  { text: "auftaucht" },
  { text: "oder" },
  { text: "auf" },
  { text: "dem" },
  { text: "Handy" },
  { text: "auseinanderfällt," },
  { text: "wird" },
  { text: "übersprungen.", accent: true },
  { text: "Niemand" },
  { text: "sagt" },
  { text: "es" },
  { text: "dir." },
  { text: "Sie" },
  { text: "gehen" },
  { text: "einfach" },
  { text: "zu" },
  { text: "den" },
  { text: "anderen." },
  { text: "Lumina" },
  { text: "baut" },
  { text: "Websites" },
  { text: "für" },
  { text: "Schweizer" },
  { text: "KMU," },
  { text: "die" },
  { text: "gefunden", accent: true },
  { text: "werden" },
  { text: "und" },
  { text: "Anfragen" },
  { text: "bringen." },
  { text: "Den" },
  { text: "ersten" },
  { text: "Schritt" },
  { text: "machen" },
  { text: "wir." },
  { text: "Gratis." },
];

export const logoPlaceholder =
  "[PLATZHALTER: Kundenlogos, erst wenn echte Kunden live sind und der Logo-Nutzung schriftlich zugestimmt haben]";

export const process = {
  title: "So läuft's.",
  steps: [
    {
      badge: "Schritt 1",
      title: "Demo anfordern",
      tone: "paper" as const,
      body: "Firmenname, Branche, deine heutige Website, falls vorhanden. Zwei Minuten, mehr brauchen wir nicht. Keine Kreditkarte, kein Vertrag. Was es danach kostet, siehst du schon jetzt bei den [Preisen](#preise).",
    },
    {
      badge: "Schritt 2",
      title: "Wir bauen deine Startseite",
      tone: "ink" as const,
      body: "Mit deinem Namen, deinen Leistungen, deinem Stil. Keine Moodboards, kein Agentur-Blabla. Du bekommst einen privaten Vorschau-Link, nur für dich, und zwar ==schnell==. [ZU BESTÄTIGEN: «innert X Werktagen»]",
    },
    {
      badge: "Schritt 3",
      title: "Du entscheidest",
      tone: "ink" as const,
      body: "Kurzer Call von 15 Minuten, wir zeigen dir die Demo. Passt sie, geht sie mit einem Paket live. Passt sie nicht, löschen wir sie. Ohne Rechnung, ohne Nachfassen.",
    },
    {
      badge: "Schritt 4",
      title: "Live und betreut",
      tone: "ink" as const,
      tall: true,
      body: "Wir bauen die ganze Website, schalten sie auf, hosten, sichern und pflegen sie. Du bekommst Anfragen statt Update-Meldungen. Und deine Konkurrenz bekommt ein Problem.",
    },
  ],
};

export const benefits = [
  { icon: "see" as const, text: "Erst sehen, dann entscheiden" },
  { icon: "pay" as const, text: "Fixe Preise in CHF" },
  { icon: "domain" as const, text: "Deine Domain gehört immer ==dir==" },
  { icon: "help" as const, text: "Keine Ausreden mehr. [Lies die FAQ](#faq)" },
];

export const services = {
  title: "Leistungen",
  sub: "Alles, was deine Website braucht, damit sie Kunden bringt. Nicht nur gut aussieht.",
  toolsNote:
    "[ZU BESTÄTIGEN: Liste der Tools, z. B. bexio, Google, Next.js, Vercel]",
  items: [
    {
      title: "Webdesign, das verkauft",
      body: "Modern, schnell und auf dem Handy perfekt. Jede Seite ist darauf gebaut, dass Besucher anrufen, schreiben oder buchen. Nicht für einen Design-Award, sondern für deinen Umsatz. Ohne Baukasten-Look, den deine Kunden schon zehnmal gesehen haben.",
    },
    {
      title: "Hosting und Wartung inklusive",
      body: "Hosting in der Schweiz oder EU, SSL, Updates, Sicherheits-Monitoring und Backups sind im Monatspreis drin. Änderungszeit auch. Du rufst an oder schreibst, wir passen an. Keine Überraschungsrechnung, kein Plugin-Chaos, kein «das müsste mal jemand machen».",
    },
    {
      title: "Gefunden werden auf Google",
      body: "SEO-Grundlagen auf jeder Seite, Sitemap, Google Search Console und eine Besucherstatistik ohne Cookies. Dazu auf Wunsch die Pflege deines Google-Profils: zwei Beiträge im Monat und Antworten auf Bewertungen. Wer nicht gefunden wird, wird nicht angerufen.",
    },
    {
      title: "==KI-Chatbot== rund um die Uhr",
      body: "Dein Chatbot beantwortet Fragen und erfasst Anfragen, auch um 23 Uhr und am Sonntag. Du liest morgens, wer etwas wollte. Als Add-on zu jedem Paket: CHF 690 einmalig plus CHF 99 pro Monat.",
    },
    {
      title: "Automationen, die dir Zeit geben",
      body: "Formularanfragen landen direkt in deinem CRM, in bexio oder in Google Sheets. Auto-Antworten, Follow-ups und Bewertungsanfragen laufen von allein. Ab CHF 390 einmalig. Du tippst Offerten noch von Hand? Musst du nicht mehr.",
    },
    {
      title: "Termine, Shop und mehr Sprachen",
      body: "Online-Terminbuchung mit Bestätigungsmail, Shop- oder Buchungsanbindung und zusätzliche Sprachen wie Französisch oder Englisch. Einzeln dazubuchbar oder im Paket Signature inklusive. Damit deine Kunden dann buchen, wann es ihnen passt.",
    },
  ],
};

export const audiences = {
  title: "Für wen ist Lumina?",
  sub: "Für KMU, die keine Lust mehr haben, Kunden an andere zu verlieren.",
  cards: [
    {
      tone: "paper" as const,
      name: "Noch ohne Website",
      offer: "Lumina Spark",
      body: "Coiffeur, Handwerk, Café, Praxis. Wer heute nicht online ist, existiert für viele Kunden nicht. Ein Onepager mit allem, was zählt: Leistungen, Öffnungszeiten, Karte, Kontakt. Die digitale Visitenkarte, die nicht peinlich ist.",
    },
    {
      tone: "yellow" as const,
      name: "Website von gestern",
      offer: "Lumina Business",
      body: "Deine Seite ist veraltet, langsam oder auf dem Handy unlesbar? Dann arbeitet sie gerade für deine Konkurrenz. Wir bauen dir 5 bis 8 Seiten mit CMS, die bei Google gefunden werden und Anfragen bringen.",
    },
    {
      tone: "ink" as const,
      name: "Gross und mehrsprachig",
      offer: "Lumina Signature",
      body: "Mehrere Standorte, Kundschaft auf Deutsch, Französisch und Englisch, Online-Buchung oder Shop. Für grössere KMU, Hotels und Praxen, die einen Auftritt brauchen, der ihrem Anspruch entspricht. Individuell geplant, nach Offerte.",
    },
  ],
};

export const whyFree = {
  title: "Keine Fake-Bewertungen.",
  sub: "Lumina ist neu. Darum erzählen wir nicht, wir zeigen. Deine Demo ist unser Beweis.",
  foot: "Häufige Fragen von KMU",
  cards: [
    {
      tone: "ink" as const,
      q: "Warum baut ihr mir das gratis?",
      a: "Weil zeigen besser überzeugt als reden.",
    },
    {
      tone: "yellow" as const,
      q: "Und wenn mir die Demo nicht gefällt?",
      a: "Dann löschen wir sie. Fertig.",
    },
    {
      tone: "ink" as const,
      q: "Wo ist der Haken?",
      a: "Es gibt keinen. Das Risiko liegt bei uns.",
    },
  ],
};

export const pricing = {
  title: "Klare Preise.",
  sub: "Einmalige Einrichtung plus fixer Monatspreis. Hosting, Wartung und Änderungen sind immer drin. Kein ==Kleingedrucktes.==",
  plans: [
    {
      tone: "ink" as const,
      name: "Lumina Spark · Onepager",
      price: "CHF 119",
      period: "pro Monat · + CHF 690 Einrichtung",
      foot: "Live in 1 bis 2 Wochen nach Auftrag",
      bullets: [
        "Onepager mit bis zu 6 Sektionen",
        "1 Entwurf, 1 Korrekturrunde",
        "Kontaktformular, Karte, Öffnungszeiten",
        "Mobil optimiert, SEO-Grundlagen",
        "Impressum und Datenschutz inklusive",
        "Hosting Schweiz/EU, SSL, Updates",
        "Wöchentliches Backup, Sicherheits-Monitoring",
        "30 Min. Änderungen pro Monat, Quartalsbericht",
      ],
    },
    {
      tone: "paper" as const,
      badge: "Empfohlen für die meisten KMU",
      name: "Lumina Business · 5 bis 8 Seiten",
      price: "CHF 249",
      period: "pro Monat · + CHF 1'490 Einrichtung",
      foot: "Live in 3 bis 5 Wochen nach Auftrag",
      bullets: [
        "Alles aus Spark, dazu:",
        "5 bis 8 Seiten, eine pro Leistung",
        "2 Entwürfe, 2 Korrekturrunden",
        "CMS für Texte, Blog und News",
        "Kontakt- und Offertformular",
        "SEO pro Seite, Search Console, Statistik ohne Cookies",
        "Tägliches Backup, Uptime-Überwachung",
        "90 Min. Änderungen pro Monat, Monatsbericht",
      ],
    },
  ],
  signature: {
    title: "Lumina Signature",
    text: "Ab CHF 3'900 Einrichtung + ab CHF 549 pro Monat. 10 bis 25 Seiten, bis 3 Sprachen, Buchung oder Shop, individuelles Design.",
  },
  terms:
    "Alle Preise in CHF, exkl. MWST. · 12 Monate Mindestlaufzeit, danach monatlich kündbar. · Die Domain gehört immer dir. · Add-ons wie KI-Chatbot (CHF 690 + 99/Mt.) oder Automationen jederzeit dazubuchbar.",
  responseNote: "[ZU BESTÄTIGEN: Antwortzeiten, dann als Bullet ergänzen]",
};

export const portfolio = {
  title: "Hier fehlt noch jemand.",
  sub: "Die ersten Plätze in unserem Portfolio sind frei. Deine Firma könnte hier stehen. Mit einer Demo, die du vorher gratis siehst.",
  cards: [
    {
      tone: "yellow" as const,
      name: "Deine Firma",
      text: "Deine neue Startseite, gebaut aus deinen Inhalten.",
      metric: "CHF 0",
      label: "für die Demo",
    },
    {
      tone: "ink" as const,
      name: "Handwerk & Bau",
      text: "Leistungen, Referenzfotos, Offertformular.",
      label: "Deine Demo?",
    },
    {
      tone: "ink" as const,
      name: "Gastro & Café",
      text: "Menü, Öffnungszeiten, Reservation auf dem Handy.",
      label: "Deine Demo?",
    },
    {
      tone: "ink" as const,
      name: "Praxis & Gesundheit",
      text: "Team, Angebote, Online-Termin.",
      label: "Deine Demo?",
    },
  ],
};

export const founder = {
  title: "Wer hinter Lumina steht.",
  sub: "Kein Callcenter, keine Weitergabe an Praktikanten. Du redest mit dem, der deine Website baut.",
  photo:
    "[PLATZHALTER: echtes Porträt von Calvin, quadratisch, Radius 32px, heller Hintergrund]",
  name: "Calvin Pfrender",
  role: "Gründer, Design und Entwicklung",
  bio: "[PLATZHALTER: 2 bis 3 Sätze von Calvin, z. B. Ausbildung/Hintergrund, Ort, warum Lumina. Keine Jahre-Erfahrung oder Projektzahlen, die nicht stimmen.]",
  optional: "[ZU BESTÄTIGEN: «Neu in [Ort]. Hungrig.»]",
  email: "contact@calvinpfrender.dev",
  linkedin: "[ZU BESTÄTIGEN: LinkedIn-URL]",
};

export const faq = {
  title: "Noch Ausreden?",
  sub: "Hier sind die Antworten. Fehlt deine Frage? [Gratis-Demo sichern](#gratis-demo) oder schreib an [contact@calvinpfrender.dev](mailto:contact@calvinpfrender.dev).",
  items: [
    {
      q: "Ist die Demo wirklich gratis?",
      a: "Ja. Keine Rechnung, keine Kreditkarte, kein Vertrag. Wir investieren ein paar Stunden in deine Startseite, weil eine gezeigte Website mehr überzeugt als jede Offerte. Gefällt sie dir, reden wir über ein Paket. Gefällt sie dir nicht, löschen wir sie. Du schuldest uns nichts, nicht einmal eine Begründung.",
    },
    {
      q: "Wo ist der Haken bei der Gratis-Demo?",
      a: "Es gibt keinen. Wir rechnen damit, dass dir die Demo gefällt, und gehen dafür das Risiko ein. Die Vorschau liegt auf einem privaten Link, den nur du bekommst. Sie wird nicht veröffentlicht und nicht bei Google gelistet. Wenn du Nein sagst, melden wir uns nicht mehr.",
    },
    {
      q: "Was passiert nach den 12 Monaten?",
      a: "Dein Abo läuft einfach weiter und ist ab dann monatlich kündbar, mit 2 Monaten Frist auf Monatsende, bei Spark reicht 1 Monat. Es gibt keine automatische Verlängerung um ein ganzes Jahr. Wenn du kündigst, bekommst du deine Inhalte gratis exportiert, und deine Domain bleibt sowieso bei dir.",
    },
    {
      q: "Gehört mir die Website?",
      a: "Die Domain gehört immer dir, deine Texte, Fotos und dein Logo auch. Code und Design sind während des Abos lizenziert, so bleibt der Einstieg günstig. Willst du die Website ganz übernehmen, geht das gegen eine Ablösesumme, die mit jedem Monat sinkt. Ab dem 37. Monat ist die Übernahme gratis.",
    },
    {
      q: "Was ist im Monatspreis alles drin?",
      a: "Hosting in der Schweiz oder EU, SSL-Zertifikat, Updates, Sicherheits-Monitoring, Backups, Änderungszeit jeden Monat und ein Bericht über Besucher und Ladezeit. Also alles, damit deine Website läuft und aktuell bleibt. Neue Seiten, ein Redesign oder mehr Änderungszeit kosten extra, immer mit Offerte vorab. Keine Überraschungsrechnungen.",
    },
    {
      q: "Ich habe schon eine Website. Lohnt sich das trotzdem?",
      a: "Gerade dann. Wir bauen die Demo auf Basis deiner heutigen Inhalte, so siehst du den Unterschied direkt nebeneinander. Ist deine Seite langsam, veraltet oder auf dem Handy schwer lesbar, merkst du es sofort. Danach entscheidest du, ob deine alte Seite weiter für die Konkurrenz arbeiten soll.",
    },
    {
      q: "Wie schnell ist meine Website live?",
      a: "Die Demo bekommst du schnell, meist in wenigen Tagen [ZU BESTÄTIGEN: «innert X Werktagen»]. Nach deinem Ja ist ein Onepager (Spark) in 1 bis 2 Wochen live, eine Business-Website in 3 bis 5 Wochen und Signature in 6 bis 10 Wochen. Wie schnell es geht, hängt auch davon ab, wie schnell du Texte und Fotos lieferst.",
    },
  ],
};

export const closing = {
  title: "Immer noch ==offline?==",
  sub: "Die anderen sind schon online. Jetzt bist du dran. Das Einzige, was du verlieren kannst, ist Zeit.",
  cta: "Gratis-Demo sichern",
};

export const demo = {
  title: "Gratis-Demo sichern",
  hint: "Gratis. Unverbindlich. Wir melden uns schnell.",
  response: "[ZU BESTÄTIGEN: Antwortzeit]",
  note: "Die Anfrage öffnet dein E-Mail-Programm an contact@calvinpfrender.dev. Es wird nichts auf einem Server gespeichert.",
  fields: {
    firma: "Firmenname",
    branche: "Branche",
    website: "Deine heutige Website, falls vorhanden",
  },
};

export const footer = {
  copy: "© 2026 Lumina · Webdesign für Schweizer KMU",
  claim: "Sichtbar oder ==vergessen.==",
  impressum:
    "[PLATZHALTER: Seite /impressum, Name, Adresse, E-Mail, Pflicht nach UWG Art. 3 lit. s]",
  privacy: "[PLATZHALTER: Seite /datenschutz, revDSG]",
  social: "[ZU BESTÄTIGEN: LinkedIn / Instagram, nur wenn Profile existieren]",
  contactLine: "contact@calvinpfrender.dev · lumina.calvinpfrender.dev",
};

export const email = "contact@calvinpfrender.dev";
