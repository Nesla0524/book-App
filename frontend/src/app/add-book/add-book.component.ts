import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookItem={
    bookId :'',
    bookName :'',
    authorName:'',
    bookCode :'',
    realeseDate :'',
    type:'',
    price :''


  }

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {}
    AddBook(){
      this.bookService.newBook(this.bookItem);
      console.log("called");
      
      this.router.navigate([''])
    }
}
