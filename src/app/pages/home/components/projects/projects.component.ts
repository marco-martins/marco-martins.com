import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { LeadingZeroPipe } from '../../../pipes/leading-zero.pipe';
import { Project } from '../../models/project';

@Component({
  imports: [LeadingZeroPipe, NgOptimizedImage],
  selector: 'projects',
  templateUrl: './projects.component.html',
})
export default class ProjectsComponent {
  items = input<Project[]>([]);
}
