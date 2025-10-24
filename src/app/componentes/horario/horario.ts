import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-horario',
  imports: [],
  templateUrl: './horario.html',
  styleUrl: './horario.css',
})
export class Horario {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'bg-animate');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'bg-animate');
  }
}
