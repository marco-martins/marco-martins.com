import { Service, signal } from '@angular/core';
import { Position } from '../models/position';
import { Project } from '../models/project';
import { Skill } from '../models/skill';

@Service()
export class DataService {
  skills = signal<Skill[]>([
    {
      id: 'front-end-mobile',
      title: 'Front-end & mobile',
      description:
        'Development of intuitive interfaces across devices, with attention to detail and performance.',
      tagsLabel: 'Front-end and mobile technologies',
      tags: ['Angular', 'React', 'React Native', 'TypeScript', 'RxJS', 'Tailwind CSS'],
    },
    {
      id: 'backend-infraestrutura',
      title: 'Backend & infrastructure',
      description:
        'API development, data organisation, infrastructure setup and continuous integration for production applications.',
      tagsLabel: 'Backend and infrastructure technologies',
      tags: ['Node.js', 'NestJS', 'REST APIs', 'PostgreSQL', 'NoSQL', 'Docker', 'Linux', 'CI/CD'],
    },
    {
      id: 'arquitetura-lideranca',
      title: 'Architecture & leadership',
      description:
        'Technical solution design, project management and leadership of development teams, with a focus on quality and knowledge sharing.',
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
      title: 'Product & innovation',
      description:
        'Development of SaaS, fintech and crypto products, and exploration of AI-powered solutions.',
      tagsLabel: 'Product and innovation domains',
      tags: ['SaaS', 'Fintech', 'Crypto', 'AI'],
    },
  ]);

  projects = signal<Project[]>([
    {
      id: 'wellocard',
      name: 'WelloCard',
      category: 'DIGITAL PRODUCT',
      description:
        'Digital business cards with personalised links and QR codes, for sharing contact details online or in print.',
      url: 'https://wellocard.com',
      image: {
        src: 'assets/project-wellocard-screen.jpg',
        alt: 'WelloCard website with a digital business card displayed on a phone',
      },
    },
    {
      id: 'cryptostash',
      name: 'CryptoStash',
      category: 'DIGITAL PRODUCT · CRYPTO',
      description:
        'Crypto portfolio management, with asset tracking, holdings and performance metrics in a single platform.',
      url: 'https://cryptostash.co/',
      image: {
        src: 'assets/project-cryptostash-screen.jpg',
        alt: 'CryptoStash charts and holdings for a demo portfolio',
      },
    },
    {
      id: 'my-dashboards',
      name: 'My Dashboards',
      category: 'DIGITAL PRODUCT',
      description:
        'Customisable dashboards with table and chart widgets connected to different data sources.',
      url: 'https://my-dashboards.com',
      image: {
        src: 'assets/project-my-dashboards-screen.jpg',
        alt: 'My Dashboards widgets, charts and desktop and mobile views',
      },
    },
    {
      id: 'bnotify',
      name: 'BNotify',
      category: 'DIGITAL PRODUCT · NOTIFICATIONS',
      description:
        'A real-time notification platform with a web dashboard, mobile app and public API for integrating alerts across applications.',
      url: 'https://bnotify.io',
      image: {
        src: 'assets/project-bnotify.svg',
        alt: 'Illustration of real-time notifications for bNotify',
      },
    },
    {
      id: 'fast-calendar',
      name: 'Fast Calendar',
      category: 'OPEN SOURCE · NPM',
      description:
        'A JavaScript library for building HTML calendars and adapting them to styling frameworks such as Bootstrap or Tailwind.',
      url: 'https://www.npmjs.com/package/fast-calendar',
      image: {
        src: 'assets/project-fast-calendar.svg',
        alt: 'Calendar illustration for the Fast Calendar library',
      },
    },
    {
      id: 'angular-line-awesome',
      name: 'Angular Line Awesome',
      category: 'OPEN SOURCE · NPM',
      description:
        'A lightweight Angular component for using and managing icons from the Line Awesome library.',
      url: 'https://www.npmjs.com/package/angular-line-awesome',
      image: {
        src: 'assets/project-angular-line-awesome.svg',
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
        'Development of a crypto portfolio management platform, from architecture to application. REST API, authentication, asset tracking, data infrastructure and deployment.',
      tags: ['Angular 20', 'NestJS', 'PostgreSQL', 'Docker'],
      url: 'https://cryptostash.co/',
    },
    {
      id: 'bnotify',
      organization: 'BNotify',
      role: 'SENIOR & FULL STACK DEVELOPER',
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
      url: 'https://one-pm.com/',
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
        'Development of business websites and front-end applications in PHP, with responsive interfaces and contributions to cultural and digital platforms.',
      tags: ['PHP', 'HTML5', 'CSS3', 'MySQL'],
      url: 'https://www.agap2.com/ti',
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
      url: 'https://op.liberopinion.com/',
    },
  ]);
}
