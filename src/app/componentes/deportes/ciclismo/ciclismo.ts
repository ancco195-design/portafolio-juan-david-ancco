import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ciclismo',
  imports: [],
  templateUrl: './ciclismo.html',
  styleUrl: './ciclismo.css',
})
export class Ciclismo {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'bg-animate');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'bg-animate');
  }
}
