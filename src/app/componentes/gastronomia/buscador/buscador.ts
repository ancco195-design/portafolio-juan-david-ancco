import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css',
})
export class Buscador {
  // @Input: Recibe la lista de platos desde el padre
  @Input() platos: string[] = [];

  // @Output: Envía el plato encontrado al padre
  @Output() platoEncontrado = new EventEmitter<string>();

  // Variable para guardar lo que el usuario escribe
  comidaBuscada: string = '';

  // Variable para mostrar mensajes
  mensaje: string = '';

  // Método que se ejecuta al hacer clic en "Buscar" o presionar Enter
  buscarComida(): void {
    // Convertimos a minúsculas para comparar
    const busqueda = this.comidaBuscada.toLowerCase().trim();

    // Verificamos si el plato existe en la lista
    if (this.platos.includes(busqueda)) {
      // ✅ Encontrado: Enviamos el evento al padre
      this.platoEncontrado.emit(busqueda);
      this.mensaje = `✅ ¡${this.comidaBuscada} encontrada! Llevándote...`;
      this.comidaBuscada = ''; // Limpiamos el input
    } else {
      // ❌ No encontrado: Mostramos mensaje
      this.mensaje = '❌ Comida no encontrada. Intenta con: Pachamanca, Chiriuchu, Cuy o Mazamorra';
    }
  }
}
