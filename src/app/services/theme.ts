import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {

  private isDark = true;
  constructor(){
    this.setTheme('dark')
    
  }

  toggleTheme(event:MouseEvent) {
        event.stopPropagation()
        //  event.preventDefault(); 
    this.isDark = !this.isDark;
    this.setTheme(
      this.isDark ? 'dark' : 'light'
    );

  }

  private setTheme(id:'dark' | 'light'){
    document.documentElement.setAttribute('data-theme',id)


  setTimeout(() => {
     document.documentElement.classList.add('theme-transition');
  });
       
  }
}
