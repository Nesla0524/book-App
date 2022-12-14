import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-bookss',
  templateUrl: './bookss.component.html',
  styleUrls: ['./bookss.component.css']
})
export class BookssComponent implements OnInit {
  books =[{
    bookId :'',
    bookName :'',
    authorName :'',
    bookCode :'',
    realeseDate :'',
    type :'',
    price :'',
  }]

  constructor(private bookService : BookService) {
   
   }

  ngOnInit(): void {
    this.bookService.getBookss().subscribe((data)=>{
        this.books=JSON.parse(JSON.stringify(data));
        console.log(this.books)
    })
  }
}
