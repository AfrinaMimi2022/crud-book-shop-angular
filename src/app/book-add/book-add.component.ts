import { Component } from '@angular/core';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  book_category : string[] = [
    'Novel',
    'Essay',
    'Thriller', 
    'poetry',
    'Biography',
  ]

}
