import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToDo } from '../todo/todo.component';
@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent implements OnInit {
@Output() public deletedSelectedEmitter = new EventEmitter<void>();
@Output() public addTodoEmitter = new EventEmitter<ToDo>();
name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }
  deleteSelected() {
    this.deletedSelectedEmitter.emit()
  }
  addTodo() {
    let todo: ToDo = {
      id: Math.random(),
      name: this.name.value != null ? this.name.value : '',
      active: true,
      selected: false,
    };
  this.addTodoEmitter.emit(todo)
  this.name.reset();
  }
  

}
