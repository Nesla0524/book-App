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
    bookCode :'',
    realeseDate :'',
    description :'',
    price :'',
  }]

  constructor(private bookService : BookService) {
   
   }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
        this.books=JSON.parse(JSON.stringify(data));
        console.log(this.books)
    })
  }
}
