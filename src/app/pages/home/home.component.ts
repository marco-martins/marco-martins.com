import { Component, inject } from '@angular/core';
import HeroComponent from './components/hero/hero.component';
import AboutComponent from './components/about/about.component';
import SkillsComponent from './components/skills/skills.component';
import ProjectsComponent from './components/projects/projects.component';
import CareerComponent from './components/career/career.component';
import ContactComponent from './components/contact/contact.component';
import { DataService } from './services/data.service';

@Component({
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    CareerComponent,
    ContactComponent,
  ],
  selector: 'home',
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  private readonly dataService = inject(DataService);

  readonly skills = this.dataService.skills();
  readonly projects = this.dataService.projects();
  readonly positions = this.dataService.positions();
}
