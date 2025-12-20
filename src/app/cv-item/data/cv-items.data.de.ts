import { CvItem } from '../cv-item';

/* eslint-disable max-len */
export const GENERAL = {
  name: 'Sebastian Schreck',
  position: 'Principal Software Entwickler',
  description: `Sebastian ist ein erfahrener Technologieexperte und Softwareentwickler mit über zehn Jahren Erfahrung, der fundierte technische Kompetenzen in Softwareentwicklung, Cloud-Architektur, und DevOps mit wirkungsstarker Führung und Mentoring kombiniert. Nach seinem Karriere-Start als QA-Werkstudent und Backend-/Frontend-Entwickler wechselte er in Führungspositionen, in denen er erfolgreich Legacy-Architekturen modernisierte, DevOps-Prinzipien und kollaborative Verantwortung etablierte und groß angelegte Cloud-Migrationsprojekte leitete. Sebastian hat umfangreiche Erfahrung in der Gestaltung skalierbarer Systeme, der Automatisierung von CI/CD-Pipelines und im Mentoring funktionsübergreifender Teams, um technische Exzellenz und Innovation voranzutreiben.

Sebastian fühlt sich in Umgebungen wohl, in denen er alle Phasen des Software-Lebenszyklus aktiv begleiten kann – von der Konzeption und Entwicklung bis hin zur Bereitstellung und Überwachung. Seine Expertise umfasst dabei Technologien wie Python, Java, AWS, Terraform, Docker, Kubernetes und CI/CD ebenso wie agile Methoden wie Scrum, Kanban und SAFe. Besonders wichtig sind ihm Software craftsmanship, sowie saubere Architekturen und Automatisierung, um Teams dazu zu befähigen, innovative, wartbare und zuverlässige Systeme zu entwickeln.

Darüber hinaus trägt Sebastian aktiv zur Skalierung von Organisationen bei – sei es durch die Rekrutierung neuer Talente, das Mentoring von Fachkräften oder die Organisation strategischer Wissensaustausch-Formate. Ein bemerkenswertes Beispiel dafür ist die erfolgreiche Durchführung des größten internen Wissensaustausch-Events bei Netlight, welches sich auf Software-Engineering- und Architektur-Themen fokussierte. Dank seiner einzigartigen Kombination aus technischer Expertise, Führungsqualitäten und kollaborativer Stärke ist Sebastian prädestiniert für Rollen wie Principal Engineer, Cloud Architect oder Engineering Manager – insbesondere in Unternehmen, die auf digitale Innovation, groß angelegte Systemmodernisierung oder Cloud-Transformation setzen.`,
};
/* eslint-enable max-len */

export const CVITEMS: CvItem[] = [
  {
    title: 'Netlight Consulting GmbH',
    subtitle: 'IT Consultant - Associate Manager',
    begin: '2019-01',
    end: '2025-12',
    description: `Netlight ist eine Beratungsgesellschaft, die den Schwerpunkt auf Zusammenarbeit legt, um maßgeschneiderte und wertvolle Ergebnisse für ihre Kunden zu liefern. Durch die vollständige Integration in die Kundenteams übertreffen die Berater regelmäßig die Erwartungen, indem sie die tatsächlichen Bedürfnisse der Kunden adressieren. Über seine Rolle als IT-Berater hinaus hat Sebastian wesentliche Beiträge zur Entwicklung sowohl von Kollegen als auch der Organisation insgesamt geleistet.

Als disziplinarischer Mentor förderte Sebastian kontinuierlich das Wachstum seiner Mentees, und trieb die globale „Welcome to Level“-Eventserie voran, die Karrieremeilensteine feiert. Außerdem übernimmt er eine zentrale Rolle als Pilot-Interviewer, indem er sich mit junior Interviewern zusammenschließt, um qualitativ hochwertige und evidenzbasierte Entscheidungen bei der Kandidatenbewertung sicherzustellen. Mit der Erfahrung aus über 50 durchgeführten technischen Interviews ist Sebastian maßgeblich an der Gestaltung der nächsten Generation von Netlightern beteiligt.

Sebastian hat den Umfang des Delivery Coachings erweitert, indem er Kollegen sowohl auf Kundenprojekten als auch in internen Rollen unterstützt, die Matching-Prozesse optimiert und Dashboards entwickelt hat, um die „Gesundheit“ des Coachings zu überwachen und zu verbessern. Als Engagement Coach richtete er die Arbeit der Delivery-Teams auf die Erwartungen der Kunden aus, während er weitere Möglichkeiten zur Zusammenarbeit identifizierte. Intern war Sebastian darüber hinaus Teil des Employer Value Proposition Teams und führte datengetriebene Ansätze in die Diskussionen rund um Gehalts- und Benefitstrukturen der fünf deutschen Standorte ein. Zusätzlich übernahm er die Rolle des strategischen Stakeholders in internen Projekten, z.B. zur Erstellung einer flexiblen Event-App, die sowohl für interne als auch externe Veranstaltungen genutzt wird.

Sebastians Führungsqualitäten zeigen sich besonders in seiner Verantwortung für die Organisation des größten globalen Wissensaustausch-Events von Netlight, das sich auf Themen aus den Bereichen Software Engineering und Architektur konzentrierte. Diese Initiativen verdeutlichen Sebastians Fähigkeit, technisches Fachwissen, Leadership und Zusammenarbeit zu vereinen, um wirkungsvolle Ergebnisse auf verschiedenen organisatorischen Ebenen zu erzielen.`,
    tags: ['Principal Engineer', 'Staff Engineer', 'Engineering Leadership', 'Product Owner', 'Mentoring', 'Coaching'],
    link: 'https://www.netlight.com',
    thumbnail: 'Netlight.svg',
    positions: [
      {
        title: 'Deutscher Verkehrsverbund',
        subtitle: 'Software Architekt & Staff Engineer',
        begin: '2025-09',
        end: '2025-12',
        description: 'Im Rahmen der Modernisierung seiner Software-Infrastruktur entwickelte der Kunde ein neues System zur Generierung und Verwaltung kundenbezogener Dokumente wie Ticketbestätigungen, Vertragskündigungen etc. Die Generierung der Dokumente wurde durch eine Ereigniswarteschlangennachricht ausgelöst. Das resultierende Dokument musste dem Kunden anschließend im Kundenportal und per E-Mail zur Verfügung gestellt werden. Sebastian war für die anfängliche Recherche der Lösung verantwortlich, einschließlich der Bewertung potenzieller Drittanbieterlösungen im Kontext der Make-or-Buy-Frage. Nachdem die Technologieentscheidung finalisiert und dokumentiert war, entwarf er die neue Systemarchitektur und unterteilte die Implementierungsarbeiten in Epics und Stories.',
        tags: ['Java', 'Spring Boot', 'Git', 'Jira', 'Confluence'],
        thumbnail: 'RMV_RMS.png',
      },
      {
        title: 'Skandinavische Bank',
        subtitle: 'Staff Consultant',
        begin: '2025-02',
        end: '2025-09',
        description: 'Unterstützung bei der Cloud-Migration einer skandinavischen Bank in Zusammenarbeit mit AWS ProServe, wobei Cutover.com-Runbooks, Terraform und Lambda-Funktionen zur Hyperautomatisierung und Optimierung der Workflows eingesetzt wurden. Entwicklung von EC2 Image Builder-Pipelines für konforme, wiederverwendbare AMIs mit Terraform IaC und einem GitOps-Ansatz sowie Aufbau der Infrastruktur für eine synthetische Anwendung, um Migrationsworkflows zu demonstrieren. Fokussiert auf Automatisierung-First-Strategien zur Steigerung von Effizienz und Einhaltung von Vorschriften in stark regulierten Umgebungen unter enger Zusammenarbeit mit AWS-Experten, um skalierbare und sichere Lösungen zu liefern.',
        tags: ['AWS', 'Terraform', 'Git', 'Python', 'PyCharm', 'Azure DevOps', 'Cutover', 'Lambda', 'KanBan', 'Jira', 'Confluence', 'bash', 'PowerShell'],
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
        tags: ['Python', 'Django', 'Git', 'KanBan', 'PyCharm', 'Poetry', 'Gitlab CI', 'Docker', 'Jira', 'SAFe', 'Scrum', 'AWS', 'Confluence', 'Jenkins', 'bash', 'Artifactory'],
        thumbnail: 'MBition.svg',
      },
      {
        title: 'Führende globale Wirtschaftsprüfungsgesellschaft',
        subtitle: 'Tech Lead & Technical Product Owner',
        begin: '2022-07',
        end: '2023-06',
        description: 'Sebastian leitete ein Engineering-Team zur Digitalisierung von Audit-Workflows, um Prozesse schneller, gründlicher und weniger fehleranfällig zu gestalten. Im Rahmen der globalen Digitalisierungsinitiative des Kunden arbeitete das Team an ETL-Prozessen für Versicherungsdaten mit Python, Docker und Azure. Sebastian steuerte die Kommunikation mit Stakeholdern, förderte den Wissensaustausch zur Lösung gemeinsamer Herausforderungen und führte Best Practices wie CI/CD, automatisierte Abhängigkeitsupdates und Schwachstellenscans ein. Darüber hinaus betreute er Compliance-Prozesse für maßgeschneiderte Anwendungen.',
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
        description: 'Sebastian war während eines M&A-Prozesses an der technischen Bewertung von zwei Zielunternehmen beteiligt. Dieser Prozess erforderte einen gründlichen Einblick in die verfügbaren Dokumentation und die Zusammenfassung des Standes der aktuellen technischen Landschaft der Unternehmen sowie die Ermittlung potenzieller Risiken und die Abgabe von Empfehlungen für den interessierten Investor in einer prägnanten Präsentation.',
        tags: [],
        thumbnail: 'EQT.svg',
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
        thumbnail: 'idealo_transparent.svg',
      },
      {
        title: 'Führende deutsche Immobilienplattform',
        subtitle: 'Senior Software Engineer & Cloud Architekt',
        begin: '2019-01',
        end: '2019-07',
        description: 'Sebastian arbeitete im Team verantwortlich für die Suchergebnisliste und Expose-Ansicht der Immobilien ' +
          'neben der Feature-Entwicklung auch an der Cloud-Migration.' +
          '\n\n' +
          'Später wurde Sebastian Teil eines neu-geformten Teams zur Automtisierung einer manuellen PoC Lösung. ' +
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
    description: 'Sebastian trug maßgeblich zum Erfolg von Mister Spex bei, indem er Backend- und Frontend-Funktionen für die auf Intershop basierende E-Commerce-Plattform entwickelte. Ein Schlüsselprojekt war die Entwicklung der GlassAPI, eines eigenständigen Microservices zur Preisberechnung und Funktionskonfiguration von Brillen, der den Logistikprozess vom Deployment des Webshop-Monolithen entkoppelte. Er erkannte den Wert von bereichsübergreifender Zusammenarbeit und trieb die Einführung von DevOps-Prinzipien voran, bevor er vollständig in das Infrastruktur-Team wechselte. In dieser Rolle automatisierte er Prozesse, erhöhte die Sicherheit der Plattform durch Maßnahmen gegen Hackerangriffe und leitete die Migration der Plattform zu AWS mithilfe von Infrastructure-as-Code-Tools wie CloudFormation und Ansible. Sebastians Arbeit ermöglichte es den Entwicklungsteams, Verantwortung für ihre Anwendungen zu übernehmen, und verbesserte Skalierbarkeit sowie Resilienz der E-Commerce-Plattform.',
    tags: ['Cloud', 'Infrastructure', 'Microservice', 'Architecture', 'Backend', 'Fullstack', 'Operations', 'DevOps Culture'],
    link: 'https://www.misterspex.com',
    thumbnail: 'MisterSpex.svg',
    positions: [
      {
        title: 'Webshop Infrastruktur',
        subtitle: 'Cloud / Infrastructure',
        begin: '2017',
        end: '2018-12',
        description: 'Im Bereich Infrastruktur-Operations bei Mister Spex konnte Sebastian durch die Modernisierung der Cloud-Operations und Verbesserung der Plattform-Sicherheit überzeugen. Ein Meilenstein war die Migration zentraler Services, einschließlich der Webshop-Anwendung, zurück in die AWS Cloud. Durch den Einsatz von Infrastructure as Code (IaC) mit Tools wie AWS CloudFormation und Ansible automatisierte er Entwicklungs- und Deployment-Prozesse und schuf eine sichere, skalierbare und belastbare Infrastruktur. Darüber hinaus setzte er Schutzmaßnahmen gegen Hackerangriffe um und führte interne Schulungen sowie Workshops ein, um Wissen und Best Practices im Team zu teilen. Mit seinem ganzheitlichen Ansatz optimierte Sebastian nicht nur die betriebliche Effizienz, sondern positionierte Mister Spex erfolgreich, um das Potenzial der Cloud-Technologien voll auszuschöpfen.',
        tags: ['GitLab CI', 'Git', 'Docker', 'Jira', 'KanBan', 'AWS', 'Confluence', 'Bamboo', 'Kubernetes', 'Ansible', 'Python', 'Apache HTTPD', 'bash', 'PyCharm'],
      },
      {
        title: 'Webshop Entwicklung',
        subtitle: 'Backend und Frontend',
        begin: '2015-06',
        end: '2017',
        description: 'Während seiner Zeit bei Mister Spex leistete Sebastian entscheidende Beiträge zur Weiterentwicklung des Webshops, mit einem Fokus auf Backend- und Frontend-Funktionalitäten sowie Microservice-Architektur. Ein besonders bedeutendes Projekt war die Konzeption und Umsetzung der GlassAPI, eines dedizierten Microservices zur Preisberechnung und Funktionskonfiguration von Brillen. Diese Lösung entkoppelte den ERP-basierten Logistikprozess vom Webshop-Monolithen und ermöglichte ungestörte Logistikabläufe während Webshop-Deployments. Durch die Integration des Microservices in die bestehende Systemlandschaft schuf Sebastian eine skalierbare und wartbare Lösung. Darüber hinaus arbeitete er an der Anpassung der kommerziellen E-Commerce-Plattform und überbrückte klassische Rollengrenzen zwischen Backend- und Frontendentwicklung, was die Effizienz im Team deutlich steigerte.',
        tags: ['Intershop', 'Java', 'Git', 'Jira', 'Scrum', 'Javascript', 'Maven', 'jQuery', 'AWS', 'Confluence', 'Bamboo', 'GitLab', 'Oracle PL/SQL', 'eclipse', 'bash', 'TDD'],
      },
    ],
  },
  {
    title: 'Mister Spex GmbH',
    subtitle: 'Werkstudent Produktmanagement / Quality Assurance',
    begin: '2012-10',
    end: '2015-05',
    description: 'Sicherstellung der Qualität und Funktionalität des Webshops, der ERP-Software und deren Schnittstellen. ' +
      'Planung und Durchführung von Releases.',
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
  {
    title: 'AWS Badge Migration Foundations',
    subtitle: 'Amazon Web Services (AWS)',
    begin: '',
    end: '2025-05-28',
    description: 'Dieses Badge zertifiziert technisches Wissen zu AWS Migratiosnkonzepten sowie Angeboten mit einem Schwerpunkt auf AWS Migration Evaluator, AWS Migration Hub und AWS Application Migration Service.',
    link: 'https://www.credly.com/badges/57dc5062-a373-40c7-9db2-9817183721cb',
    thumbnail: 'AWS_Badge_Migration_Foundations.png',
    attachment: '',
  },
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
    title: 'AngularCV',
    subtitle: 'Ein einfacher selbst-gehosteter Online-Lebenslauf',
    begin: '2017-09',
    end: '',
    description: 'Dieses Projekt wurde erstellt um einen simplen Online-Lebenslauf erstellen zu können, welchen jeder selbst hosten kann. Dieser Internetauftritt ist das Ergebnis davon.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'JetBrains WebStorm', 'AWS', 'jsPDF', 'yarn', 'npm'],
    link: 'https://github.com/StegSchreck/AngularCV',
    thumbnail: '../AngularCV.svg',
  },
  {
    title: 'THW Wallet',
    subtitle: 'Einscannen eines Barcodes und Umwandlung in einen Google Wallet Pass.',
    begin: '2025-10',
    end: '',
    description: 'Eine Single-Page Application (SPA) die einen Barcode einliest und den entsprechenden Google Wallet Pass erstellt.',
    tags: ['Go', 'React', 'CSS', 'JavaScript', 'JetBrains GoLand', 'AWS', 'serverless', 'Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudFront', 'Terraform', 'Gitlab CI', 'npm'],
    link: '',
    thumbnail: 'thw-wallet.svg',
  },
  {
    title: 'RatS',
    subtitle: 'Programm für den Transfer von Filmbewertungen von einem Internetportal zu einem anderen',
    begin: '2017-02',
    end: '',
    description: 'Dieses Python-Projekt bietet eine einfache Möglichkeit zur Übertragung der persönlichen Filmbewertungen von einer Seite (z.B. IMDB) zu einer anderen (z.B. Trakt). Aktuell unterstützt das Projekt 14 Seiten und wird kontinuierlich erweitert.',
    tags: ['Python', 'Git', 'Docker', 'Selenium', 'Beautifulsoup', 'JSON', 'CSV', 'Poetry', 'uv', 'ruff'],
    link: 'https://github.com/StegSchreck/RatS',
    thumbnail: 'RatS.png',
  },
  {
    title: 'UberPage',
    subtitle: 'Eine simple Internetseite zur Darstellung von verschiedenen Links.',
    begin: '2019-07',
    end: '',
    description: 'Dieses React-basierte Projekt bietet einen einfachen Weg verschiedene Links auf einer simplen Übersichtsseite darzustellen.',
    tags: ['React', 'Javascript', 'GitHub Actions', 'CSS', 'JetBrains WebStorm', 'AWS', 'S3', 'CloudFront', 'yarn', 'npm'],
    link: 'https://github.com/StegSchreck/uberpage',
    thumbnail: 'UberPage_kompakt.png',
  },
  {
    title: 'Beat the Host',
    subtitle: 'Von "Schlag den Raab" inspiriertes Spiel basierend auf Vue3.',
    begin: '2023-12',
    end: '2024-12',
    description: 'Web-Version für ein Spiel mit mehreren (konfigurierbaren) Einzelspielen mit aufsteigender Punktzahl.',
    tags: ['Vue.js', 'Javascript', 'GitHub Actions', 'CSS', 'JetBrains WebStorm', 'AWS', 'S3', 'CloudFront', 'npm'],
    link: 'https://github.com/WiSchLabs/beat-the-host',
    thumbnail: 'BeatTheHost.png',
  },
  {
    title: 'PP-Auxmoney-Parser',
    subtitle: 'Skript für die Erstellung einer CSV Datei mit den erwirtschafteten Zinsen aus Auxmoney Investitionen.',
    begin: '2019-07',
    end: '2023-07',
    description: 'Dieses Skript liest die Investitionen bei Auxmoney aus und erstellt eine CSV mit den erwirtschafteten Zinsen. ' +
      'Die CSV Datei ist so formatiert, dass sie problemlos in Portfolio Performance importiert werden kann.',
    tags: ['Python', 'Git', 'Selenium', 'Beautifulsoup', 'CSV', 'pip'],
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
    tags: ['Python', 'Django', 'Git', 'Selenium', 'Beautifulsoup', 'TDD', 'Docker', 'pip'],
    link: 'https://www.ofmhelper.de/',
    thumbnail: 'OFM_Helper.png',
  },
  {
    title: 'GoOLAP.info',
    subtitle: 'Faktensuchmasche',
    begin: '2010',
    end: '2011',
    description: 'GoOLAP ist eine Faktensuchmasche welche Internetseiten analysiert und relevante Daten miteinander kombiniert. Es wird als Forschungsprojekt am DIMA Lehrstuhl der TU Berlin entwickelt. Sebastian war Teil des Projektmanagement-Teams. Später schrieb er seine Bachelorarbeit zum Datenpersistierungskonzept des Projekts.',
    tags: ['Project Management', 'Hadoop', 'MySQL', 'Mantis'],
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
  {
    title: 'Internetauftritt mit Mitgliederbereich für Ruderverein',
    subtitle: '',
    begin: '2002',
    end: '2013',
    description: "Der Internetauftritt des Vereins machte nicht nur Werbung für den Verein und seinen Sport, sondern wurde nach und nach " +
      "erweitert. Eine selbst-entwickelte Bilder sowie ein Mitgliederbereich kaman hinzu. Der Mitlgiederbereich bat über Authentifizierung " +
      "und Authorisierung den Vereinsmitgliedern enstsprechenden Zugriff auf Dokumente und Funktionen. Darunter auch eine vollständiges " +
      "Mitgliederverwaltung für den Vereinsvorstand.",
    tags: ['PHP', 'HTML', 'MySQL', 'CSS', 'JavaScript', 'jQuery', 'PHPmyAdmin'],
    link: '',
    thumbnail: 'RVP_Flagge.jpg',
  },
];

export const VOLUNTEERING: CvItem[] = [
  {
    title: 'Technisches Hilfswerk',
    subtitle: 'Helfer',
    begin: '2025',
    end: '',
    description: 'Ehrenamtliche Einsatzkraft in der Fachgruppe Wasserschaden/Pumpen (WP) im THW Ortsverband Berlin-Mitte.',
    link: 'https://www.thw.de',
    thumbnail: 'THW.svg',
  },
  {
    title: 'DFB-Pokalfinals & Nationalmannschaft Länderspiele',
    subtitle: 'Einlass, Besucherservice, VIP Support, Springer, Sonderaufgaben',
    begin: '2007',
    end: '2016',
    description: 'Der Helferdienst (Volunteers) wurde durch den Berliner Fußball-Verband organisiert für die Länderspiele, ' +
      'sowie der DFB-Pokal-Endspiele der Männer, der Frauen, und der Junioren in Berlin.',
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
    subtitle: 'Zeitmessung',
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
    title: 'Ruder-Verein „Preußen“ e.V.',
    subtitle: '1. Vorsitzender, Stellv. Vorsitzender, Sportwart, Judendwart',
    begin: '2001',
    end: '2013',
    description: 'Ruder-Verein im Nordwesten von Berlin-Reinickendorf.',
    link: '',
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
    title: 'Fotografie',
    icon: 'camera_alt',
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
