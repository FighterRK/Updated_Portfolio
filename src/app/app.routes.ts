import { Routes } from '@angular/router';
import { Home } from './components/home/home';
export const routes: Routes = [
  {
    path: '',
    component:Home
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about').then(m => m.About)
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./components/skills/skills').then(m => m.Skills)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./components/projects/projects').then(m => m.Projects)
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./components/experiences/experiences').then(m => m.Experiences)
  },
    {
    path: 'education',
    loadComponent: () =>
      import('./components/education/education').then(m => m.Education)
  },
      {
    path: 'certification',
    loadComponent: () =>
      import('./components/certification/certification').then(m => m.Certification)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact').then(m => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];