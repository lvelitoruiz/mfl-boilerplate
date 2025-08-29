import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { defineCustomElements } from 'ui-library/loader';

defineCustomElements();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
