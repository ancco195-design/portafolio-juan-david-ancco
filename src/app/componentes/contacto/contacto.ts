import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  // Variables para capturar datos del formulario
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  
  // Variable para mostrar mensaje de éxito
  mensajeEnviado: boolean = false;

  // Método que se ejecuta al hacer clic en "Enviar"
  enviarMensaje(): void {
  // Validación: verifica que todos los campos tengan contenido
  if (!this.nombre.trim() || !this.email.trim() || !this.mensaje.trim()) {
    // No hace nada si están vacíos
    return;
  }
  
  // Si todos los campos están completos:
  console.log('Datos del formulario:');
  console.log('Nombre:', this.nombre);
  console.log('Email:', this.email);
  console.log('Mensaje:', this.mensaje);
  
  // Mostrar mensaje de éxito
  this.mensajeEnviado = true;
  
  // Limpiar formulario después de 2 segundos
  setTimeout(() => {
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.mensajeEnviado = false;
  }, 2000);
  }
} 