import { Injectable } from '@angular/core';
import { Deportista } from '../modelos/deporte';

@Injectable({
  providedIn: 'root'
})
export class DeportesService {

  // Método que devuelve la lista de futbolistas
  obtenerFutbolistas(): Deportista[] {
    return [
      {
        nombre: 'Lionel Messi',
        imagen: '../../imagenes/lionel messi.jpeg',
        link: 'https://es.wikipedia.org/wiki/Lionel_Messi'
      },
      {
        nombre: 'Luis Suárez',
        imagen: '../../imagenes/lucho.jpeg',
        link: 'https://es.wikipedia.org/wiki/Luis_Su%C3%A1rez_D%C3%ADaz'
      },
      {
        nombre: 'Neymar',
        imagen: '../../imagenes/neymar.jpg',
        link: 'https://es.wikipedia.org/wiki/Neymar'
      },
      {
        nombre: 'Lamine Yamal',
        imagen: '../../imagenes/lamine.jpeg',
        link: 'https://es.wikipedia.org/wiki/Lamine_Yamal'
      },
      {
        nombre: 'Pedri',
        imagen: '../../imagenes/pedri.jpg',
        link: 'https://es.wikipedia.org/wiki/Pedri'
      },
      {
        nombre: 'Paolo Guerrero',
        imagen: '../../imagenes/paolo.jpeg',
        link: 'https://es.wikipedia.org/wiki/Paolo_Guerrero'
      },
      {
        nombre: 'FC Barcelona',
        imagen: '../../imagenes/braca.png',
        link: 'https://es.wikipedia.org/wiki/Futbol_Club_Barcelona'
      }
    ];
  }

  // Método que devuelve la lista de ciclistas
  obtenerCiclistas(): Deportista[] {
    return [
      {
        nombre: 'Jackson Goldstone',
        imagen: '../../imagenes/Jackson Goldstone.jpg',
        link: 'https://en.wikipedia.org/wiki/Jackson_Goldstone'
      },
      {
        nombre: 'Danny Hart',
        imagen: '../../imagenes/Danny_Hart.jpg',
        link: 'https://en.wikipedia.org/wiki/Danny_Hart'
      }
    ];
  }
}