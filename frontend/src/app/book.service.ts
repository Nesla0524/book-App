import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookss(){
    return this.http.get("http://localhost:3000/bookss");
  }
  newBook(item : any){
    return this.http.post('http://localhost:3000/insert', {books:item})
    .subscribe((data :any) =>{
      console.log(data)
    }
    )
  }
}
