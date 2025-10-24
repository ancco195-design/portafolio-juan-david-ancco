import { Component } from '@angular/core';
import { Horario } from '../horario/horario';
import { Proyectos } from '../proyectos/proyectos';
import { Dificultades } from '../dificultades/dificultades';

@Component({
  selector: 'app-universidad',
  imports: [Horario, Proyectos, Dificultades],
  templateUrl: './universidad.html',
  styleUrl: './universidad.css',
})
export class Universidad {

}
