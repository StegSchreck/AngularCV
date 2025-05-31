import { CvItem } from '../cv-item';

/* eslint-disable max-len */
export const GENERAL = {
  name: 'Sebastian Schreck',
  position: 'Software Entwickler',
  description: `Sebastian begann seine IT-Karriere als QA Werkstudent während seines Informatik-Studiums an der TU Berlin. Nach dem Abschluss der Masterarbeit wurde er ein festangestellter Vollzeit-Softwareentwickler bei Mister Spex. Dort nahm er sowohl Backend- als auch Frontend-Aufgaben wahr. Durch Unzufriedenheit bezüglich der Auftrennung von Entwicklung und Betrieb trieb es ihn zu einem Wechsel auf die Betriebsseite um dort mehr Einblicke zu gewinnen. Nachdem er beide Seiten kennengelernt hatte, wurde Sebastian zu einem starken Verfechter von DevOps Prinzipien und geteilter Verantwortung. Hierzu hielt Sebastian Vorträge auf der code.talks und DevOpsCon über die Themen DevOps, Kollaboration, Feedback-Kultur und Verantwortlichkeiten.

Sebastian ist auf der Suche nach neuen Herausforderungen welche moderne, fortschrittliche Technologien beinhalten und ein kollaboratives Arbeitsumfeld. Sich neues Wissen anzueignen und neue Technologien auszuprobieren sind Teil seiner Motivation. Neue Stellen sind für Sebastian interessant, falls diese es ermöglichen die Software über den gesamten Weg zu begleiten: von der Planung über die Implementierung bis hin zum Deployment und Monitoring. Verstärkte Feedback-Zyklen und eine Kultur des stetigen Lernens und Experimentierens definieren eine ordentliche Arbeitsumgebung für ihn. Angebote für Stellen außerhalb Berlins sind für Sebastian nicht relevant.

Diese Internetseite wurde als einfacher, selbst-gehosteter online-Lebenslauf konzipiert. Um mehr hierüber zu erfahren, bitte auf das AngularCV logo in der unteren, rechten Ecke klicken.`,
};
/* eslint-enable max-len */

export const CVITEMS: CvItem[] = [
  {
    title: 'Netlight Consulting GmbH',
    subtitle: 'IT Consultant - Associate Manager',
    begin: '2019-01',
    end: '',
    description: 'Netlight ist eine IT-Beratungsfirma mit Büros in ' +
      'Stockholm, Oslo, München, Berlin, Hamburg, Kopenhagen, Helsinki, Zürich, Frankfurt, Amsterdam, Köln und Toronto. ' +
      'Der Kern von IT-Consulting für uns sind die Talente, welche in Kooperation miteinander wertvolle Ergebnisse für unsere Kunden erbringen.\n\n' +
      'Neben der Tätigkeit als IT Consultant ist Sebastian hier auch als Führungskraft (genannt "Mentor") sowie als technischer und ' +
      'persönlicher Coach im Kundenprojekt-Kontext aktiv. ' +
      'Außerdem führt er regelmäßig technische Interviews um die passenden Kandidaten für die nächsten Generationen auszuwählen.',
    tags: ['Principal Engineer', 'Staff Engineer', 'Engineering Leadership', 'Product Owner', 'Mentoring', 'Coaching'],
    link: 'https://www.netlight.com',
    thumbnail: 'Netlight.svg',
    positions: [
      {
        title: 'Skandinavische Bank',
        subtitle: 'Cloud Migration Expert',
        begin: '2025-02',
        end: '',
        description: 'In diesem Projekt arbeitete Sebastian zusammen mit einem Hyperscaler Beratungsteam bei einer großen Skandinavischen ' +
          'Bank um deren large-scale Cloud Migration mittels eines innovativen Hyper-Automation Ansatzes zu untersützen.',
        tags: ['AWS', 'Terraform', 'Git', 'KanBan', 'IntelliJ', 'Azure DevOps', 'Jira', 'Confluence', 'bash', 'PowerShell'],
        thumbnail: 'AWS_ProServe_DanskeBank.png',
      },
      {
        title: 'Automotive Innovation Lab',
        subtitle: 'Expert Software Engineer',
        begin: '2023-08',
        end: '2024-12',
        description: 'Sebastian kam als Expert Software Engineer zum Information Architecture Team, um deren Bemühungen beim Aufbau ' +
          'einer professionellen Softwareentwicklungsumgebung und der Förderung von Engineering Craftmanship zu unterstützen. Da das ' +
          'aktuelle Architekturkonzept an seine Grenzen stieß, unterstützte Sebastian die Konzeption und Implementierung einer neuen Lösung, ' +
          'die sowohl den aktuellen Anforderungen gerecht wird als auch auf zukünftige Erweiterungen und Skalierungen vorbereitet ist – ' +
          'basierend auf einer bestehenden unternehmensweiten IAM-Lösung. Er vernetzte aktiv Ingenieure über Teamgrenzen hinweg und bildete ' +
          'eine Fokusgruppe aus leitenden Ingenieuren um die Systemarchitekten herum, um die Systemarchitektur und die ' +
          'Engineering-Landschaft weiterzuentwickeln.',
        tags: ['Python', 'Django', 'Git', 'KanBan', 'PyCharm', 'Gitlab CI', 'Docker', 'Jira', 'SAFe', 'Scrum', 'AWS', 'Confluence', 'Jenkins', 'bash'],
        thumbnail: 'MBition.svg',
      },
      {
        title: 'Führende globale Wirtschaftsprüfungsgesellschaft',
        subtitle: 'Tech Lead & Technical Product Owner',
        begin: '2022-07',
        end: '2023-06',
        description: 'Sebastian leitete ein Team welches an der Digitalisierung und Automatisierung der Wirtschaftsprüfungsprozesse arbeitete. ' +
          'Als Teil der globalen Anstrengungen der Wirtschaftsprüfungsgesellschaft wurden die Prüfungsprozesse hierbei ' +
          'vereinfacht, beschleunigt und Fehler-unanfälliger gemacht.',
        tags: ['Python', 'Kubernetes', 'Git', 'KanBan', 'IntelliJ', 'Azure DevOps', 'Docker', 'SAFe', 'Scrum', 'AWS', 'Confluence', 'Jenkins', 'bash'],
        thumbnail: 'PwC.svg',
      },
      {
        title: 'Automotive Mobilitätsanbieter',
        subtitle: 'Tech Lead & Product Owner',
        begin: '2021-01',
        end: '2022-06',
        description: 'Sebastian trat die Nachfolger von zwei senioren Entwicklern an in der Rolle des Tech Leads. ' +
          'Hierbei arbeitete er sowohl als Fullstack-Entwickler, als auch team-übergreifend. Sebastien war Treiber für die ' +
          'Kommunikation and Absprache zwischen den Teams auf technischer Ebene, inklusive dem CTO. ' +
          'Später übernahm Sebastian 2 Monate lang interimsweise die Aufgabe eines Product Owners.',
        tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Kubernetes', 'Git', 'KanBan', 'IntelliJ', 'Docker', 'Jira', 'Scrum', 'SAFe', 'Confluence', 'GitHub Actions'],
        thumbnail: 'Mercedes-Benz_Van_Rental.svg',
      },
      {
        title: 'Merger&Acquisition Project',
        subtitle: 'Technical Due Diligence Assessment',
        begin: '2019-11',
        end: '2020-01',
        description: 'Sebastian was engaged in the technical assessment of two target companies during an M&A process. ' +
          'This process required a thorough look into the available documentation and summarising the state of the current technical ' +
          'landscape of the companies as well as identifying potential risks and deriving recommendations for the interested investor in a ' +
          'concise presentation.',
        tags: [''],
      },
      {
        title: 'Führende deutsche Preisvergleichsseite',
        subtitle: 'Lead Software Engineer & Architect',
        begin: '2019-08',
        end: '2020-12',
        description: 'Als Teil der Umstellung der monolithischen Webshop-Applikation hin zu Service-based Architektur, ' +
          'arbeitete Sebastian an der Umsetzung der neuen Microservices. Dies beinhaltete das konsumieren verschiedener Eventstreams. ' +
          'Darüber hinaus half Sebastian mit agilen Prakriken und Team-Kultur mittels Retrospektiven oder pair-programming.' +
          '\n\n' +
          'Nach der erfolgreichen Migratrion wurde Sebastian gebeten einem anderen Team bei der Einschätzung ihrer experimentelllen, modernen ' +
          'Architektur zu unterstützen. Nach der Architektur-Review half Sebastian bei der Weiterentwicklung der Applikation, als auch bei ' +
          'der Stabilisierung der Team-Kultur, insbesondere bezüglich Kollaboration. Er unterstütze auch den Interview-Prozess für die ' +
          'offene Senior Engineer Stelle im Team.' +
          '\n\n' +
          'Nach der Architektur-Review wurde entschieden auch andere Teile des Webshops auf den neuen Architektur-Ansatz zu bringen. ' +
          'Hierfür wurde Sebastian Teil des Checkout-Teams, um ihnen mit seinem Arhcitektur-Wissen bei der Migration ihrer Legacy-Systeme zu unterstützen. ' +
          'Darüber hinaus brachte er auch wertvolle Automatisierungen mit ein, um etwa Dependencys zu aktualisieren. ' +
          'Auch in diesem Team unterstütze Sebastian den erst kürzlich gestarteten Teamleiter - insbesondere bei Themen Hiring und Teamkultur.',
        tags: ['Java', 'SpringBoot', 'React', 'Kafka', 'MongoDB', 'Kubernetes', 'Git', 'IntelliJ', 'Docker', 'GraphQL', 'Jira', 'Scrum', 'AWS', 'Openshift', 'Confluence', 'Jenkins', 'bash'],
        thumbnail: 'idealo_transparent.png',
      },
      {
        title: 'Führende deutsche Immobilienplattform',
        subtitle: 'Senior Software Engineer & Cloud Architekt',
        begin: '2019-01',
        end: '2019-07',
        description: 'Sebastian arbeitete im Team verantwortlich für die Suchergebnisliste und Expose-Ansicht der Immobilien ' +
          'neben der Feature-Entwicklung auch an der Cloud-Migration.' +
          '\n\n' +
          'Später wurde Sebastian Teil eines ne-geformten Teams zur Automtisierung einer manuellen PoC Lösung. ' +
          'Hierbei hatte er die Rolle eines Cloud Architekten und entwickelte die new hoch-automatisierte Lösung auf basis von Serverless-Services in der AWS Cloud.',
        tags: ['Java', 'SpringBoot', 'Git', 'IntelliJ', 'Docker', 'Maven', 'Jira', 'REST', 'API', 'SNS/SQS', 'Lambda', 'DynamoDB', 'Scrum', 'AWS', 'Confluence', 'TeamCity', 'Jenkins', 'BitBucket', 'bash'],
        thumbnail: 'ImmoScout24_2020.svg',
      },
    ],
  },
  {
    title: 'Mister Spex GmbH',
    subtitle: 'Professional Software Engineer',
    begin: '2015-06',
    end: '2018-12',
    description: 'Später erfolgte der Wechsel von der Produktentwicklung zum Infrastrukturbetrieb. ' +
      '',
    tags: ['Cloud', 'Infrastructure', 'Microservice', 'Architecture', 'Backend', 'Fullstack', 'Operations', 'DevOps Culture'],
    link: 'https://www.misterspex.com',
    thumbnail: 'MisterSpex.svg',
    positions: [
      {
        title: 'Webshop Infrastruktur',
        subtitle: 'Cloud / Infrastructure',
        begin: '2017',
        end: '2018-12',
        description: 'Instandhaltung und Betrieb der IT-Plattform auf welcher der E-Commerce-Shop läuft. ' +
          'Automatisierung von Prozessen and Unterstützung der Entwicklungsteams in ihrer Arbeit. ' +
          'Sicherung der Cloud-Umgebung gegenüber Angreifern. ' +
          'Planung und Durchführung der Migrations mehrerer Anwendungen hin zur AWS Cloud, darunter der Haupt-Webshop.',
        tags: ['GitLab CI', 'Git', 'Docker', 'Jira', 'KanBan', 'AWS', 'Confluence', 'Bamboo', 'Kubernetes', 'Ansible', 'Python', 'Apache HTTPD', 'bash', 'PyCharm'],
      },
      {
        title: 'Webshop Entwicklung',
        subtitle: 'Backend und Frontend',
        begin: '2015-06',
        end: '2017',
        description: 'Implementierung von Features auf der E-Commerce Plattform Intershop. ' +
          'Entwicklung einer separierted API als Microservice nach DevOps Prinzipien welche die Preise und Kombinationsmöglichkeiten der Brillengläser berechnet. ',
        tags: ['Intershop', 'Java', 'Git', 'Jira', 'Scrum', 'Javascript', 'Maven', 'jQuery', 'AWS', 'Confluence', 'Bamboo', 'GitLab', 'Oracle PL/SQL', 'eclipse', 'bash', 'TDD'],
      },
    ],
  },
  {
    title: 'Mister Spex GmbH',
    subtitle: 'Werkstudent Produktmanagement / Quality Assurance',
    begin: '2012-10',
    end: '2015-05',
    description: 'Sicherstellung der Qualität und Funktionalität des Webshops, der ERP-Software und deren Schnittstellen. Planung und Durchführung von Releases.',
    tags: ['Selenium', 'Scrum', 'Quality Assurance', 'Release Management', 'Testrail', 'Subversion', 'trac', 'Microsoft Dynamics NAV'],
    link: 'https://www.misterspex.com',
    thumbnail: 'MisterSpex.svg',
  },
  {
    title: 'Müllers Fanshop',
    subtitle: 'Merchandise-Verkäufer in der O₂World Berlin',
    begin: '2010-08',
    end: '2012-09',
    description: 'Verkäufer für Merchandise-Artikel während Sportveranstaltungen, Konzerten, und Events. ' +
      'Darunter Heimspiele der Eisbären Berlin, ALBA Berlin, Konzerte von Linkin Park, Depeche Mode, Lady Gaga, Justin Bieber, Elton John, KISS, Udo Lindenberg, Die Fantastischen Vier, uvm. ' +
      'Hauptverantwortlich für einen der Verkaufsstände. Abrechnung, Inventur, Warenlogistik.',
    link: '',
    thumbnail: 'Müllers_Fanshop_O2World.png',
  },
  {
    title: 'MBU Merchandising und Sportreisen GmbH & Co. KG',
    subtitle: 'Merchandise-Verkäufer in der O₂World Berlin',
    begin: '2008-09',
    end: '2010-07',
    description: 'Verkäufer für Merchandise-Artikel während Sportveranstaltungen, Konzerten, und Events. ' +
      'Darunter Heimspiele der Eisbären Berlin, ALBA Berlin, Konzerte von Linkin Park, Depeche Mode, Lady Gaga, Justin Bieber, Elton John, KISS, Udo Lindenberg, Die Fantastischen Vier, uvm. ' +
      'Hauptverantwortlich für einen der Verkaufsstände. Abrechnung, Inventur, Warenlogistik.',
    link: '',
    thumbnail: 'MBU_O2World.png',
  },
  // {
  //   title: 'Teamwork - Büttgen GmbH',
  //   subtitle: 'Regalauffüller in div. Supermärkten',
  //   begin: '2008-01',
  //   end: '2008-09',
  //   description: 'Regalauffüllung, -pflege, Lieferlisten-Kontrolle, Lagermanagement',
  //   link: '',
  //   thumbnail: 'Teamwork.png',
  // },
  {
    title: 'n-tv Nachrichtenfernsehen GmbH & Co. KG',
    subtitle: 'Schülerpraktikum',
    begin: '',
    end: '2003-06',
    description: 'Schülerbetriebspraktikum in der Oberschule mit Einblicken in die Bereiche: ' +
      'Service & Systeme, Audiotechnik, Grafik, Videobearbeitung, Sendeabwicklung, Regie/Studio.',
    link: '',
    thumbnail: 'n-tv.svg',
  },
];

export const CERTIFICATES: CvItem[] = [
  // {
  //   title: 'Erste Hilfe',
  //   subtitle: 'Technisches Hilfswerk',
  //   begin: '',
  //   end: '2025-04-26',
  //   description: '',
  //   link: '',
  //   thumbnail: 'THW_mit_Schriftzug.svg',
  //   attachment: '2025_THW_ErsteHilfe.pdf',
  // },
  {
    title: 'Introduction to FinOps',
    subtitle: 'FinOps Foundation',
    begin: '',
    end: '2025-01-28',
    description: '',
    link: 'https://verify.skilljar.com/c/nrw64kyd5cqu',
    thumbnail: 'FinOps_Foundation_Introduction_to_FinOps.png',
    attachment: 'FinOps_certificate-nrw64kyd5cqu-1738071659.pdf',
  },
  {
    title: 'AWS Cloud Practitioner',
    subtitle: 'Amazon Web Services (AWS)',
    begin: '',
    end: '2018-11-26',
    description: '',
    link: 'https://www.youracclaim.com/badges/feda3cd6-424a-4874-804f-60cb005aa546',
    thumbnail: 'AWS_certified_cloud_practitioner.png',
    attachment: 'AWS_Certified_Cloud_Practitioner_certificate.pdf',
  },
  {
    title: 'Intershop Entwicklung',
    subtitle: 'Intershop Communications AG',
    begin: '',
    end: '2015-04',
    description: 'Overview (IS7-100)\nIntershop Frontend Development (IS7-114)\nIntershop Backend Programming (IS7-118)',
    link: 'https://www.intershop.de/',
    thumbnail: 'Intershop.svg',
    attachment: 'ISH_Development_Training_2015.pdf',
  },
  {
    title: 'Versionskontrolle mit Git',
    subtitle: 'Mister Spex GmbH',
    begin: '',
    end: '2014-05-12',
    description: '',
    thumbnail: 'Git.svg',
    attachment: '',
  },
  {
    title: 'ITIL v3 Foundation Zertifikat',
    subtitle: 'TÜV SÜD Akademie',
    begin: '',
    end: '2012-07-02',
    description: '',
    thumbnail: 'ITIL_certified.png',
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
    tags: ['Scrum', 'Subversion', 'Git', 'Java', 'Scala', 'eclipse', 'Lua', 'Maven'],
    link: 'https://www.tu-berlin.de',
    thumbnail: 'TU-Berlin.svg',
  },
  {
    title: 'Technische Universität Berlin',
    subtitle: 'Bachelor of Science | Informatik',
    begin: '2008-10',
    end: '2011-12',
    description: '',
    tags: ['Scrum', 'Subversion', 'Java', 'C', 'Assembler', 'eclipse', 'Opal', 'ant'],
    link: 'https://www.tu-berlin.de',
    thumbnail: 'TU-Berlin.svg',
  },
  // {
  //   title: 'Max-Beckman-Oberschule',
  //   subtitle: 'Abitur',
  //   begin: '2001-08',
  //   end: '2007-06',
  //   description: '',
  //   link: 'https://www.mbo-berlin.de',
  //   thumbnail: 'MBO.png',
  // },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Deutsch', level: '100' },
  { title: 'Englisch | English', level: '85' },
  { title: 'Italienisch | Italiano', level: '75' },
  { title: 'Französisch | Français', level: '25' },
  { title: 'Schwedisch | Svenska', level: '15' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'RatS',
    subtitle: 'Programm für den Transfer von Filmbewertungen von einem Internetportal zu einem anderen',
    begin: '2017-02',
    end: '',
    description: 'Dieses Python-Projekt bietet eine einfache Möglichkeit zur Übertragung der persönlichen Filmbewertungen von einer Seite (z.B. IMDB) zu einer anderen (z.B. Trakt). Aktuell unterstützt das Projekt 14 Seiten und wird kontinuierlich erweitert.',
    tags: ['Python', 'Git', 'Docker', 'Selenium', 'Beautifulsoup', 'JSON', 'CSV'],
    link: 'https://github.com/StegSchreck/RatS',
    thumbnail: 'RatS.png',
  },
  {
    title: 'AngularCV',
    subtitle: 'Ein einfacher selbst-gehosteter Online-Lebenslauf',
    begin: '2017-09',
    end: '',
    description: 'Dieses Projekt wurde erstellt um einen simplen Online-Lebenslauf erstellen zu können, welchen jeder selbst hosten kann. Dieser Internetauftritt ist das Ergebnis davon.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'JetBrains WebStorm', 'AWS', 'jsPDF', 'npm'],
    link: 'https://github.com/StegSchreck/AngularCV',
    thumbnail: '../AngularCV.svg',
  },
  {
    title: 'Beat the Host',
    subtitle: 'Von "Schlag den Raab" inspiriertes Spiel basierend auf Vue3.',
    begin: '2023-12',
    end: '',
    description: 'Web-Version für ein Spiel mit mehreren (konfigurierbaren) Einzelspielen mit aufsteigender Punktzahl.',
    tags: ['Vue.js', 'Javascript', 'GitHub', 'CSS', 'JetBrains WebStorm', 'AWS', 'npm'],
    link: 'https://github.com/WiSchLabs/beat-the-host',
    thumbnail: 'BeatTheHost.png',
  },
  {
    title: 'UberPage',
    subtitle: 'Eine simple Internetseite zur Darstellung von verschiedenen Links.',
    begin: '2019-07',
    end: '',
    description: 'Dieses React-basierte Projekt bietet einen einfachen Weg verschiedene Links auf einer simplen Übersichtsseite darzustellen.',
    tags: ['React', 'Javascript', 'GitHub', 'CSS', 'JetBrains WebStorm', 'AWS', 'npm'],
    link: 'https://github.com/StegSchreck/uberpage',
    thumbnail: 'UberPage_kompakt.png',
  },
  {
    title: 'PP-Auxmoney-Parser',
    subtitle: 'Skript für die Erstellung einer CSV Datei mit den erwirtschafteten Zinsen aus Auxmoney Investitionen.',
    begin: '2019-07',
    end: '',
    description: 'Dieses Skript liest die Investitionen bei Auxmoney aus und erstellt eine CSV mit den erwirtschafteten Zinsen. ' +
      'Die CSV Datei ist so formatiert, dass sie problemlos in Portfolio Performance importiert werden kann.',
    tags: ['Python', 'Git', 'Selenium', 'Beautifulsoup', 'CSV'],
    link: 'https://github.com/StegSchreck/PP-Auxmoney-Parser',
    thumbnail: 'PP-Auxmoney-Parser.png',
  },
  {
    title: 'IS24 Price Per Area',
    subtitle: 'Chrome Erweiterung für die Anzeige des Quadratmeterpreises auf ImmoScout',
    begin: '2020-02',
    end: '2022-08',
    description: 'Anzeige des Quadratmeterpreises für Wohnungen auf der Suchergebnisliste, dem Merkzettel und der Expose-Seite von ImmobilienScout24. Die Erweiterung bietet darüber hinaus die Möglichkeit die Quadratmeterpreise farblich hervorzuheben, basierend auf anpassbaren Grenzwerten.' +
      'Dieses Projekt steht in keiner Verbindung zur ImmobilienScout24 GmbH.',
    tags: ['Javascript', 'CSS', 'MaterialDesign', 'Chrome'],
    link: 'https://github.com/StegSchreck/is24-price-per-area',
    thumbnail: 'is24-price-per-area.svg',
  },
  {
    title: 'Recoding Aviation Hackathon',
    subtitle: 'Hackathon zur Verbesserung des Reiseerlebnisses bei Flugreisen.',
    begin: '',
    end: '2017-06',
    description: 'Sebastian nahm zusammen mit drei Kollegen an diesem Hackathon teil. Dabei haben sie eine Idee entwickelt, welche selten reisende Personen vom Stress and Hektik am Flughafen zu befreien. Die Lösung wurde \'Unwait the airport\' getauft. Das Ergebnis hat die technischen Experten des Münchener Flughafens überzeugt, welche der Idee deren Partnerpreis verliehen.',
    tags: ['Angular 2', 'MaterialDesign', 'Git', 'NodeJS', 'ACI ACRIS Seamless Tavel API', 'Express.js', 'MongoDB', 'twilio'],
    link: 'https://github.com/StegSchreck/RecodingAviation',
    thumbnail: 're-coding-avation.png',
  },
  {
    title: 'OFM Helper',
    subtitle: 'Unterstützung bei der Analyse der Daten aus dem Browserspiel \'OFM\'',
    begin: '2016-05',
    end: '2017-05',
    description: 'OFM ist ein Browserspiel bei dem man den Manager eines Fußballteams spielt. Der \'OFM Helper\' hilft dem Nutzer die Daten aus den Fußballspielen, Trainingseinheiten usw. zu analysieren.',
    tags: ['Python', 'Django', 'Git', 'Selenium', 'Beautifulsoup', 'TDD', 'Docker'],
    link: 'https://www.ofmhelper.de/',
    thumbnail: 'OFM_Helper.png',
  },
  {
    title: 'GoOLAP.info',
    subtitle: 'Faktensuchmasche',
    begin: '2010',
    end: '2011',
    description: 'GoOLAP ist eine Faktensuchmasche welche Internetseiten analysiert und relevante Daten miteinander kombiniert. Es wird als Forschungsprojekt am DIMA Lehrstuhl der TU Berlin entwickelt. Sebastian war Teil des Projektmanagement-Teams. Später schrieb er seine Bachelorarbeit zum Datenpersistierungskonzept des Projekts.',
    tags: ['Project Managemant', 'Hadoop', 'MySQL', 'Mantis'],
    link: 'http://goolap.info/',
    thumbnail: 'TU_DIMA_GoOLAP.png',
  },
  {
    title: 'Global Phenological Monitoring Programm (GPM)',
    subtitle: 'Webanwendung für die Humboldt Universität',
    begin: '',
    end: '2010',
    description: 'GPM ist ein globales Programm zur Beobachtung von bestimmtem Pflanzensorten und Analyse ihres Verhaltens im Kontext von meterologischen Daten. Während eines Projektkurses an der TU Berlin wurde hierfür eine Webanwendung entwickelt.',
    tags: ['Java', 'JSF', 'JSP', 'Subversion', 'Scrum', 'Trac', 'Spring', 'ant'],
    link: 'http://gpm.hu-berlin.de/',
    thumbnail: 'HU-Berlin.svg',
  },
];

export const VOLUNTEERING: CvItem[] = [
  {
    title: 'Technisches Hilfswerk',
    subtitle: 'Anwärter',
    begin: '2025',
    end: '',
    description: 'Grundausbildung im Ortsverband Berlin-Mitte',
    link: 'https://www.thw.de',
    thumbnail: 'THW.svg',
  },
  {
    title: 'DFB-Pokalfinals & Nationalmannschaft Länderspiele',
    subtitle: 'Einlass, Besucherservice, VIP Support, Springer, Sonderaufgaben',
    begin: '2007',
    end: '2016',
    description: 'Der Helferdienst (Volunteers) wurde durch den Berlinber Fußball-Verband organisiert für die Länderspiele,' +
      'sowie der DFB-Pokal-Endspiele der Männer, der Frauen, sowie der Junioren in Berlin.',
    link: 'https://www.dfb.de',
    thumbnail: 'DFB_mit_Schriftzug.png',
    // positions: [
    //   {
    //     title: 'DFB-Pokal-Finale',
    //     subtitle: '',
    //     end: '2016-05-21',
    //   },
    //   {
    //     title: 'DFB-Länderspiel: GER - ENG',
    //     subtitle: '',
    //     end: '2016-03-26',
    //   },
    //   {
    //     title: 'DFB-Länderspiel: GER - SWE',
    //     subtitle: '',
    //     end: '2012-10-16',
    //   },
    //   {
    //     title: 'DFB-Pokal-Endspiele',
    //     subtitle: '',
    //     end: '2012-05-12',
    //   },
    //   {
    //     title: 'DFB-Pokal-Endspiele',
    //     subtitle: '',
    //     end: '2011-05-21',
    //   },
    //   {
    //     title: 'DFB-Pokal-Endspiele',
    //     subtitle: '',
    //     end: '2010-05-15',
    //   },
    //   {
    //     title: 'DFB-Pokal-Endspiele',
    //     subtitle: '',
    //     end: '2009-05-30',
    //   },
    //   {
    //     title: 'DFB-Länderspiel: GER - ENG',
    //     subtitle: '',
    //     end: '2008-11-19',
    //   },
    //   {
    //     title: 'DFB-Pokal-Endspiele',
    //     subtitle: '',
    //     end: '2008-04-19',
    //   },
    //   {
    //     title: 'DFB-Pokal-Endspiele',
    //     subtitle: '',
    //     end: '2007-05-26',
    //   },
    // ]
  },
  {
    title: 'ISTAF & ISTAF Indoor',
    subtitle: 'Teamleiter',
    begin: '2007',
    end: '2016',
    description: 'Technischer Aufbau, Besucherservice, Ordnungsdienst, Sonderaufgaben, Abbau',
    link: 'https://www.istaf.de',
    thumbnail: 'ISTAF_ISTAF_Indoor.png',
    // positions: [
    //   {
    //     title: 'ISTAF Indoor',
    //     subtitle: 'Teamleiter Equipment',
    //     end: '2016-02-13',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Teamleiter Gegentribüne',
    //     begin: '2015-09-04',
    //     end: '2015-09-07',
    //   },
    //   {
    //     title: 'ISTAF Indoor',
    //     subtitle: 'Teamleiter Sonderaufgaben',
    //     end: '2015-02-14',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Sicherheitskoordinator Helferdienst',
    //     begin: '2014-08-29',
    //     end: '2014-09-01',
    //   },
    //   {
    //     title: 'ISTAF Indoor',
    //     subtitle: 'Sonderaufgaben',
    //     end: '2014-03-01',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Teamleiter Haupttribüne',
    //     begin: '2013-08-30',
    //     end: '2013-09-02',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Teamleiter Haupttribüne',
    //     begin: '2012-08-31',
    //     end: '2012-09-03',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Teamleiter Haupttribüne',
    //     begin: '2011-09-09',
    //     end: '2011-09-12',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Teamleiter Haupttribüne',
    //     begin: '2010-08-21',
    //     end: '2010-08-23',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Teamleiter Oberring',
    //     begin: '2009-06-12',
    //     end: '2009-06-15',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Siegerehrung',
    //     begin: '2008-05-30',
    //     end: '2008-06-02',
    //   },
    //   {
    //     title: 'ISTAF',
    //     subtitle: 'Siegerehrung',
    //     begin: '2008-09-14',
    //     end: '2008-09-17',
    //   },
    // ]
  },
  {
    title: 'UEFA Champions League Finals 2015 Berlin',
    subtitle: 'Teamleiter',
    begin: '',
    end: '2015',
    description: 'Teamleiter Besucherservice beim Finale der Frauen sowie beim Finale der Männer',
    link: 'https://www.uefa.com',
    thumbnail: 'UEFA_Champions_League.svg',
    // positions: [
    //     {
    //       title: 'UEFA Champions League Finale - Männer',
    //       subtitle: 'Teamleiter',
    //       end: '2015-06-06',
    //     },
    //     {
    //       title: 'UEFA Champions League Finale - Frauen',
    //       subtitle: '',
    //       end: '2015-05-14',
    //     },
    // ]
  },
  {
    title: 'CEV Champions League Final Four 2015 Berlin',
    subtitle: 'Teamleiter',
    begin: '',
    end: '2015',
    description: 'Leiter Backstage-Sicherheit',
    link: 'https://www.cev.eu/',
    thumbnail: 'CEV.png',
  },
  {
    title: 'Deutsche Indoor-Ruder-Serie',
    subtitle: 'Technischer Eventmanager',
    begin: '2010',
    end: '2015',
    description: 'Technischer Aufbau und Zeitmessung',
    link: 'https://www.concept2.de/indoor-rowers/indoor-regatten/dirm',
    thumbnail: 'Concept2_DIRS.png',
  },
  {
    title: 'Ruder-Bundesliga & Rowing Champions League',
    subtitle: 'Time measurement',
    begin: '2009',
    end: '2015',
    description: 'Technischer Aufbau und Zeitmessung',
    link: 'https://www.ruder-bundesliga.de',
    thumbnail: 'RBL_RCL.png',
  },
  {
    title: 'SCC Events & Berlin Läuft',
    subtitle: 'Aufbau, Streckenposten, Siegerehrung, Teamleiter',
    begin: '2007',
    end: '2015',
    description: 'Laufveranstaltungen: Berlin Marathon, 25km of Berlin, Great 10k, und viele andere',
    link: 'https://berlin-laeuft.de/volunteers/',
    thumbnail: 'SCCEvents_BerlinLaeuft.png',
  },
  {
    title: 'Deutsche Ruderjugend im Deutschen Ruderverband',
    subtitle: 'Jugendbetreuer',
    begin: '2007',
    end: '2014',
    description: 'Betreuung von Kindern und Jugendlichen in Trainingslagern, Wanderfahrten, Jugendlager zu den Olympischen Spielen',
    link: 'https://www.ruderjugend.org',
    thumbnail: 'DRJ_DRV.png',
  },
  {
    title: 'diverse Ruderregatten',
    subtitle: 'Aufbau, Helfer, Organisation, Zeitmessung',
    begin: '2005',
    end: '2015',
    description: 'u.a. Norddeutsche Meisterschaften in Hamburg, Lübecker Regatta, ' +
      'Bundeswettbewerb der Deustchen Ruderjugend, Bundesfinale "Jugend trainiert für Olympia", Oberhavel-Regatta ' +
      'und div. andere Regatten in Berlin',
    link: '',
    thumbnail: 'Regatten.png',
  },
  {
    title: 'FISA Ruder-Weltmeisterschaft Junioren 2014 Hamburg',
    subtitle: 'IT-Netzwerktechnik',
    begin: '',
    end: '2014',
    description: '',
    link: 'https://www.worldrowing.com/',
    thumbnail: 'FISA_JWM_2014.png',
  },
  {
    title: 'Hertha BSC',
    subtitle: 'Besucherservice, Sonderaufgaben, Teamleiter',
    begin: '2008',
    end: '2011',
    description: 'Betreuung von Gästen bei Heimspielen im Olympiastadion Berlin, zuletzt als Teamleiter. ' +
      'Bundesliga, UEFA-Cup, UEFA Europa League, DFB-Pokal, Freundschaftsspiele',
    link: 'https://www.hertha.de/',
    thumbnail: 'Hertha_BSC.svg',
  },
  {
    title: 'FIFA Fußball-Weltmeisterschaft Frauen 2011 Deutschland',
    subtitle: 'Besucherservice',
    begin: '',
    end: '2011',
    description: 'Besucherservice für Besucher der WM-Spiele im Olympiastadion Berlin.',
    link: 'https://www.fifa.com/',
    thumbnail: 'FIFA_Womens_World_Cup_2011.svg',
  },
  // {
  //   title: 'EHF EuroHockey Club-Champions-Cup Berlin',
  //   subtitle: 'Besucherservice',
  //   begin: '',
  //   end: '2010',
  //   description: 'Betreuung von Gästen während der Spiele im Hockeystadion im Olympiapark Berlin',
  //   link: '',
  //   thumbnail: 'EHF.jpg',
  // },
  {
    title: 'IAAF Leichtathletik-Weltmeisterschaft 2009 Berlin',
    subtitle: 'Anti-Doping-Chaperone',
    begin: '',
    end: '2009',
    description: '',
    link: 'https://www.iaaf.org/',
    thumbnail: 'IAAF_World_Championship_2009_Berlin.svg',
  },
  {
    title: 'ULEB Euroleague Final Four 2009 Berlin',
    subtitle: 'Teambegleiter',
    begin: '',
    end: '2009',
    description: 'Teambegleiter für die Basketball-Mannschaft von Montepaschi Siena (Italien)',
    link: 'https://www.euroleague.net/',
    thumbnail: 'ULEB_FinalFour_2009.png',
  },
  {
    title: 'FIFA Fußball-Weltmeisterschaft 2006 Deutschland',
    subtitle: 'Besucherservice',
    begin: '',
    end: '2006',
    description: 'Besucherservice für Besucher der WM-Spiele im Olympiastadion Berlin.',
    link: 'https://www.fifa.com/',
    thumbnail: 'FIFA_WM_2006_Deutschland.svg',
  },
  {
    title: 'Ruder-Verein "Preußen" e.V.',
    subtitle: '1. Vorsitzender, Stellv. Vorsitzender, Sportwart, Judendwart',
    begin: '2001',
    end: '2013',
    description: 'Ruder-Verein im Nordwesten von Berlin-Reinickendorf.',
    link: 'https://www.rv-preussen.de/',
    thumbnail: 'RVP_Flagge.jpg',
    // positions: [
    //   {
    //     title: '1. Vorsitzender',
    //     subtitle: '',
    //     end: '2013',
    //   },
    //   {
    //     title: 'Stellv. Vorsitzender',
    //     subtitle: '',
    //     end: '2012',
    //   },
    //   {
    //     title: 'Sportwart',
    //     subtitle: '',
    //     begin: '2008',
    //     end: '2009',
    //   },
    //   {
    //     title: 'Jugendwart',
    //     subtitle: '',
    //     begin: '2006',
    //     end: '2007',
    //   },
    // ]
  },
];

export const CONTACT = {
  city: 'Berlin, Germany',
  phone: '',
  mail: 'sebastian@schreck.berlin',
  linkedin: 'https://www.linkedin.com/in/sebastian-schreck-050739131/', // full url
  xing: 'https://www.xing.com/profile/Sebastian_Schreck2', // full url
  github: 'https://github.com/StegSchreck', // full url
  stackoverflow: 'https://stackoverflow.com/users/story/6538600', // full url
  twitter: '', // full url
  facebook: '', // full url
  instagram: '', // full url
  other: [
    { title: 'Medium', icon: 'icon-medium', link: 'https://medium.com/@stegschreck' },
    { title: 'GitHub Page', icon: 'icon-github', link: 'https://stegschreck.github.io' },
    { title: 'GitLab Page', icon: 'icon-gitlab', link: 'https://stegschreck.gitlab.io' },
  ],
};

export const INTERESTS = [
  {
    title: 'Fahrrad',
    icon: 'directions_bike',
  },
  {
    title: 'GeoCaching',
    icon: 'not_listed_location',
  },
  {
    title: 'Open Source Software',
    icon: 'code',
  },
  {
    title: 'Lesen',
    icon: 'icon-book',
  },
  {
    title: 'Rudern',
    icon: 'rowing',
  },
  {
    title: 'Fotografie',
    icon: 'camera_alt',
  },
  {
    title: 'Ehrenamt im Sport',
    icon: 'favorite',
  },
];

export const PUBLICATIONS: CvItem[] = [
  {
    title: 'How to Touch the Cloud',
    subtitle: 'Artikel veröffentlicht auf Medium / MakeItNew.io',
    begin: '',
    end: '2019-10-03',
    description: 'Über die verschiedenen Wege mit AWS zu kommunizieren.',
    tags: ['AWS', 'Python', 'Ansible', 'Terraform', 'S3', 'CloudFormation', 'SDK', 'CLI'],
    link: 'https://makeitnew.io/how-to-touch-the-cloud-d08bcf14debe',
    thumbnail: 'Medium_MakeItNew.png',
  },
  {
    title: 'The Speaker at the End of the Universe',
    subtitle: 'Artikel veröffentlicht auf Medium',
    begin: '',
    end: '2019-05-27',
    description: 'Wie man einen Vortrag auf einer Konferenz hält',
    tags: ['conference', 'speaker', 'public speaking'],
    link: 'https://medium.com/@stegschreck/the-speaker-at-the-end-of-the-universe-6fb8565587b6',
    thumbnail: 'Medium.svg',
  },
  {
    title: 'The Hitchhiker’s Guide to a Tech Conference',
    subtitle: 'Artikel veröffentlicht auf Medium',
    begin: '',
    end: '2019-05-20',
    description: 'Eine kleine Hilfestellung was beim Besuch einer Tech-Konferenz beachten sollte',
    tags: ['conference', 'visitor', 'attendee'],
    link: 'https://medium.com/@stegschreck/the-hitchhikers-guide-to-a-tech-conference-983c29b1e9ef',
    thumbnail: 'Medium.svg',
  },
  {
    title: 'Tear Down This Wall! - Overcoming Collaboration Obstacles on Your DevOps Journey',
    subtitle: 'Artikel veröffentlicht auf Medium / MakeItNew.io',
    begin: '',
    end: '2019-04-17',
    description: 'Eine Zusammenfassung des Konferenzvortrags \'Tear Down This Wall!\', gehalten auf der code.talks Commerce Special 2018 in Berlin und der DevOpsCon 2018 in Berlin. Über die Wege wie Mister Spex mehr Kollaboration bei seinen IT-Teams ermöglicht.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://makeitnew.io/tear-down-this-wall-c2211141fdb5',
    thumbnail: 'Medium_MakeItNew.png',
    attachment: 'tear-down-this-wall.pdf',
  },
];

export const TALKS: CvItem[] = [
  {
    title: 'Erfahrungen mit dem SAFe Framework in Großkonzernen',
    subtitle: '20 min. @ DB Agile Round Table',
    begin: '',
    end: '2024-03-14',
    description: 'Deep-dive wie das Scaled Agile Framework (SAFe) funktioniert und welche Stolperfallen man vermeiden sollte.',
    tags: ['SAFe', 'Agil', 'Scrum', 'Kultur', 'Kollaboration', 'Kommunikation'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7167808754770526209/',
    thumbnail: 'DB_ART_BERLIN.png',
  },
  {
    title: 'What is DevOps? - The Mindset behind the Buzzword',
    subtitle: '45 min. @ Netlight Architecture Barcamp',
    begin: '',
    end: '2022-11-05',
    description: 'Workshop zu den kulturellen und kommunikativen Grundlagen von DevOps.',
    tags: ['DevOps', 'Kultur', 'Kollaboration', 'Kommunikation', 'Enablement'],
    thumbnail: 'Netlight_Architecture_Barcamp_2022_Hamburg.png',
  },
  {
    title: 'Something, Something... DevOps - A Tale of two developers',
    subtitle: '20 min. @ Netlight EdgeX Vol. 8 - Mi Casa Es Su Casa',
    begin: '',
    end: '2020-11-19',
    description: 'The term "DevOps" has been around for a few years now. Yet, there are still misconceptions and uncertainties around it. We invite you to experience the stories of two developers from different realms to spark your curiosity about the mindset and values behind that sometimes mysterious buzzword "DevOps".',
    tags: ['DevOps', 'Kultur', 'Kollaboration', 'Kommunikation', 'Enablement'],
    thumbnail: 'Netlight_EdgeX_MiCasaEsSuCasa.png',
  },
  {
    title: 'Looking at a New-Born Star Through the Telescope: Architecture Review Approach at idealo',
    subtitle: '20 min. @ Netlight EdgeX Urknall',
    begin: '',
    end: '2020-06-17',
    description: 'After starting a new project on a green field, you sometimes wonder if you made the right choices at the beginning. This talk will give you an overview of how idealo\'s team product page took a step back and reviewed their early architecture decisions considering the learnings made on the way.',
    tags: ['Architektur', 'Arc42'],
    thumbnail: 'Netlight_EdgeX_Urknall.png',
  },
  {
    title: 'Bringing a complex stack to the cloud - Our journey and lessons learned',
    subtitle: '45 min. @ AWS Startup Day Berlin 2018',
    begin: '',
    end: '2018-10-09',
    description: 'Mister Spex ist in 2015 von der Cloud zu einer on-premise Infrastruktur migriert. In 2018 wurde wieder zurück in die Cloud migriert. Dieser Vortrag auf der AWS Veranstaltung erzählt die Geschichte sowie welche Erfahrungen und Probleme dabei enstanden.' +
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
    description: 'Die Diskussionen über DevOps fokussieren sich meist lediglich auf die zu verwendenden Tools für Automatisierung, CI/CD und Monitoring. Aber Automatisierung und Monitoring bringen einen nur den Teil des DevOps Weges. Die erste und womöglich anspruchvollste Herausforderung ist die entwickelte Software schnell zu den Kunden zu bringen. Dies setzt die Zusammenarbeit der Entwickler voraus, um so die Stabilität sowie der darunter liegenden Systeme zu gewährleisten. Dieser Vortrag behandelt die organisatorischen Aspekte von DevOps: Wie man die Effektivität von Teams misst und verbessert durch Abbau von Silos sowie die gemeinsame Verantwortung der Entwickler zu fördern - Die Basis einer erfolgreichen DevOps-Transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices', 'team structure'],
    link: 'https://jaxenter.com/devops-interview-schreck-uebel-145573.html',
    thumbnail: 'DevOpsCon_2018_Speaker.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '45 min. @ code.talks commerce special Berlin 2018',
    begin: '',
    end: '2018-04-13',
    description: 'Die Diskussionen über DevOps fokussieren sich meist lediglich auf die zu verwendenden Tools für Automatisierung, CI/CD und Monitoring. Aber Automatisierung und Monitoring bringen einen nur den Teil des DevOps Weges. Die erste und womöglich anspruchvollste Herausforderung ist die entwickelte Software schnell zu den Kunden zu bringen. Dies setzt die Zusammenarbeit der Entwickler voraus, um so die Stabilität sowie der darunter liegenden Systeme zu gewährleisten. Dieser Vortrag behandelt die organisatorischen Aspekte von DevOps: Wie man die Effektivität von Teams misst und verbessert durch Abbau von Silos sowie die gemeinsame Verantwortung der Entwickler zu fördern - Die Basis einer erfolgreichen DevOps-Transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://www.youtube.com/watch?v=KWw0H__mtxI',
    thumbnail: 'code-talks-commerce.png',
  },
];
