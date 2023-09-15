import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

async function bootstrapApp() {
  try {
    await platformBrowserDynamic().bootstrapModule(AppModule);
    console.log('Aplicação Angular iniciada com sucesso!');
  } catch (error) {
    console.error(error);
  }
}

bootstrapApp();
