import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoDestacado'
})
export class TextoDestacadoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return `✨ ${value.toUpperCase()} ✨`;
  }
}
