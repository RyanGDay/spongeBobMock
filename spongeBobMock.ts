import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongeBobMock'
})
export class SpongeBobMockPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').map((x, index) => {
      if(index % 2 === 0)
        return x.toLowerCase();
      else if(index % 2 === 1)
        return x.toUpperCase();
    }).join('');
  }

}
