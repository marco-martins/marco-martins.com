import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export default class ContactComponent {
  loadMail(): void {
    window.location.href = 'mailto:marco_martins@me.com?subject=Contact from the website';
  }
}
