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

}
