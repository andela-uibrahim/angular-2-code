import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {LoggerService} from './util/logger.service';
import {APP_ROUTER_PROVIDERS} from './app.routes';

bootstrap(AppComponent,
         [APP_ROUTER_PROVIDERS]);
