import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module'; // Importe o módulo principal do seu aplicativo aqui
import { environment } from './environments/environment'; // Importe o arquivo de ambiente correspondente

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
