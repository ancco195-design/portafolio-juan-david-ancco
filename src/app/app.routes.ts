import { Routes } from '@angular/router';
import { Inicio } from './componentes/inicio/inicio';
import { SobreMi } from './componentes/sobre-mi/sobre-mi';
import { Universidad } from './componentes/universidad/universidad';
import { Gastronomia } from './componentes/gastronomia/gastronomia';
import { Trabajo } from './componentes/trabajo/trabajo';
import { Deportes } from './componentes/deportes/deportes';
import { Horario } from './componentes/horario/horario';
import { Proyectos } from './componentes/proyectos/proyectos';
import { Dificultades } from './componentes/dificultades/dificultades';
import { Andahuaylas } from './componentes/gastronomia/andahuaylas/andahuaylas';
import { Futbol } from './componentes/deportes/futbol/futbol';
import { Ciclismo } from './componentes/deportes/ciclismo/ciclismo';

export const routes: Routes = [
    { path:'', component:Inicio, title:'Inicio'},
    { path:'sobre-mi', component:SobreMi, title:'Sobre Mí'},
    { path:'universidad', component:Universidad, title:'Universidad'},
    { path:'gastronomia', component:Gastronomia, title:'Gastronomía'},
    { path:'trabajo', component:Trabajo, title:'Trabajo'},
    { path:'deportes', component:Deportes, title:'Deportes'},
    { path:'horario', component:Horario, title:'Horario'},
    { path:'proyectos', component:Proyectos, title:'Proyectos'},
    { path:'dificultades', component:Dificultades, title:'Dificultades'},
    { path:'andahuaylas', component:Andahuaylas, title:'Andahuaylas'},
    { path:'futbol', component:Futbol, title:'Fútbol'},
    { path:'ciclismo', component:Ciclismo, title:'Ciclismo'},
    {path: '*', redirectTo: ''},
];
