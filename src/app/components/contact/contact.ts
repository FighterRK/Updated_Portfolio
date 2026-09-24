import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

    sendMessage(): void {
    window.location.href =
      'mailto:rahulksuresh16@gmail.com?subject=Let%27s%20Talk';
  }
}
