import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: unknown, wrap: any): unknown {
    if(wrap == 1){
      return '( '+value+' )';
    }
    return value;
  }
}


