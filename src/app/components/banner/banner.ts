import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner implements OnInit {

  public displayText: WritableSignal<string>=signal('');
  private text: string = `I build modern, responsive and user-friendly web applications. Passionate about creating impactful digital experiences.`;

  ngOnInit(): void {
    this.typeWritter()
  }
  typeWritter() {
    let index = 0;
    const interval = setInterval(() => {
      this.displayText.update(val=>val + this.text[index])

      index++
        
      if (index >= this.text.length) {
        clearInterval(interval)
      }
    }, 150)
  }

sendMessage(): void {
  window.open(
    'mailto:rahulksuresh16@gmail.com?subject=Let%27s%20Talk',
    '_blank'
  );
}

linkedIn(): void {
  window.open(
    'https://www.linkedin.com/in/rahul-k-suresh-bb7933220/',
    '_blank',
    'noopener,noreferrer'
  );
}


git(): void {
  window.open(
    'https://github.com/FighterRK?tab=repositories',
    '_blank',
    'noopener,noreferrer'
  );
}
}


