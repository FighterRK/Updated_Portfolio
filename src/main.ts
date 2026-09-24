import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';


// const navigation =
//   performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

// const isReload = navigation?.type === 'reload';
// const currentPath = window.location.pathname;

// if (isReload && currentPath !== '/') {
//   window.location.replace('/');
// } else {
  bootstrapApplication(App, appConfig)
    .catch(err => console.error(err));
// }
