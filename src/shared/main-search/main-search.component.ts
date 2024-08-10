import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchArticlePipe } from 'src/_pipes/search-article.pipe';

@Component({
  selector: 'app-main-search',
  standalone: true,
  imports: [CommonModule,  SearchArticlePipe],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.scss'
})
export class MainSearchComponent {
  @Input() isShow:boolean = false
  @Output() selectedItem:EventEmitter<any> = new EventEmitter<any>();
  searchValue:string=''
  filteredItems: any[] = [];
  

  
  searchItems = [
    {
      libelle:"Chemise homme"
    },
    {
      libelle:"Chemise femme"
    },
    {
      libelle:"Chaussure homme"
    },
    {
      libelle:"Chaussure femme"
    },
    {
      libelle:"Robes femme"
    },
    {
      libelle:"Casquette homme"
    }
  ]

  closeSearch(){
     this.isShow = false
  }
  getSearchValue(val:any){
    console.log('val', val.target.value)
    this.searchValue = val.target.value
    this.filteredItems = this.searchItems.filter(item=>item.libelle.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()))
  }
  getSelectedItem(data:any){
     console.log(data)
     this.selectedItem.emit(data.libelle)
  }
}
