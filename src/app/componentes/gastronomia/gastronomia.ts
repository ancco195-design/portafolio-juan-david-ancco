import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Recetas } from './recetas/recetas';
import { Andahuaylas } from './andahuaylas/andahuaylas';

@Component({
  selector: 'app-gastronomia',
  imports: [RouterLink, Recetas, Andahuaylas],
  templateUrl: './gastronomia.html',
  styleUrl: './gastronomia.css',
})
export class Gastronomia {
  /**
   * Scroll suave hacia un elemento por id.
   * Previene el comportamiento por defecto del enlace y busca el elemento en el DOM.
   */
  scrollTo(event: Event, id: string) {
    event.preventDefault();
    // Intenta encontrar el elemento inmediatamente
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
  }
}
