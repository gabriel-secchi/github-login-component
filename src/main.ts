// Como injetamos as dependênvias do custom elemts nos nossos polyfills, temos que importar ele aqui no main
import './polyfills'

// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrapModule é a funcionalidade base para a execução do cliente angular,
// é ele que se encarrega de carregar e reenderizar a aplicação AppModule(app.module.ts);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
