import { Component, input } from '@angular/core';
import { LeadingZeroPipe } from '../../../pipes/leading-zero.pipe';
import { Skill } from '../../models/skill';

@Component({
  imports: [LeadingZeroPipe],
  selector: 'skills',
  templateUrl: './skills.component.html',
})
export default class SkillsComponent {
  items = input<Skill[]>([]);
}
