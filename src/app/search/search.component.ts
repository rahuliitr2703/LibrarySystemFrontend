import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private dataService: DataServiceService){}
  books = [];
  data = {
    'book': '',
    'author': '',
    'minPrice': '',
    'maxPrice': '',
    'genre': ''
  };

  ngOnInit(){
    this.dataService.getBooks(this.data).subscribe((res:any)=>{
      console.log(res);
      this.books = res;
    })  
  }

  getSearchBook(val:any){
    console.log(val);
    this.dataService.getBooks(val).subscribe((res:any)=>{
      this.books = res;
    }) 
  }
}
