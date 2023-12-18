import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<my-alert id="my-alert-id" alertText="Démo de l'alerte"></my-alert>`,
})
export class AppComponent {}
