import { Component, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Banner } from './components/banner/banner';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experiences } from './components/experiences/experiences';
import { Education } from './components/education/education';
import { Certification } from './components/certification/certification';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Loader } from './components/loader/loader';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


 protected readonly title = signal('rahul-portfolio');
  isLoading = true;

constructor(private router: Router) {

    // Remove initial HTML loader
  document.getElementById('initial-loader')?.remove();

  this.router.events.subscribe(event => {

    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }

    if (event instanceof NavigationEnd) {
      this.isLoading = false;

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }

    if (
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      this.isLoading = false;
    }

  });
}

}
