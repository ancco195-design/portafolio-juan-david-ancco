import { Component } from '@angular/core';
import { Horario } from '../horario/horario';
import { Proyectos } from '../proyectos/proyectos';
import { Dificultades } from '../dificultades/dificultades';
import { UniversidadService } from '../../servicios/universidad.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-universidad',
  imports: [Horario, Proyectos, Dificultades, CommonModule, FormsModule],
  templateUrl: './universidad.html',
  styleUrl: './universidad.css',
})
export class Universidad {
  // Variable para controlar si está cargando
  cargando: boolean = true;

  // Variable para controlar si los datos ya están listos
  datosListos: boolean = false;

  constructor(private universidadService: UniversidadService) { }

  // Método async que se ejecuta al iniciar
  async ngOnInit(): Promise<void> {
    await this.cargarDatosUniversidad();
  }

  // Método async para cargar datos
  async cargarDatosUniversidad(): Promise<void> {
    try {
      // Mostramos el loading
      this.cargando = true;

      // Esperamos a que el servicio cargue los datos
      await this.universidadService.cargarDatos();

      // Datos cargados, ocultamos el loading
      this.cargando = false;
      this.datosListos = true;

    } catch (error) {
      console.error('Error al cargar datos:', error);
      this.cargando = false;
    }
  }
}
