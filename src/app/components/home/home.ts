import { Component } from '@angular/core';
import { Education } from '../education/education';
import { Certification } from '../certification/certification';
import { Contact } from '../contact/contact';
import { Banner } from '../banner/banner';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Experiences } from '../experiences/experiences';

@Component({
  selector: 'app-home',
  imports: [Education, Certification, Contact, Banner, About, Skills, Projects, Experiences],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
