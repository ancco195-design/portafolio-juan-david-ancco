import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-deportes',
  imports: [RouterLink],
  templateUrl: './deportes.html',
  styleUrl: './deportes.css',
})
export class Deportes {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'bg-animate');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'bg-animate');
  }
}
