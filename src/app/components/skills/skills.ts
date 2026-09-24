import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit {

  selectedCategory = 'frontend';

  currentIndex = 0;

  visibleCards = 4;


  // =========================================
  // SKILLS
  // =========================================

  public imgSet = [

    // FRONTEND

    {
      id: 'react',
      category: 'frontend',
      name: 'React',
      img: 'react.png'
    },

    {
      id: 'angular',
      category: 'frontend',
      name: 'Angular',
      img: 'angular.png'
    },

    {
      id: 'typescript',
      category: 'frontend',
      name: 'TypeScript',
      img: 'ts.png'
    },

    {
      id: 'javascript',
      category: 'frontend',
      name: 'JavaScript',
      img: 'js.png'
    },

    {
      id: 'html',
      category: 'frontend',
      name: 'HTML5',
      img: 'html.png'
    },

    {
      id: 'css',
      category: 'frontend',
      name: 'CSS3',
      img: 'css.png'
    },

    {
      id: 'd3',
      category: 'frontend',
      name: 'D3.js',
      img: 'd3.png'
    },

    {
      id: 'ngrx',
      category: 'frontend',
      name: 'NgRx',
      img: 'ngrx.png'
    },

    {
      id: 'rxjs',
      category: 'frontend',
      name: 'RxJS',
      img: 'rxjs.png'
    },
        {
      id: 'bootstrap',
      category: 'frontend',
      name: 'Bootstrap',
      img: 'bootstrap.png'
    },
        {
      id: 'tailwind',
      category: 'frontend',
      name: 'Tailwind',
      img: 'tailwindcss.png'
    },


    // BACKEND

    {
      id: 'node',
      category: 'backend',
      name: 'Node.js',
      img: 'node.png'
    },

    {
      id: 'express',
      category: 'backend',
      name: 'Express.js',
      img: 'express.png'
    },

    {
      id: 'mongodb',
      category: 'backend',
      name: 'MongoDB',
      img: 'mongodb.png'
    },







    // TOOLS

{
  id: 'git',
  category: 'tools',
  name: 'Git',
  img: 'git.png'
},

{
  id: 'github',
  category: 'tools',
  name: 'GitHub',
  img: 'github.png'
},

{
  id: 'claude',
  category: 'tools',
  name: 'Claude',
  img: 'claude.png'
},

{
  id: 'githubcopilot',
  category: 'tools',
  name: 'GitHub Copilot',
  img: 'githubcopilot.png'
},

{
  id: 'postman',
  category: 'tools',
  name: 'Postman',
  img: 'postman.png'
},

{
  id: 'gitlab',
  category: 'tools',
  name: 'GitLab',
  img: 'gitlab.png'
},


    // METHODOLOGIES

    {
      id: 'agile',
      category: 'methodologies',
      name: 'Agile',
      img: 'agile.png'
    },

    {
      id: 'scrum',
      category: 'methodologies',
      name: 'Scrum',
      img: 'scrum.svg'
    }

  ];


  // =========================================
  // FILTERED SKILLS
  // =========================================

  get filteredSkills() {

    return this.imgSet.filter(
      item => item.category === this.selectedCategory
    );

  }


  // =========================================
  // CATEGORY
  // =========================================

  selectCategory(category: string) {

    this.selectedCategory = category;

    this.currentIndex = 0;

  }


  // =========================================
  // NEXT
  // =========================================

  next() {

    const maxIndex = Math.max(
      0,
      this.filteredSkills.length - this.visibleCards
    );

    if (this.currentIndex < maxIndex) {

      this.currentIndex++;

    }

  }


  // =========================================
  // PREVIOUS
  // =========================================

  previous() {

    if (this.currentIndex > 0) {

      this.currentIndex--;

    }

  }


  // =========================================
  // BUTTON STATES
  // =========================================

  get canGoPrevious() {

    return this.currentIndex > 0;

  }


  get canGoNext() {

    return this.currentIndex <
      Math.max(
        0,
        this.filteredSkills.length - this.visibleCards
      );

  }


  // =========================================
  // RESPONSIVE CARD COUNT
  // =========================================

  updateVisibleCards() {

    if (window.innerWidth <= 420) {

      this.visibleCards = 1;

    } else if (window.innerWidth <= 650) {

      this.visibleCards = 2;

    } else if (window.innerWidth <= 900) {

      this.visibleCards = 3;

    } else {

      this.visibleCards = 4;

    }


    // Prevent index from becoming invalid
    const maxIndex = Math.max(
      0,
      this.filteredSkills.length - this.visibleCards
    );

    if (this.currentIndex > maxIndex) {

      this.currentIndex = maxIndex;

    }

  }


  // =========================================
  // WINDOW RESIZE
  // =========================================

  @HostListener('window:resize')
  onResize() {

    this.updateVisibleCards();

  }


  ngOnInit(): void {

    this.updateVisibleCards();

  }

}