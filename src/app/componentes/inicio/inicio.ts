import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TextoDestacadoPipe } from '../../pipes/texto-destacado-pipe';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, CommonModule, TextoDestacadoPipe],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
}
