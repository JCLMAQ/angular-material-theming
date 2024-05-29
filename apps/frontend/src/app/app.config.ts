import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, withPreloading, withViewTransitions } from '@angular/router';
import { QuicklinkStrategy, quicklinkProviders } from 'ngx-quicklink';
import { appRoutes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(QuicklinkStrategy), withViewTransitions({ skipInitialTransition: true })),
    provideAnimationsAsync(),
    quicklinkProviders,
  ],
};


