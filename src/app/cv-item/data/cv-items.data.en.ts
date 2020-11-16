import { CvItem } from '../cv-item';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Sebastian Schreck',
  position: 'Software Engineer',
  description: `Sebastian started his career in IT as a QA Engineer during his studies of Computer Science at TU Berlin. After completing his master's thesis, Sebastian became a professional software engineer at Mister Spex doing backend as well as frontend development. Unhappy with the segregation between Operations and Development teams, he decided to transfer into Ops full time to get more insights. Having seen both sides of the wall of confusion, Sebastian became a strong advocate for DevOps principles and shared responsibility. He talked at code.talks and DevOpsCon about the topics DevOps, collaboration, feedback culture, and responsibilities.

Sebastian am looking for new opportunities which include modern, progressive technologies in a collaborative working environment. Learning new things and trying out new stuff are part of his motivation. New roles are of interest if he can accompany the software end to end - from planning, implementation, deployment towards monitoring. Amplified feedback loops and a culture of continuous learning and experimentation define a proper working environment for him. Job offers outside of Berlin are not relevant to him.

This website is designed to be a simple, self-hosted online-CV, based on Angular. To find out more about the project, please click on the AngularCV logo in the bottom right corner.`,
};
// tslint:enable:max-line-length

export const CVITEMS: CvItem[] = [
  {
    title: 'Netlight Consulting GmbH',
    subtitle: 'Senior Consultant',
    begin: '2019-01',
    end: '',
    description: 'Netlight is a genuine consulting firm. We refine the concept of IT-consulting to be about talents who, in cooperation, ' +
      'create valuable results for our clients. To continue to grow locally and internationally, we are looking for motivated team ' +
      'players & people with drive to join the Netlight team of inspiring, knowledgeable and emphatic talents. Currently we have offices ' +
      'in Stockholm, Oslo, Munich, Helsinki, Berlin, Hamburg, Copenhagen, Zurich, and Frankfurt. We are rapidly expanding on the European market.',
    tags: ['Java', 'SpringBoot', 'React', 'Kafka', 'MongoDB', 'Kubernetes', 'Git', 'KanBan', 'IntelliJ', 'Docker', 'Jira', 'Bamboo',
      'Scrum', 'AWS', 'Confluence', 'TeamCity', 'Jenkins', 'BitBucket', 'bash'],
    link: 'https://www.netlight.com',
    thumbnail: 'Netlight_Consulting_logo.svg',
  },
  {
    title: 'Mister Spex GmbH',
    subtitle: 'Professional Software Engineer',
    begin: '2015-06',
    end: '2018-12',
    description: 'Implementing features for the e-Commerce platform Intershop in order to customize it. ' +
      'Developing a separated API as microservice in a DevOps way, which is responsible for price calculation and ' +
      'feature configuration of prescription glasses. Later switched to the operations team. ' +
      'Maintaining and operating the platform running the e-commerce shop. ' +
      'Automating processes and enabling the development teams to work. ' +
      'Planned and executed the migration of several services to the cloud, including the main webshop application.',
    tags: ['Java', 'Intershop', 'Python', 'Ansible', 'Git', 'KanBan', 'PyCharm', 'Apache HTTPD', 'AWS', 'Docker', 'Jira', 'Bamboo', 'TDD',
      'JavaScript', 'eclipse', 'Scrum', 'Subversion', 'Scala', 'Testrail', 'trac', 'Confluence', 'bash', 'Kubernetes', 'Oracle PL/SQL'],
    link: 'https://www.misterspex.com',
    thumbnail: 'msx-logo.png',
  },
  {
    title: 'Mister Spex GmbH',
    subtitle: 'Working student Product Management / Quality Assurance',
    begin: '2012-10',
    end: '2015-05',
    description: 'Ensuring the quality and functionality of the web shop, ERP software and their interfaces. ' +
      'Planning and conduct releases.',
    tags: ['Selenium', 'Scrum', 'Quality Assurance', 'Release Management', 'Testrail', 'Subversion', 'trac', 'Microsoft Dynamics NAV'],
    link: 'https://www.misterspex.com',
    thumbnail: 'msx-logo.png',
  },
  {
    title: 'Müllers Fanshop',
    subtitle: 'Merchandising salesman at O2World Berlin',
    begin: '2010-08',
    end: '2012-09',
    description: 'Selling merchandising for sport events and concerts. Responsibility over one of the sale points.',
    link: '',
    thumbnail: 'muellers_fanshop_logo_001.jpg',
  },
  {
    title: 'MBU Merchandising und Sportreisen GmbH & Co. KG',
    subtitle: 'Merchandising salesman at O2World Berlin',
    begin: '2008-09',
    end: '2010-07',
    description: 'Selling merchandising for sport events and concerts. Responsibility over one of the sale points.',
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
    link: 'https://www.youracclaim.com/badges/feda3cd6-424a-4874-804f-60cb005aa546',
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
    title: 'Git version control basics',
    subtitle: 'Mister Spex GmbH',
    begin: '',
    end: '2014-05-12',
    description: '',
    thumbnail: 'Git-Logo-2Color.png',
    attachment: '',
  },
  {
    title: 'ITIL v3 Foundation Certificate',
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
    subtitle: 'Master of Science | Computer Science',
    begin: '2011-10',
    end: '2015-04',
    description: '',
    tags: ['Scrum', 'Subversion', 'Git', 'Java', 'Scala', 'eclipse', 'Lua', 'Maven'],
    link: 'http://www.tu-berlin.de',
    thumbnail: 'TU-Berlin-Logo.png',
  },
  {
    title: 'Technische Universität Berlin',
    subtitle: 'Bachelor of Science | Computer Science',
    begin: '2008-10',
    end: '2011-12',
    description: '',
    tags: ['Scrum', 'Subversion', 'Java', 'C', 'Assembler', 'eclipse', 'Opal', 'ant'],
    link: 'http://www.tu-berlin.de',
    thumbnail: 'TU-Berlin-Logo.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'German | Deutsch', level: '100' },
  { title: 'English', level: '80' },
  { title: 'Italian | Italiano', level: '70' },
  { title: 'French | Français', level: '30' },
  { title: 'Swedish | Svenska', level: '15' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'RatS',
    subtitle: 'Script for transfering personal movie ratings from one site to another',
    begin: '2017-02',
    end: '',
    description: 'This Python project offers an easy way of synchronizing personal movie ratings from one site (e.g. IMDB) ' +
      'to another (e.g. Trakt). The script supports 13 sites currently and is constantly expanding.',
    tags: ['Python', 'Git', 'Docker', 'Selenium', 'Beautifulsoup', 'JSON', 'CSV'],
    link: 'https://github.com/StegSchreck/RatS',
    thumbnail: 'RatS.png',
  },
  {
    title: 'AngularCV',
    subtitle: 'A simple self-hosted online-CV',
    begin: '2017-09',
    end: '',
    description: 'This project was created for the purpose of having a basic online-CV, which anyone can host by themselves. ' +
      'This very website is the result of it.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'JetBrains WebStorm', 'AWS', 'jsPDF', 'npm'],
    link: 'https://github.com/StegSchreck/AngularCV',
    thumbnail: '../AngularCV.svg',
  },
  {
    title: 'UberPage',
    subtitle: 'A simple self-hosted website as overview on different self-defined links',
    begin: '2019-07',
    end: '',
    description: 'This project aims to offer a simple overview website for different links.',
    tags: ['React', 'Javascript', 'GitHub', 'CSS', 'JetBrains WebStorm', 'AWS', 'npm'],
    link: 'https://github.com/StegSchreck/uberpage',
    thumbnail: 'UberPage_kompakt.png',
  },
  {
    title: 'PP-Auxmoney-Parser',
    subtitle: 'Python based parser for Auxmoney to import to Portfolio Performance',
    begin: '2019-07',
    end: '',
    description: 'This script creates a CSV with the interests you received for your investments at Auxmoney. ' +
      'The CSV is created in a format to be imported to Portfolio Performance.',
    tags: ['Python', 'Git', 'Selenium', 'Beautifulsoup', 'CSV'],
    link: 'https://github.com/StegSchreck/PP-Auxmoney-Parser',
    thumbnail: 'PP-Auxmoney-Parser.png',
  },
  {
    title: 'IS24 Price Per Area',
    subtitle: 'Chrome extension to display the price per m² on ImmoScout',
    begin: '2020-02',
    end: '',
    description: 'Show price per m² on the search result pages, the shortlist page, and the expose pages of ImmobilienScout24. ' +
      'The extension also allows a colored highlighting with customizable thresholds.' +
      'Not affiliated with ImmobilienScout24 GmbH.',
    tags: ['Javascript', 'CSS', 'MaterialDesign', 'Chrome'],
    link: 'https://github.com/StegSchreck/is24-price-per-area',
    thumbnail: 'is24-price-per-area.svg',
  },
  {
    title: 'Recoding Aviation Hackathon',
    subtitle: 'Hackathon for improving the passenger journey for flights',
    begin: '',
    end: '2017-06',
    description: 'Sebastian participated in this hackathon together with three collegues. ' +
      'They develpoed an idea how the passenger can be relieved from stress and anxiety at an airport. ' +
      'The idea was named \'Unwait the airport\'. The resulting idea convinced the technical experts of the Munich Airport, ' +
      'which awarded their partner prize.',
    tags: ['Angular 2', 'MaterialDesign', 'Git', 'NodeJS', 'ACI ACRIS Seamless Tavel API', 'Express.js', 'MongoDB', 'twilio'],
    link: 'https://github.com/StegSchreck/RecodingAviation',
    thumbnail: 're-coding-avation-ba.png',
  },
  {
    title: 'OFM Helper',
    subtitle: 'Support for analysis of data in football management browser game \'OFM\'',
    begin: '2016-05',
    end: '2017-05',
    description: 'OFM is a browser game where you manage a football team. ' +
      'The \'OFM Helper\' helps the user to analyse the data which emerges from matches, trainings, etc. ' +
      'We formed a two-man team for developing this project.',
    tags: ['Python', 'Django', 'Git', 'Selenium', 'Beautifulsoup', 'TDD', 'Docker'],
    link: 'https://www.ofmhelper.de/',
    thumbnail: 'OFM_Helper.png',
  },
  {
    title: 'GoOLAP.info',
    subtitle: 'Fact search engine',
    begin: '2010',
    end: '2011',
    description: 'GoOLAP is a fact search engine, which crawls the web and combines relevant data using natural language processing. ' +
      'It is a research project at the DIMA department of TU Berlin. ' +
      'Sebastian was part of the team which was responsible of the project management. ' +
      'Later he wrote his bachelor thesis about the data persistence layer of the application.',
    tags: ['Project Managemant', 'Hadoop', 'MySQL', 'Mantis'],
    link: 'http://goolap.info/',
    thumbnail: 'TU_DIMA_GoOLAP.png',
  },
  {
    title: 'Global Phenological Monitoring Programm (GPM)',
    subtitle: 'Web-application for the Humboldt University',
    begin: '',
    end: '2010',
    description: 'The GPM is a global program for monitoring specific plants and analysing their behavior in the context of ' +
      'weather data. The web-application was created during a project course at the TU Berlin, which Sebastian took part at.',
    tags: ['Java', 'JSF', 'JSP', 'Subversion', 'Scrum', 'Trac', 'Spring', 'ant'],
    link: 'http://gpm.hu-berlin.de/',
    thumbnail: 'Huberlin-logo.png',
  },
];

export const VOLUNTEERING: CvItem[] = [
  {
    title: 'DFB cup finals & international matches',
    subtitle: 'Admission, visitor services, VIP support, stand-by man, special tasks',
    begin: '2007',
    end: '2016',
    description: 'Admission, visitor services, VIP support, stand-by man, special tasks',
    link: 'http://www.dfb.de',
    thumbnail: 'DFB-Logo.jpg',
  },
  {
    title: 'ISTAF & ISTAF Indoor',
    subtitle: 'Team lead',
    begin: '2007',
    end: '2016',
    description: 'Technical setup, visitor service, security, special tasks, teardown',
    link: 'https://www.istaf.de',
    thumbnail: 'ISTAF.png',
  },
  {
    title: 'UEFA Champions League Finals 2015 Berlin',
    subtitle: 'Team lead',
    begin: '',
    end: '2015',
    description: 'Team lead visitor service',
    link: 'https://www.uefa.com',
    thumbnail: 'UEFA_Champions_League-logo.png',
  },
  {
    title: 'CEV Champions League Final Four 2015 Berlin',
    subtitle: 'Team lead',
    begin: '',
    end: '2015',
    description: 'Team lead backstage security',
    link: 'http://www.cev.lu/',
    thumbnail: 'CEV_Champions_League_logo.png',
  },
  {
    title: 'German indoor rowing series',
    subtitle: 'Technical event manager',
    begin: '2010',
    end: '2015',
    description: 'Technical setup and time measurements',
    link: 'https://www.concept2.de/indoor-rowers/indoor-regatten/dirm',
    thumbnail: 'dirs_logo.jpg',
  },
  {
    title: 'Ruder-Bundesliga',
    subtitle: 'Time measurement',
    begin: '2009',
    end: '2015',
    description: 'Technical setup and time measurements for rowing Bundesliga.',
    link: 'https://www.ruder-bundesliga.de',
    thumbnail: 'Logo-Bundesliga_quer.jpg',
  },
  {
    title: 'Deutsche Ruderjugend im Deutschen Ruderverband',
    subtitle: 'Youth trainer and youth leader',
    begin: '2007',
    end: '2014',
    description: 'Taking care of young rowers in training camps, recreational rowing tours, camp for visiting the Olympic Games.',
    link: 'https://www.ruderjugend.org',
    thumbnail: 'DRJ_Logo.jpg',
  },
  {
    title: 'FISA World Rowing Junior Championships 2014 Hamburg',
    subtitle: 'IT network setup',
    begin: '',
    end: '2014',
    description: '',
    link: 'http://www.worldrowing.com/',
    thumbnail: 'FISA_JWM_2014.png',
  },
  {
    title: 'Hertha BSC',
    subtitle: 'Visitor services, special tasks, team lead',
    begin: '2008',
    end: '2011',
    description: 'Guiding visitors of home matches in the olympic stadium in Berlin. Lastly, as team lead.',
    link: 'http://www.hertha.de/',
    thumbnail: 'Hertha_BSC_Logo.svg',
  },
  {
    title: 'IAAF World Championships 2009 Berlin',
    subtitle: 'Anti-Doping-Chaperone',
    begin: '',
    end: '2009',
    description: '',
    link: 'https://www.iaaf.org/',
    thumbnail: 'IAAF_2009_in_Berlin.png',
  },
  {
    title: 'ULEB Euroleague Final Four 2009 Berlin',
    subtitle: 'Team delegate',
    begin: '',
    end: '2009',
    description: 'Team delegate of a basketeball team of Montepaschi Siena, Italy',
    link: 'http://www.euroleague.net/',
    thumbnail: 'ULEB_FinalFour_2009.png',
  },
  {
    title: 'FIFA World Cup 2006 Germany',
    subtitle: 'Visitor service',
    begin: '',
    end: '2006',
    description: 'Guiding visitors of the olympic stadium in Berlin.',
    link: 'https://www.fifa.com/',
    thumbnail: 'fifa_world_cup_2006.jpg',
  },
];

export const CONTACT = {
  city: 'Berlin, Germany',
  phone: '',
  mail: 'sebastian@schreck.berlin',
  skype: '', // just the account name
  linkedin: 'https://www.linkedin.com/in/sebastian-schreck-050739131/', // full url
  xing: 'https://www.xing.com/profile/Sebastian_Schreck2', // full url
  github: 'https://github.com/StegSchreck', // full url
  stackoverflow: 'https://stackoverflow.com/users/story/6538600', // full url
  twitter: 'https://twitter.com/StegSchreck', // full url
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
    title: 'Cycling',
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
    title: 'Reading',
    icon: 'icon-book',
  },
  {
    title: 'Rowing',
    icon: 'rowing',
  },
  {
    title: 'Photography',
    icon: 'camera_alt',
  },
  {
    title: 'Volunteering in sports',
    icon: 'favorite',
  },
];

export const PUBLICATIONS: CvItem[] = [
  {
    title: 'How to Touch the Cloud',
    subtitle: 'Article published on Medium / MakeItNew.io',
    begin: '',
    end: '2019-10-03',
    description: 'Different Possibilities on How to Interact with AWS',
    tags: ['AWS', 'Python', 'Ansible', 'Terraform', 'S3', 'CloudFormation', 'SDK', 'CLI'],
    link: 'https://makeitnew.io/how-to-touch-the-cloud-d08bcf14debe',
    thumbnail: 'Medium_MakeItNew.png',
  },
  {
    title: 'The Speaker at the End of the Universe',
    subtitle: 'Article published on Medium',
    begin: '',
    end: '2019-05-27',
    description: 'How to Give a Talk at a Tech Conference',
    tags: ['conference', 'speaker', 'public speaking'],
    link: 'https://medium.com/@stegschreck/the-speaker-at-the-end-of-the-universe-6fb8565587b6',
    thumbnail: 'medium.png',
  },
  {
    title: 'The Hitchhiker’s Guide to a Tech Conference',
    subtitle: 'Article published on Medium',
    begin: '',
    end: '2019-05-20',
    description: 'A little How-To for Engineers how to visit a Tech Conference',
    tags: ['conference', 'visitor', 'attendee'],
    link: 'https://medium.com/@stegschreck/the-hitchhikers-guide-to-a-tech-conference-983c29b1e9ef',
    thumbnail: 'medium.png',
  },
  {
    title: 'Tear Down This Wall! - Overcoming Collaboration Obstacles on Your DevOps Journey',
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
    title: 'Something, Something... DevOps - A Tale of two developers',
    subtitle: '20 min. @ Netlight EdgeX Vol. 8 - Mi Casa Es Su Casa',
    begin: '',
    end: '2020-11-19',
    description: 'The term "DevOps" has been around for a few years now. Yet, there are still misconceptions and uncertainties around it. We invite you to experience the stories of two developers from different realms to spark your curiosity about the mindset and values behind that sometimes mysterious buzzword "DevOps".',
    tags: ['DevOps', 'Culture', 'Collaboration', 'Communication', 'Enablement'],
    thumbnail: 'Netlight_EdgeX_MiCasaEsSuCasa.png',
  },
  {
    title: 'Looking at a New-Born Star Through the Telescope: Architecture Review Approach at idealo',
    subtitle: '20 min. @ Netlight EdgeX Urknall',
    begin: '',
    end: '2020-06-17',
    description: 'After starting a new project on a green field, you sometimes wonder if you made the right choices at the beginning. This talk will give you an overview of how idealo\'s team product page took a step back and reviewed their early architecture decisions considering the learnings made on the way.',
    tags: ['Architecture', 'Arc42'],
    thumbnail: 'NetlightEdgeXUrknall.png',
  },
  {
    title: 'Bringing a complex stack to the cloud - Our journey and lessons learned',
    subtitle: '45 min. @ AWS Startup Day Berlin 2018',
    begin: '',
    end: '2018-10-09',
    description: 'Mister Spex moved away from AWS to an on-premises infrastructure in 2015. In 2018 they switched back to AWS. This talk covers the story of these changes and the lessons learned.',
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
      'stability of the software as well as the systems it runs on. This talk focuses on the organizational ' +
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
