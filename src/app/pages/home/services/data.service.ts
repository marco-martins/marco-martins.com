import { Service, signal } from '@angular/core';
import { Position } from '../models/position';
import { Project } from '../models/project';
import { Skill } from '../models/skill';

@Service()
export class DataService {
  skills = signal<Skill[]>([
    {
      id: 'front-end-mobile',
      title: 'Front-End & Mobile',
      description:
        'Development of intuitive web and mobile interfaces, with attention to detail, accessibility and performance. Reusable components and consistent interactions that support a coherent user experience and simplify ongoing maintenance.',
      tagsLabel: 'Front-end and mobile technologies',
      tags: ['Angular', 'React', 'React Native', 'TypeScript', 'RxJS', 'Tailwind CSS'],
    },
    {
      id: 'backend-infraestrutura',
      title: 'Backend & Infrastructure',
      description:
        'API development, data organisation, infrastructure setup and continuous integration for production applications. Reliable backend services and repeatable deployment processes that keep applications running smoothly and make updates easier to deliver.',
      tagsLabel: 'Backend and infrastructure technologies',
      tags: ['Node.js', 'NestJS', 'REST APIs', 'PostgreSQL', 'NoSQL', 'Docker', 'Linux', 'CI/CD'],
    },
    {
      id: 'arquitetura-lideranca',
      title: 'Architecture & Leadership',
      description:
        'Software architecture, project management and technical leadership, with a focus on code quality and knowledge sharing. Practical guidance, mentoring and code reviews that help teams make informed decisions and deliver maintainable software.',
      tagsLabel: 'Architecture and leadership skills',
      tags: [
        'Architecture',
        'Code quality',
        'Mentoring',
        'Release management',
        'Project management',
        'Testing',
      ],
    },
    {
      id: 'produto-inovacao',
      title: 'Product & Innovation',
      description:
        'Development of SaaS, fintech and crypto products, alongside exploration of AI-powered solutions. Turning ideas into working applications, aligning technical decisions with user needs and refining features through feedback and real-world use.',
      tagsLabel: 'Product and innovation domains',
      tags: ['SaaS', 'Fintech', 'Crypto', 'AI'],
    },
  ]);

  projects = signal<Project[]>([
    {
      id: 'wellocard',
      name: 'WelloCard',
      category: 'DIGITAL PRODUCT · DIGITAL BUSINESS CARDS',
      description:
        'Digital business cards with personalised links and QR codes that make it easy to share contact details online or on printed materials.',
      url: 'https://wellocard.com',
      image: {
        src: 'assets/project-wellocard.jpg',
        alt: 'WelloCard website with a digital business card displayed on a phone',
      },
    },
    {
      id: 'cryptostash',
      name: 'CryptoStash',
      category: 'DIGITAL PRODUCT · CRYPTO PORTFOLIO',
      description:
        'A crypto portfolio platform that brings asset tracking, holdings, allocations, transactions and performance metrics together in one place.',
      url: 'https://cryptostash.co/',
      image: {
        src: 'assets/project-cryptostash.jpg',
        alt: 'CryptoStash charts and holdings for a demo portfolio',
      },
    },
    {
      id: 'my-dashboards',
      name: 'My Dashboards',
      category: 'DIGITAL PRODUCT',
      description:
        'Personalised dashboards with a variety of widgets that can be added, arranged and customised to display information from different data sources.',
      url: 'https://my-dashboards.com',
      image: {
        src: 'assets/project-my-dashboards.jpg',
        alt: 'My Dashboards widgets, charts and desktop and mobile views',
      },
    },
    {
      id: 'bnotify',
      name: 'Bnotify',
      category: 'DIGITAL PRODUCT · NOTIFICATIONS',
      description:
        'A real-time notification platform with a web dashboard, mobile app and public API for integrating alerts across applications.',
      url: 'https://bnotify.io',
      image: {
        src: 'assets/project-bnotify.jpg',
        alt: 'Illustration of real-time notifications for Bnotify',
      },
    },
    {
      id: 'fast-calendar',
      name: 'Fast Calendar',
      category: 'OPEN SOURCE · NPM',
      description:
        'A JavaScript library for building HTML calendars with flexible styling to fit frameworks such as Bootstrap or Tailwind CSS.',
      url: 'https://www.npmjs.com/package/fast-calendar',
      image: {
        src: 'assets/project-fast-calendar.jpg',
        alt: 'Calendar illustration for the Fast Calendar library',
      },
    },
    {
      id: 'angular-line-awesome',
      name: 'Angular Line Awesome',
      category: 'OPEN SOURCE · NPM',
      description:
        'A lightweight Angular component that makes it easy to use icons from the Line Awesome library in Angular applications.',
      url: 'https://www.npmjs.com/package/angular-line-awesome',
      image: {
        src: 'assets/project-angular-line-awesome.jpg',
        alt: 'Icon illustration for the Angular Line Awesome component',
      },
    },
  ]);

  positions = signal<Position[]>([
    {
      id: 'cryptostash',
      organization: 'CryptoStash',
      role: 'FOUNDER & FULL STACK DEVELOPER',
      context: ['PORTUGAL'],
      startDate: '2024-09-01',
      endDate: '2026-05-31',
      description:
        'Development of a crypto portfolio management platform, from initial architecture to deployment. Work included the REST API, authentication, asset tracking and data infrastructure.',
      tags: ['Angular 20', 'NestJS', 'PostgreSQL', 'Docker'],
      url: 'https://cryptostash.co',
    },
    {
      id: 'bnotify',
      organization: 'Bnotify',
      role: 'SENIOR FULL STACK DEVELOPER',
      context: [],
      startDate: '2022-11-01',
      endDate: '2024-12-31',
      description:
        'Architecture and development of a real-time notification platform. Web dashboard, mobile app, public API and backend services focused on performance and low latency.',
      tags: ['Angular', 'React Native', 'NestJS', 'Node.js'],
      url: 'https://bnotify.io',
    },
    {
      id: 'first-advisory',
      organization: 'First Advisory',
      role: 'LEAD FRONTEND ENGINEER',
      context: ['ZURICH, SWITZERLAND'],
      startDate: '2015-07-01',
      endDate: '2023-06-30',
      description:
        'Leadership of front-end development and architecture for a fintech platform. Angular applications, reusable components, financial data integration, code quality and developer mentoring.',
      tags: ['Angular', 'TypeScript', 'Sass', 'REST APIs'],
      url: 'https://first.li',
    },
    {
      id: 'teambook-sa',
      organization: 'Teambook SA',
      role: 'SOFTWARE DEVELOPER',
      context: ['GENEVA, SWITZERLAND'],
      startDate: '2013-05-01',
      endDate: '2015-05-31',
      description:
        'Full stack development of a platform for team scheduling, project management and time tracking. Interactive interfaces, business logic and database integration.',
      tags: ['Ruby on Rails', 'AngularJS', 'PostgreSQL'],
      url: 'https://teambookapp.com',
    },
    {
      id: 'load-interactive',
      organization: 'LOAD Interactive',
      role: 'SOFTWARE DEVELOPER',
      context: ['FREELANCER', 'AVEIRO, PORTUGAL'],
      startDate: '2012-06-01',
      endDate: '2012-12-31',
      description:
        'Development of responsive web applications and mobile-first interfaces for projects including Elections and Abbott, with third-party service integration.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
      url: 'https://load.digital',
    },
    {
      id: 'garagem24',
      organization: 'Garagem24',
      role: 'SOFTWARE DEVELOPER',
      context: ['PERSONAL PROJECT'],
      startDate: '2011-11-01',
      endDate: '2012-04-30',
      description:
        'Development of a web platform from scratch using Ruby on Rails, including responsive interfaces, backend logic and database integration.',
      tags: ['Ruby on Rails', 'MySQL', 'Sass'],
    },
    {
      id: 'agap2-it-france',
      organization: 'Agap2 IT France',
      role: 'WEB DEVELOPER',
      context: ['LISBON, PORTUGAL'],
      startDate: '2011-06-01',
      endDate: '2011-12-31',
      description:
        'Development of business websites and PHP web applications, with responsive interfaces and contributions to cultural and digital platforms.',
      tags: ['PHP', 'HTML5', 'CSS3', 'MySQL'],
      url: 'https://www.agap2.com',
    },
    {
      id: 'libertrium',
      organization: 'Libertrium',
      role: 'SOFTWARE DEVELOPER',
      context: ['VISEU, PORTUGAL'],
      startDate: '2009-06-01',
      endDate: '2010-08-31',
      description:
        'Development of web applications and multimedia solutions, spanning front-end and backend work and interactive applications in Adobe Flex and AIR.',
      tags: ['PHP', 'HTML5', 'Adobe Flex', 'Adobe AIR'],
      url: 'https://op.liberopinion.com',
    },
  ]);
}
