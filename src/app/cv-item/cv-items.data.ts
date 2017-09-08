import { CvItem } from './cv-item';


export const GENERAL = {
  name: "Sebastian Schreck",
  position: "Software Engineer",
  description: "This website shall give you an impression of me and encourage your interest in hiring me. Please navigate through the site in order to find out more."
};

export const CVITEMS: CvItem[] = [
  {
    title: "Mister Spex GmbH",
    subtitle: "Professional Software Engineer",
    begin: "2017-02-01",
    end: "",
    description: "Maintaining an operating the platform running our e-commerce shop. Automating processes and enabling the development teams to work.",
    tags: ["Java", "Intershop", "Python", "Ansible", "Git", "KanBan", "PyCharm", "Apache", "AWS", "Docker", "Jira", "Bamboo", "Confluence", "bash", "Oracle SQL"],
    link: "https://www.misterspex.com",
    thumbnail: "msx-logo.png",
  },
  {
    title: "Mister Spex GmbH",
    subtitle: "Junior Software Engineer",
    begin: "2015-06-01",
    end: "2017-01-31",
    description: "Implementing features for the e-Commerce platform Intershop in order to customize it. Developing a seperated API as microservice for internal purposes in a DevOps way.",
    tags: ["Java", "Intershop", "eclipse", "Scrum", "Git", "SVN", "Scala", "Testrail", "trac", "Jira", "Bamboo", "Confluence", "AWS", "TDD", "JavaScript", "Oracle SQL"],
    link: "https://www.misterspex.com",
    thumbnail: "msx-logo.png",
  },
  {
    title: "Mister Spex GmbH",
    subtitle: "Working student Product Management / Quality Assurance",
    begin: "2012-10-01",
    end: "2015-05-31",
    description: "Ensuring the quality and functionality of the web shop, ERP software and their interfaces. Planning and conduct releases.",
    tags: ["Selenium", "Scrum", "Quality Assurance", "Release Management", "Testrail", "SVN", "trac", "Microsoft Dynamics NAV"],
    link: "https://www.misterspex.com",
    thumbnail: "msx-logo.png",
  },
  {
    title: "Müllers Fanshop",
    subtitle: "Merchandising salesman at O2World Berlin",
    begin: "2010-08",
    end: "2012-09",
    description: "Selling merchandising for sport events and concerts. Responsibility over one of the sale points.",
    link: "",
    thumbnail: "muellers_fanshop_logo_001.jpg",
  },
  {
    title: "MBU Merchandising und Sportreisen GmbH & Co. KG",
    subtitle: "Merchandising salesman at O2World Berlin",
    begin: "2008-09",
    end: "2010-07",
    description: "Selling merchandising for sport events and concerts. Responsibility over one of the sale points.",
    link: "",
    thumbnail: "mbu.png",
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: "Intershop Development",
    subtitle: "Intershop Communications AG",
    begin: "",
    end: "2015-04",
    description: "Overview (IS7-100), Intershop Frontend Development (IS7-114), Intershop Backend Programming (IS7-118)",
    link: "http://www.intershop.de/",
    thumbnail: "intershop.svg",
  },
  {
    title: "Git version control basics",
    subtitle: "Mister Spex GmbH",
    begin: "",
    end: "2014-05",
    description: "",
    thumbnail: "Git-Logo-2Color.png",
  },
  {
    title: "ITIL v3 Foundation Certificate",
    subtitle: "TÜV SÜD Akademie",
    begin: "",
    end: "2012-07",
    description: "",
    thumbnail: "itil_foundation.png",
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: "Technische Universität Berlin",
    subtitle: "Master of Science | Computer Science",
    begin: "2011-10",
    end: "2015-04",
    description: "",
    tags: ["Scrum", "SVN", "Git", "Java", "Scala", "eclipse", "Lua"],
    link: "http://www.tu-berlin.de",
    thumbnail: "TU-Berlin-Logo.png",
  },
  {
    title: "Technische Universität Berlin",
    subtitle: "Bachelor of Science | Computer Science",
    begin: "2008-10",
    end: "2011-12",
    description: "",
    tags: ["Scrum", "SVN", "Java", "C", "Assembler", "eclipse", "Opal"],
    link: "http://www.tu-berlin.de",
    thumbnail: "TU-Berlin-Logo.png",
  },
];

export const LANGUAGES = [
  { title: "German", level: "100" },
  { title: "English", level: "90" },
  { title: "Italian", level: "75" },
  { title: "French", level: "40" },
];

export const PROJECTS: CvItem[] = [
  {
    title: "RatS",
    subtitle: "Script for transfering personal movie ratings from one site to another",
    begin: "2017-02",
    end: "",
    description: "This Python project offers an easy way of synchronizing personal movie ratings from one site (e.g. IMDB) to another (e.g. Trakt)." +
    "The script supports more than 10 sites and is constantly expanding.",
    tags: ["Python", "Git", "Docker", "Selenium", "JSON", "CSV"],
    link: "https://github.com/StegSchreck/RatS",
    thumbnail: "RatS.png",
  },
  {
    title: "Recoding Aviation Hackathon",
    subtitle: "Hackathon for improving the passenger journey for flights",
    begin: "",
    end: "2017-06",
    description: "I participated in this hackathon together with three collegues. " +
    "We develpoed an idea how the passenger can be relieved from stress and anxiety at an airport. " +
    "We called the idea 'Unwait the airport'. Our idea convinced the technical experts of the Munich Airport, which awarded us their partner prize.",
    tags: ["AngularJS 2", "Material Design", "Git", "NodeJS", "ACI ACRIS Seamless Tavel API", "Express.js", "MongoDB", "twilio"],
    link: "https://github.com/StegSchreck/RecodingAviation",
    thumbnail: "re-coding-avation-ba.png",
  },
  {
    title: "OFM Helper",
    subtitle: "Support for analysis of data in football management browser game 'OFM'",
    begin: "2016-05",
    end: "2017-05",
    description: "OFM is a browser game where you manage a football team. " +
    "The 'OFM Helper' helps the user to analyse the data which emerges from games, trainings, etc. " +
    "We formed a two-man team for developing this project.",
    tags: ["Python", "Django", "Git", "Docker", "Selenium", "TDD"],
    link: "https://www.ofmhelper.de/",
    thumbnail: "OFM_Helper.png",
  },
];


export const VOLUNTEERING: CvItem[] = [
  {
    title: "DFB cup finals & international matches",
    subtitle: "Admission, visitor services, VIP support, stand-by man, special tasks",
    begin: "2007",
    end: "2016",
    description: "Admission, visitor services, VIP support, stand-by man, special tasks",
    link: "http://www.dfb.de",
    thumbnail: "DFB-Logo.jpg",
  },
  {
    title: "ISTAF & ISTAF Indoor",
    subtitle: "Team lead",
    begin: "2007",
    end: "2016",
    description: "Technical setup, visitor service, security, special tasks, teardown",
    link: "https://www.istaf.de",
    thumbnail: "ISTAF.png",
  },
  {
    title: "UEFA Champions League Finals 2015 Berlin",
    subtitle: "Team lead",
    begin: "",
    end: "2015",
    description: "Team lead visitor service",
    link: "https://www.uefa.com",
    thumbnail: "UEFA_Champions_League-logo.png",
  },
  {
    title: "CEV Champions league Final Four 2015 Berlin",
    subtitle: "Team lead",
    begin: "",
    end: "2015",
    description: "Team lead backstage security",
    link: "http://www.cev.lu/",
    thumbnail: "CEV_Champions_League_logo.png",
  },
  {
    title: "Ruder-Bundesliga",
    subtitle: "Time measurement",
    begin: "2009",
    end: "2015",
    description: "Technical setup and time measurements",
    link: "https://www.ruder-bundesliga.de",
    thumbnail: "Logo-Bundesliga_quer.jpg",
  },
  {
    title: "ULEB Euroleague Final Four 2009 Berlin",
    subtitle: "Team delegate",
    begin: "",
    end: "2009",
    description: "Team delegate of a basketeball team from Siena, Italy",
    link: "http://www.euroleague.net/",
    thumbnail: "ULEB_FinalFour_2009.png",
  },
  {
    title: "Deutsche Ruderjugend im Deutschen Ruderverband",
    subtitle: "Youth trainer and youth leader",
    begin: "2007",
    end: "2014",
    description: "Taking care of young rowers in training camps, recreational rowing tours, camp for visiting the Olympic Games 2012.",
    link: "https://www.ruderjugend.org",
    thumbnail: "DRJ_Logo.jpg",
  },
  {
    title: "FISA World Rowing Junior Championships 2014 Hamburg",
    subtitle: "IT network setup",
    begin: "",
    end: "2014",
    description: "",
    link: "http://www.worldrowing.com/",
    thumbnail: "FISA_JWM_2014.png",
  },
  {
    title: "Hertha BSC",
    subtitle: "Visitor services, special tasks, team lead",
    begin: "2008",
    end: "2011",
    description: "Guiding visitors of home matches in the olympic stadium in Berlin. Lastly, as team lead.",
    link: "http://www.hertha.de/",
    thumbnail: "Hertha_BSC_Logo.svg",
  },
  {
    title: "IAAF World Championships 2009 Berlin",
    subtitle: "Anti-Doping-Chaperone",
    begin: "",
    end: "2009",
    description: "",
    link: "https://www.iaaf.org/",
    thumbnail: "IAAF_2009_in_Berlin.png",
  },
  {
    title: "FIFA World Cup 2006 Germany",
    subtitle: "Visitor service",
    begin: "",
    end: "2006",
    description: "Guiding visitors of the olympic stadium in Berlin.",
    link: "https://www.fifa.com/",
    thumbnail: "fifa_world_cup_2006.gif",
  },
];

export const CONTACT = {
  city: "Berlin, Germany",
  phone: "",
  mail: "sebastian@schreck.berlin",
  skype: "", // just the account name
  linkedin: "https://www.linkedin.com/in/sebastian-schreck-050739131/",
  xing: "https://www.xing.com/profile/Sebastian_Schreck2",
  github: "https://github.com/StegSchreck",
  stackoverflow: "https://stackoverflow.com/users/story/6538600",
  twitter: "", // full url
  facebook: "",
  googleplus: "",
  other: [
    // { title: "another web page", link: "http://some.url" }, // example
  ],
};

export const INTERESTS = [
  {
    title:'Rowing',
    subtitle:'2000 — 2013',
    icon:'rowing'
  },
  {
    title:'Photography',
    subtitle:'Pentax K3 DSLR',
    icon:'camera_alt'
  },
  {
    title:'Volunteering in sports',
    subtitle:'2005 — 2016',
    icon:'favorite'
  },
];

