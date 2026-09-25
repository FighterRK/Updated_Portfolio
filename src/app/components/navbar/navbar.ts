import { Component } from '@angular/core';
import { Theme } from '../../services/theme';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(public _theme:Theme){}
  downloadCV(): void {
  const link = document.createElement('a');

  link.href = '/Rahul_K_Suresh_CV.pdf';
  link.download = 'Rahul_K_Suresh_CV.pdf';

  link.click();
}
}
