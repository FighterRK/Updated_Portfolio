import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  public description:Signal<string> = signal(`I'm a Software Engineer with a strong foundation in front-end and back-end development. I enjoy turning ideas into real-world applications and continuously learning new technologies to improve my craft.`);
  public aboutMe:Signal<string> = signal('About Me')

}
