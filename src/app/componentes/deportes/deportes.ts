import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Deportista } from '../../modelos/deporte';
import { DeportesService } from '../../servicios/deportes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deportes',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './deportes.html',
  styleUrl: './deportes.css',
})
export class Deportes {
    // Listas de deportistas (usadas en *ngFor)
  futbolistas: Deportista[] = [];
  ciclistas: Deportista[] = [];

  // Variable para mostrar/ocultar el mensaje (usada en *ngIf)
  mostrarMensaje: boolean = true;

  constructor(private deportesService: DeportesService) { }

  ngOnInit(): void {
    // Obtenemos los datos del servicio
    this.futbolistas = this.deportesService.obtenerFutbolistas();
    this.ciclistas = this.deportesService.obtenerCiclistas();
  }

  // Método para cerrar el mensaje
  cerrarMensaje(): void {
    this.mostrarMensaje = false;
  }
}
