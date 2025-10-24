import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-futbol',
  imports: [],
  templateUrl: './futbol.html',
  styleUrl: './futbol.css',
})
export class Futbol {
constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'bg-animate');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'bg-animate');
  }
}
