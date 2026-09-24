import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  openTrackingApp(): void {
  window.open(
    'https://fighterrk.github.io/Tracking-App/',
    '_blank',
    'noopener,noreferrer'
  );
}

  openEmsApp(): void {
  window.open(
    'https://github.com/FighterRK/Tracking-App',
    '_blank',
    'noopener,noreferrer'
  );
}

openGitHub():void {
    window.open(
    'https://github.com/FighterRK?tab=repositories',
    '_blank',
    'noopener,noreferrer'
  );
}


}
