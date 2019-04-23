import { CvItem } from './cv-item';

export const GENERAL = {
  name: 'Nombre Apellidos',
  position: 'Profesión',
  description: 'Descripción' 
};

// De aquí en adelante, copia los elementos tantas veces como elementos quieras introducir en cada sección.

export const CVITEMS: CvItem[] = [
  {
    title: 'Empresa',
    subtitle: 'Puesto desempeñado',
    begin: '02/2018',
    end: '',
    description: '',
    tags: [],
    link: '',
    thumbnail: 'IMAGE.jpg',
  },
];

export const CERTIFICATES: CvItem[] = [

  {
    title: 'Titulo del certificado',
    subtitle: 'Organismo certificador',
    begin: '',
    end: '',
    description: '',
    link: '',
    thumbnail: '',
    attachment: '',
  },
  
];

export const EDUCATION: CvItem[] = [
  {
    title: 'Institución',
    subtitle: 'Título',
    begin: '',
    end: '',
    description: '',
    tags: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta n'],
    link: '',
    thumbnail: '',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Idioma 1', level: '100' },
  { title: 'Idioma 2', level: '80' },
  { title: 'Idioma 3', level: '75' },
  { title: 'Idioma n', level: '70' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'AngularCV-es',
    subtitle: 'Un currículum vitae online',
    begin: '2019-03',
    end: '',
    description: 'Traducción y adaptación del proyecto AngularCV. ' +
    'Esta página web es el resultado de este proyecto, gracias al código escrito por Sebastian Schreck ' + 'y traducido por Pelayo García',
    tags: ['Angular 4', 'Material Design', 'Web', 'CSS'],
    link: 'https://github.com/oyale/AngularCV-es',
    thumbnail: '../AngularCV.png',
  },
   
	
];

export const VOLUNTEERING: CvItem[] = [
   {
    title: 'Actividad voluntaria',
    subtitle: 'Brevísima explicación',
    begin: '01/2019',
    end: '03/2019',
    description: 'Una descripción larga ' + 'puede ser usada aquí ',
    tags: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta n'],
    link: '',
    thumbnail: '',
  },
];

export const CONTACT = {
  city: 'Ciudad',
  phone: '555-000-000',
  mail: 'correo@electroni.co',
  skype: '', // solo el nombre de la cuenta
  linkedin: '',
  xing: '',
  github: '',
  stackoverflow: '',
  twitter: '', // url del perfil
  facebook: '',
  googleplus: '',
  other: [
     { title: 'Ejemplo', link: 'http://ejemp.lo' }, // example
  ],
};

export const INTERESTS = [
  {
    title: 'Interes I',
    subtitle: 'Explicación',
    icon: 'build'
  },
  {
    title: 'Interés II',
    subtitle: 'Explicación',
    icon: 'landscape'
  },
  {
    title: 'Interés III',
    subtitle: 'Explicación',
    icon: 'theaters'
  },  
];

export const PUBLICATIONS: CvItem[] = [
  {
	title: 'Título de la publicación',
    subtitle: 'Medio de publicación',
    begin: '',
    end: '08/2016',
    description: '',
	link: '',
    tags: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta n'],
    thumbnail: '',
  },
];

export const TALKS: CvItem[] = [
   {
    title: 'Título de Charla o Presentación',
    subtitle: 'Lugar, tiempo de duración',
    begin: '',
    end: '28/07/2016',
    description: '',
    tags: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta n'],
    thumbnail: '',
  },
];
