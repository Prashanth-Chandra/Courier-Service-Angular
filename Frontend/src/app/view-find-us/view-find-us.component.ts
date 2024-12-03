import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-view-find-us',
  templateUrl: './view-find-us.component.html',
  styleUrls: ['./view-find-us.component.css']
})
export class ViewFindUsComponent {
  scrollProgress = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
  
    // Calculate scroll progress (0 to 1.5 to allow over-scaling)
    this.scrollProgress = Math.min(scrollY / viewportHeight, 1.5);
  
    const findUsElement = document.getElementById('find-us');
    if (findUsElement) {
      // Dynamically scale and translate the text
      findUsElement.style.transform = `
        scale(${1 + this.scrollProgress * 3}) 
        translateY(${this.scrollProgress * -50}%)`;
      findUsElement.style.fontSize = `${5 + this.scrollProgress * 20}vw`;
    }
  }
  
}
