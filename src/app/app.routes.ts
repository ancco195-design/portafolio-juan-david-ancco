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
import { Chiriuchu } from './componentes/gastronomia/chiriuchu/chiriuchu';
import { CuyChactado } from './componentes/gastronomia/cuy-chactado/cuy-chactado';
import { Mazamorra } from './componentes/gastronomia/mazamorra/mazamorra';
import { Pachamanca } from './componentes/gastronomia/pachamanca/pachamanca';
import { Futbol } from './componentes/deportes/futbol/futbol';
import { Ciclismo } from './componentes/deportes/ciclismo/ciclismo';
import { Aplicacion } from './componentes/proyectos/aplicacion/aplicacion';
import { Cerradura } from './componentes/proyectos/cerradura/cerradura';
import { Sistema } from './componentes/proyectos/sistema/sistema';
import { WebPersonal } from './componentes/proyectos/web-personal/web-personal';

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
    { path:'chiriuchu', component:Chiriuchu, title:'Chiriuchu'},
    { path:'cuy-chactado', component:CuyChactado, title:'Cuy Chactado'},
    { path:'mazamorra', component:Mazamorra, title:'Mazamorra'},
    { path:'pachamanca', component:Pachamanca, title:'Pachamanca'},
    { path:'futbol', component:Futbol, title:'Fútbol'},
    { path:'ciclismo', component:Ciclismo, title:'Ciclismo'},
    { path:'aplicacion', component:Aplicacion, title:'Aplicación'},
    { path:'cerradura', component:Cerradura, title:'Cerradura'},
    { path:'sistema', component:Sistema, title:'Sistema'},
    { path:'web-personal', component:WebPersonal, title:'Web Personal'},
    {path: '*', redirectTo: ''},
];
