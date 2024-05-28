import { bootstrapApplication } from '@angular/platform-browser';
    import { StepsRoutingDemo } from './app/steps-routing-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(StepsRoutingDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));