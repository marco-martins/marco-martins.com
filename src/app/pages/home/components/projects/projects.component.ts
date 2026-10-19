import { Component, input } from '@angular/core';
import { LeadingZeroPipe } from '../../../pipes/leading-zero.pipe';
import { Project } from '../../models/project';

@Component({
  imports: [LeadingZeroPipe],
  selector: 'projects',
  templateUrl: './projects.component.html',
})
export default class ProjectsComponent {
  items = input<Project[]>([]);
}
