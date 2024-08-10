import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArticle',
  standalone: true
})
export class SearchArticlePipe implements PipeTransform {

  transform(value: any[], args: string | any): any[] {
    if(!value || !args?.length){
      return value
    }

    return value.filter(
      (_value: any) => _value.libelle.toLowerCase().includes(args.toLowerCase()) 
    );
  }

}
