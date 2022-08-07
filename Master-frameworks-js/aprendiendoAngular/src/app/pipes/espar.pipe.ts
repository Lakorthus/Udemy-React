import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espar',
})
export class EsParPipe implements PipeTransform {
  transform(value: any) {
    var espar = 'No es par el año';
    if (value % 2 == 0) {
      espar = 'Si es par el año';
    }
    return `El año es: ${value} y ${espar}`;
  }
}
