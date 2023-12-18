import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ClrAlertModule} from "@clr/angular";

@Component({
  selector: 'my-alert',
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true,
  imports: [ClrAlertModule],
  template: `
      <clr-alert [clrAlertType]="alertType">
          <clr-alert-item>
              <span class="alert-text">{{alertText}}</span>
          </clr-alert-item>
      </clr-alert>
  `,
  styleUrls: [
    "../../../../node_modules/@clr/ui/clr-ui.min.css"
  ]
})
export class AlertComponent {
  @Input() alertType: "info"|"warning"|"success"|"danger" = "success";
  @Input({required: true}) alertText!: string;
}
