import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/listItem';
import { FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    Component,
    AddToListComponent
  ],
  providers: [],
  bootstrap: [Component]
})
@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css']
})
export class AddToListComponent {
  title: string = 'TodoApp';
  listContents: ListItem[] = [];
  todo: string;

  addTodo() {
    let newTodo = new ListItem();
    newTodo.text = this.todo;
    this.listContents.push(newTodo);
  }

  deleteTodo(itemToDelete: ListItem){
    this.listContents = this.listContents.filter(item => item !== itemToDelete)
  }
}
