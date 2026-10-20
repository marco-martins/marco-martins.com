import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'site-footer',
  templateUrl: './site-footer.component.html',
})
export default class SiteFooterComponent {
  readonly year = new Date().getFullYear();
}
