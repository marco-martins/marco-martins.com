import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SiteHeaderComponent from './components/site-header/site-header.component';
import SiteFooterComponent from './components/site-footer/site-footer.component';

@Component({
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
