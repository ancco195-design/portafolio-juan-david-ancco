import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, CommonModule  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
}
