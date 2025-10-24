import { Component } from '@angular/core';
import { Recetas } from './recetas/recetas';
import { Andahuaylas } from './andahuaylas/andahuaylas';
import { Buscador } from './buscador/buscador';

@Component({
  selector: 'app-gastronomia',
  imports: [Recetas, Andahuaylas, Buscador],
  templateUrl: './gastronomia.html',
  styleUrl: './gastronomia.css',
})
export class Gastronomia {
// Lista de platos disponibles (se pasa al hijo con @Input)
  platosDisponibles: string[] = ['pachamanca', 'chiriuchu', 'cuy', 'mazamorra'];

  // Método que recibe el evento del hijo (@Output)
  irASeccion(idSeccion: string): void {
    // Busca el elemento en el HTML por su ID
    const elemento = document.getElementById(idSeccion);
    
    if (elemento) {
      // Hace scroll suave hacia ese elemento
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Método para los links normales
  scrollTo(event: Event, seccion: string): void {
    event.preventDefault();
    this.irASeccion(seccion);
  }
}
