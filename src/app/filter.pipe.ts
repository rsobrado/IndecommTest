import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
    transform(hashtags: any[], searchText: string): any[] {
        if(!hashtags || !searchText){ 
          return hashtags
        };
  return hashtags.filter( hashtag => {
        return hashtag.entities.hashtags.text.includes(searchText);
      });
     }
  }