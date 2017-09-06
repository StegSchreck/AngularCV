import { CvItem } from './cv-item';

export const CVITEMS: CvItem[] = [
  {
    id: 1,
    title: "Mister Spex GmbH",
    subtitle: "Software Engineer",
    begin: "",
    end: "",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
    tags: ["Java", "Intershop", "Python", "Ansible", "Git"],
    link: "https://www.misterspex.com",
    thumbnail: "",
  },
  {
    id: 2,
    title: "International Eyewear GmbH",
    subtitle: "Software Engineer",
    begin: "2017-09-06",
    end: "2017-09-06",
    description: "Developing stuff ",
    link: "",
    thumbnail: "",
  },
];

export const EDUCATION: CvItem[] = [
  {
    id: 3,
    title: "Technische Universität Berlin",
    subtitle: "Bachelor of Science",
  },
  {
    id: 4,
    title: "Technische Universität Berlin",
    subtitle: "Master of Science",
    begin: "2017-09-06",
    end: "2017-09-06",
    description: "studying more stuff ",
    tags: ["asd"],
    link: "",
    thumbnail: "TU-Berlin-Logo.png",
  },
];
