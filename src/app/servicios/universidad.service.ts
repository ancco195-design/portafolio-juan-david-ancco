import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  // Simula cargar datos del horario (tarda 2 segundos)
  cargarDatos(): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulamos que tarda 2 segundos en cargar
      setTimeout(() => {
        resolve(true); // Datos cargados exitosamente
      }, 2000);
    });
  }
}