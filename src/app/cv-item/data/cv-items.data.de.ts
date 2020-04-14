import { CvItem } from '../cv-item';


export const GENERAL = {
  name: 'Sebastian Schreck',
  position: 'Software Entwickler',
  description: 'Diese Webseite soll einen Überblick über mich geben und Interesse erwecken mich einzustellen.'
};

export const CVITEMS: CvItem[] = [
  {
    title: 'Netlight Consulting GmbH',
    subtitle: 'IT Consultant',
    begin: '2019-01-14',
    end: '',
    description: 'Netlight ist eine IT-Beratungsfirma.',
    tags: [],
    link: 'https://www.netlight.com',
    thumbnail: 'Netlight_Consulting_logo.svg',
  },
  {
    title: 'Mister Spex GmbH',
    subtitle: 'Professional Software Engineer',
    begin: '2017-02-01',
    end: '2018-12-31',
    description: 'Wartung und Weiterentwicklung der Webshop-Infrastruktur. ' +
      'Automatisierung von Prozessen und Erleichterung der Arbeit der Softwareentwcklungsteams.',
    tags: ['Java', 'Intershop', 'Python', 'Ansible', 'Git', 'KanBan', 'PyCharm', 'Apache HTTPD', 'AWS', 'Docker', 'Jira', 'Bamboo',
      'Confluence', 'bash', 'Kubernetes', 'Oracle PL/SQL'],
    link: 'https://www.misterspex.com',
    thumbnail: 'msx-logo.png',
  },
  {
    title: 'Mister Spex GmbH',
    subtitle: 'Junior Software Engineer',
    begin: '2015-06-01',
    end: '2017-01-31',
    description: 'Featureentwicklung für den Internetshop, basierend aud der E-Commerce-Platform Intershop.' +
      'Entwicklung einer eigenständigen API als Microservice, welche für die Bestimmung der Preise sowie ' +
      'möglichen Eigenschaften für die Brillengläser der Kunden verantwortlich ist.',
    tags: ['Java', 'Intershop', 'eclipse', 'Scrum', 'Git', 'SVN', 'Scala', 'Testrail', 'trac', 'Jira', 'Bamboo', 'Confluence', 'AWS', 'TDD',
      'JavaScript', 'Oracle PL/SQL'],
    link: 'https://www.misterspex.com',
    thumbnail: 'msx-logo.png',
  },
  {
    title: 'Mister Spex GmbH',
    subtitle: 'Werkstudent Produktmanagement / Qualitätssicherung',
    begin: '2012-10-01',
    end: '2015-05-31',
    description: 'Qualitätssicherung der Funktionalität des Webshops, der ERP-Software, sowie deren Schnittstellen. ' +
      'Release-Planung und -Durchführung',
    tags: ['Selenium', 'Scrum', 'Quality Assurance', 'Release Management', 'Testrail', 'SVN', 'trac', 'Microsoft Dynamics NAV'],
    link: 'https://www.misterspex.com',
    thumbnail: 'msx-logo.png',
  },
  {
    title: 'Müllers Fanshop',
    subtitle: 'Merchandising Verkäufer in der O2World Berlin',
    begin: '2010-08',
    end: '2012-09',
    description: 'Verkauf von Merchandising-Artikeln bei Sportereignissen und Konzerten. ' +
      'Bereichsverantwortung über einen einzelnen Verkaufsstand.',
    link: '',
    thumbnail: 'muellers_fanshop_logo_001.jpg',
  },
  {
    title: 'MBU Merchandising und Sportreisen GmbH & Co. KG',
    subtitle: 'Merchandising Verkäufer in der O2World Berlin',
    begin: '2008-09',
    end: '2010-07',
    description: 'Verkauf von Merchandising-Artikeln bei Sportereignissen und Konzerten. ' +
      'Bereichsverantwortung über einen einzelnen Verkaufsstand.',
    link: '',
    thumbnail: 'mbu.png',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'AWS Cloud Practitioner',
    subtitle: 'Amazon Web Services (AWS)',
    begin: '',
    end: '2018-11-26',
    description: '',
    link: 'https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2018-11-26&ci=AWS00520066',
    thumbnail: 'AWS_certified_cloud_practitioner.png',
    attachment: 'AWS_Certified_Cloud_Practitioner_certificate.pdf',
  },
  {
    title: 'Intershop Development',
    subtitle: 'Intershop Communications AG',
    begin: '',
    end: '2015-04',
    description: 'Overview (IS7-100), Intershop Frontend Development (IS7-114), Intershop Backend Programming (IS7-118)',
    link: 'http://www.intershop.de/',
    thumbnail: 'intershop.svg',
    attachment: 'ISH_Development_Training_2015.pdf',
  },
  {
    title: 'Versionskontrolle mit Git',
    subtitle: 'Mister Spex GmbH',
    begin: '',
    end: '2014-05-12',
    description: '',
    thumbnail: 'Git-Logo-2Color.png',
    attachment: '',
  },
  {
    title: 'ITIL v3 Foundation Zertifikat',
    subtitle: 'TÜV SÜD Akademie',
    begin: '',
    end: '2012-07-02',
    description: '',
    thumbnail: 'itil_foundation.png',
    attachment: 'ITIL-Zertifikat_2012.pdf',
  },
  {
    title: 'Test of English as foreign language (TOEFL) - ITP',
    subtitle: 'LTS Language & Testing Service',
    begin: '',
    end: '2011-08-31',
    description: '',
    thumbnail: 'ETS_TOEFL_ITP.png',
    attachment: 'LTS_TOEFL ITP-Zertifikat_2011.pdf',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'Technische Universität Berlin',
    subtitle: 'Master of Science | Informatik',
    begin: '2011-10',
    end: '2015-04',
    description: '',
    tags: ['Scrum', 'SVN', 'Git', 'Java', 'Scala', 'eclipse', 'Lua', 'Maven'],
    link: 'http://www.tu-berlin.de',
    thumbnail: 'TU-Berlin-Logo.png',
  },
  {
    title: 'Technische Universität Berlin',
    subtitle: 'Bachelor of Science | Informatik',
    begin: '2008-10',
    end: '2011-12',
    description: '',
    tags: ['Scrum', 'SVN', 'Java', 'C', 'Assembler', 'eclipse', 'Opal', 'ant'],
    link: 'http://www.tu-berlin.de',
    thumbnail: 'TU-Berlin-Logo.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Deutsch', level: '100' },
  { title: 'Englisch', level: '80' },
  { title: 'Italienisch', level: '70' },
  { title: 'Französisch', level: '30' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'RatS',
    subtitle: 'Script für den Transfer von persönlichen Filmbewertungen zwischen verschiedenen Portalen',
    begin: '2017-02',
    end: '',
    description: 'Dieses Python-basiertes Projekt bietet eine Möglichkeit die persönliche Bewertung von Filmen von einer Plattform ' +
      '(z.B. IMDB) zu einer anderen (z.B. Trakt) zu transferieren. ' +
      'Das Projekt unterstützt zur Zeit 13 Plattformen und wird konstant erweitert.',
    tags: ['Python', 'Git', 'Docker', 'Selenium', 'Beautifulsoup', 'JSON', 'CSV'],
    link: 'https://github.com/StegSchreck/RatS',
    thumbnail: 'RatS.png',
  },
  {
    title: 'AngularCV',
    subtitle: 'Ein einfacher, selbst-gehosteter Online-Lebenslauf',
    begin: '2017-09',
    end: '',
    description: 'Dieses Projekt bietet eine einfache Möglichkeit für ein selbst-gehosteten Lebenslauf. ' +
      'Diese Webseite ist das Resultat dieses Projekts.',
    tags: ['Angular 4', 'Material Design', 'GitHub', 'CSS', 'TypeScript', 'JetBrains WebStorm', 'AWS', 'jsPDF', 'npm'],
    link: 'https://github.com/StegSchreck/AngularCV',
    thumbnail: '../AngularCV.png',
  },
  {
    title: 'Recoding Aviation Hackathon',
    subtitle: 'Hackathon für die Verbesserung des Erlebnisses für Flugreisende',
    begin: '',
    end: '2017-06',
    description: 'Ich nahm mit drei Kollegen an diesem Hackathon teil. ' +
      'Wir entwickelten eine Idee zur Stress-Reduzierung der Flugreisenden. Wir tauften die Idee \'Unwait the airport\'. ' +
      'Diese Idee überzeugte die teschnischen Experten vom Münchener Flughafen und wir erhielten deren Partner-Preis.',
    tags: ['Angular 2', 'Material Design', 'Git', 'NodeJS', 'ACI ACRIS Seamless Tavel API', 'Express.js', 'MongoDB', 'twilio'],
    link: 'https://github.com/StegSchreck/RecodingAviation',
    thumbnail: 're-coding-avation-ba.png',
  },
  {
    title: 'OFM Helper',
    subtitle: 'Unterstützung bei der Analyse der Daten beim Browserspiel \'OFM\'',
    begin: '2016-05',
    end: '2017-05',
    description: 'Der Online-Fußball-Manager ist ein Browserspiel, in dem man sein eigenes Fußballteam aufbaut und verwaltet.' +
      'Der \'OFM Helper\' hilft dem Spieler die dabei anfallenden Daten zu analysieren. ' +
      'Für dieses Projekt habe ich mit einem anderen Entwickler zusammengearbeitet.',
    tags: ['Python', 'Django', 'Git', 'Selenium', 'Beautifulsoup', 'TDD', 'Docker'],
    link: 'https://www.ofmhelper.de/',
    thumbnail: 'OFM_Helper.png',
  },
  {
    title: 'GoOLAP.info',
    subtitle: 'Forschungsprojekt - Fakten-Suchmaschine',
    begin: '2010',
    end: '2011',
    description: 'GoOLAP ist eine Fakten-Suchmschine, welche das Internet durchsucht und relevante Daten mittels Analyse der ' +
      'menschlichen Sprache heraussiebt. Dies ist ein laufendes Forschungsprojet am Lehrstuhl DIMA der TU Berlin.' +
      'Ich war zunächst Teil des Projektsteuerungsteams. ' +
      'Später schrieb ich meine Bachelorarbeit über die Persistenzschicht dieses Projekts',
    tags: ['Project Managemant', 'Hadoop', 'MySQL', 'Mantis'],
    link: 'http://goolap.info/',
    thumbnail: 'TU_DIMA_GoOLAP.png',
  },
  {
    title: 'Global Phenological Monitoring Programm (GPM)',
    subtitle: 'Web-Applikation für die Humboldt-Universität',
    begin: '',
    end: '2010',
    description: 'GPM ist ein globales Projekt zu Beobachtung von bestimmten Pflanzen, um deren Verhalten mit Klimadaten in ' +
      'Zusammenhang zu bringen. Die Web-Applikation wurde in einem Projekt-Kurs an der TU Berlin entwickelt, an dem ich teilnahm.',
    tags: ['Java', 'JSF', 'JSP', 'SVN', 'Scrum', 'Trac', 'Spring', 'ant'],
    link: 'http://gpm.hu-berlin.de/',
    thumbnail: 'Huberlin-logo.png',
  },
];

export const VOLUNTEERING: CvItem[] = [
  {
    title: 'DFB-Pokalfinals & Länderspiele',
    subtitle: 'Einlass, Besucherservice, VIP-Betreuung, Springer, Sonderaufgaben',
    begin: '2007',
    end: '2016',
    description: 'Einlass, Besucherservice, VIP-Betreuung, Springer, Sonderaufgaben',
    link: 'http://www.dfb.de',
    thumbnail: 'DFB-Logo.jpg',
  },
  {
    title: 'ISTAF & ISTAF Indoor',
    subtitle: 'Teamleiter',
    begin: '2007',
    end: '2016',
    description: 'Technischer Aufbau, Besucherservice, Ordnungsdienst, Abbau',
    link: 'https://www.istaf.de',
    thumbnail: 'ISTAF.png',
  },
  {
    title: 'UEFA Champions League Finale 2015 Berlin',
    subtitle: 'Teamleiter',
    begin: '',
    end: '2015',
    description: 'Teamleiter Besucherservice',
    link: 'https://www.uefa.com',
    thumbnail: 'UEFA_Champions_League-logo.png',
  },
  {
    title: 'CEV Champions league Final Four 2015 Berlin',
    subtitle: 'Teamleiter',
    begin: '',
    end: '2015',
    description: 'Teamleiter Backstage-Sicherheit',
    link: 'http://www.cev.lu/',
    thumbnail: 'CEV_Champions_League_logo.png',
  },
  {
    title: 'Deutsche Indoor-Ruder-Serie',
    subtitle: 'Technischer Leiter',
    begin: '2010',
    end: '2015',
    description: 'Technischer Aufbau und Zeitmessung',
    link: 'https://www.concept2.de/indoor-rowers/indoor-regatten/dirm',
    thumbnail: 'dirs_logo.jpg',
  },
  {
    title: 'Ruder-Bundesliga',
    subtitle: 'Zeitmessung',
    begin: '2009',
    end: '2015',
    description: 'Technischer Aufbau und Zeitmessung',
    link: 'https://www.ruder-bundesliga.de',
    thumbnail: 'Logo-Bundesliga_quer.jpg',
  },
  {
    title: 'ULEB Euroleague Final Four 2009 Berlin',
    subtitle: 'Team-Betreuer',
    begin: '',
    end: '2009',
    description: 'Team-Betreuer einer Basketball-Mannschaft aus Siena, Italien.',
    link: 'http://www.euroleague.net/',
    thumbnail: 'ULEB_FinalFour_2009.png',
  },
  {
    title: 'Deutsche Ruderjugend im Deutschen Ruderverband',
    subtitle: 'Jugendtrainer und -betreuer',
    begin: '2007',
    end: '2014',
    description: 'Betreuung von Trainingslagern, Jugend-Wanderfahrten, Olympisches Jugendlager zu den Olympischen Spielen in London 2012.',
    link: 'https://www.ruderjugend.org',
    thumbnail: 'DRJ_Logo.jpg',
  },
  {
    title: 'FISA Junioren-Weltmisterschaft Rudern 2014 Hamburg',
    subtitle: 'IT-Netzwerk',
    begin: '',
    end: '2014',
    description: '',
    link: 'http://www.worldrowing.com/',
    thumbnail: 'FISA_JWM_2014.png',
  },
  {
    title: 'Hertha BSC',
    subtitle: 'Besucherservice, Sonderaufgaben, Teamleiter',
    begin: '2008',
    end: '2011',
    description: 'Besucher beim Zurechtfinden im Berliner Olympiastadion unterstützen. Zuletzt als Teamleiter.',
    link: 'http://www.hertha.de/',
    thumbnail: 'Hertha_BSC_Logo.svg',
  },
  {
    title: 'IAAF Leichtathletik-Weltmeisterschaft 2009 Berlin',
    subtitle: 'Anti-Doping-Chaperone',
    begin: '',
    end: '2009',
    description: 'Begleitung der Athleten vom Wettkampf zur Anti-Doping-Kontrolle.',
    link: 'https://www.iaaf.org/',
    thumbnail: 'IAAF_2009_in_Berlin.png',
  },
  {
    title: 'FIFA Fußball-Weltmeisterschaft 2006 Deutschland',
    subtitle: 'Visitor service',
    begin: '',
    end: '2006',
    description: 'Besucher beim Zurechtfinden im Berliner Olympiastadion unterstützen.',
    link: 'https://www.fifa.com/',
    thumbnail: 'fifa_world_cup_2006.gif',
  },
];

export const CONTACT = {
  city: 'Berlin, Deutschland',
  phone: '',
  mail: 'sebastian@schreck.berlin',
  skype: '', // just the account name
  linkedin: 'https://www.linkedin.com/in/sebastian-schreck-050739131/',
  xing: 'https://www.xing.com/profile/Sebastian_Schreck2',
  github: 'https://github.com/StegSchreck',
  stackoverflow: 'https://stackoverflow.com/users/story/6538600',
  twitter: 'https://twitter.com/StegSchreck', // full url
  facebook: '',
  instagram: '', // full url
  other: [
    { title: 'Medium', icon: 'icon-medium', link: 'https://medium.com/@stegschreck' },
  ],
};

export const INTERESTS = [
  {
    title: 'Rudern',
    subtitle: '2000 — 2013',
    icon: 'rowing'
  },
  {
    title: 'Fotografie',
    subtitle: 'Pentax K3 DSLR',
    icon: 'camera_alt'
  },
  {
    title: 'Ehrenamt im Sport',
    subtitle: '2005 — 2016',
    icon: 'favorite'
  },
];

export const PUBLICATIONS: CvItem[] = [
  {
    title: 'The Speaker at the End of the Universe',
    subtitle: 'Artikel veröffentlicht auf Medium',
    begin: '',
    end: '2019-05-27',
    description: 'Wie man sich als Vortragender auf einer Konferenz verhält',
    tags: ['conference', 'speaker', 'public speaking'],
    link: 'https://medium.com/@stegschreck/the-speaker-at-the-end-of-the-universe-6fb8565587b6',
    thumbnail: 'medium.png',
  },
  {
    title: 'The Hitchhiker’s Guide to a Tech Conference',
    subtitle: 'Artikel veröffentlicht auf Medium',
    begin: '',
    end: '2019-05-20',
    description: 'Empfehlungen für den ersten Besuch auf einer Konferenz',
    tags: ['conference', 'visitor', 'attendee'],
    link: 'https://medium.com/@stegschreck/the-hitchhikers-guide-to-a-tech-conference-983c29b1e9ef',
    thumbnail: 'medium.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: 'Article published on Medium / MakeItNew.io',
    begin: '',
    end: '2019-04-17',
    description: 'A summary of our Talk \'Tear Down This Wall!\' given at Code.Talks Commerce Special 2018 in Berlin ' +
      'and DevOpsCon 2018 in Berlin about how we enable more collaboration in our IT teams at Mister Spex.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://makeitnew.io/tear-down-this-wall-c2211141fdb5',
    thumbnail: 'Medium_MakeItNew.png',
    attachment: 'tear-down-this-wall.pdf',
  },
];

export const TALKS: CvItem[] = [
  {
    title: 'Bringing a complex stack to the cloud, our journey and lessons learned',
    subtitle: '45 min. @ AWS Startup Day Berlin 2018',
    begin: '',
    end: '2018-10-09',
    description: 'Mister Spex moved away from AWS to an on-premises infrastructure in 2015. ' +
      'This year we switched back to AWS. We will cover the story of these changes and why we did so. ' +
      'Come and hear our experiences and struggles to make your own migration smoother.',
    tags: ['AWS', 'cloud', 'migration'],
    thumbnail: 'AWS_Startup_Day.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '60 min. @ DevOpsCon Berlin 2018',
    begin: '',
    end: '2018-05-29',
    description: 'The discussion about DevOps is often focusing solely on the tooling aspect: automation, ' +
      'continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on ' +
      'your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from ' +
      'inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the ' +
      'stability of the software as well as the systems it runs on. We focus on the organizational ' +
      'aspects of DevOps: How to measure and improve your team\'s effectiveness by reducing silos and silo thinking and ' +
      'how to get your engineers to share responsibility - a basis for every successful DevOps transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices', 'team structure'],
    link: 'https://jaxenter.com/devops-interview-schreck-uebel-145573.html',
    thumbnail: 'DevOpsCon_2018_Speaker.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '45 min. @ code.talks commerce special Berlin 2018',
    begin: '',
    end: '2018-04-13',
    description: 'The discussion about DevOps is often focusing solely on the tooling aspect: automation, ' +
      'continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on ' +
      'your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from ' +
      'inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the ' +
      'stability of the software as well as the systems it runs on. We focus on the organizational ' +
      'aspects of DevOps: How to measure and improve your team\'s effectiveness by reducing silos and silo thinking and ' +
      'how to get your engineers to share responsibility - a basis for every successful DevOps transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://www.youtube.com/watch?v=KWw0H__mtxI',
    thumbnail: 'code-talks-commerce.png',
  },
];
