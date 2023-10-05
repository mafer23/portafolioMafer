import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private offset1X: number=0;
  private offsetX = 0;


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const image = document.getElementById('gato');
    if (image) {
      const windowWidth = window.innerWidth;
      const mouseX = event.clientX;
      const range = 800; // Ajusta el rango de movimiento aquí
      
      // Calcula el desplazamiento en función de la posición del mouse
      this.offsetX = ((mouseX - windowWidth / 2) / windowWidth) * range;
      
      image.style.transform = `translateX(${this.offsetX}px)`;

   
    }

    
  }
  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const image = document.getElementById('gato');
    if (image) {
      if (event.key === 'ArrowRight') {
        this.offset1X += 10; // Ajusta la cantidad de movimiento a la derecha
      } else if (event.key === 'ArrowLeft') {
        this.offset1X -= 10; // Ajusta la cantidad de movimiento a la izquierda
      }

      image.style.transform = `translateX(${this.offset1X}px)`;
    }
  }

}
