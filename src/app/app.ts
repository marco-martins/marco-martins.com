import { Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SiteHeaderComponent from './components/site-header/site-header.component';
import SiteFooterComponent from './components/site-footer/site-footer.component';
import { PlausibleService } from './services/plausible.service';

@Component({
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  private readonly plausible = inject(PlausibleService);

  constructor() {
    afterNextRender(() => {
      void this.plausible.init(
        'marco-martins.com',
        'https://plausible.marco-martins.com/api/event',
      );
    });
  }
}
