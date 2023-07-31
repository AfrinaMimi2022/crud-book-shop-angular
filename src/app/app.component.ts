import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component'
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';

  



// constructor
// dependency injected variables

  constructor(private _dialogue: MatDialog) {}

  openAddEditEmpForm(){
    this._dialogue.open(EmpAddEditComponent);
  }

  openAddBookForm(){
    this._dialogue.open(BookAddComponent);
  }

  openEditBookForm(){
    this._dialogue.open(BookEditComponent);
  }


}