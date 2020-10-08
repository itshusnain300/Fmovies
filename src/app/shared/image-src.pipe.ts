import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imageSrc'
})
export class ImageSrcPipe implements PipeTransform {

  transform(src: string): unknown {
    return environment + src;
  }

}
