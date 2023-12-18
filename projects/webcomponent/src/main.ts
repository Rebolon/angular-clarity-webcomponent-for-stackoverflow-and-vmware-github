import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AlertComponent } from "./app/alert.component";


(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const alertElement = createCustomElement(AlertComponent, {
    injector: app.injector,
  });

  customElements.define('my-alert', alertElement);

})();
