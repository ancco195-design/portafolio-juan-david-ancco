import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './componentes/cabecera/cabecera';
import { PiePagina } from './componentes/pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera, PiePagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-juan-david-ancco');
}
