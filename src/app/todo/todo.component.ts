import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todos: ToDo[] = [
    {
      id: 1,
      name: 'test',
      active: true,
      selected: false
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  deleteSelected():void{
    let notSelectedTasks = this.todos.filter(todo => !todo.selected)
    this.todos = [...notSelectedTasks]
    console.log(notSelectedTasks);
  }
 
  addTodo(todo: ToDo):void {
this.todos.push(todo);
  }
}

export type ToDo = {
  id: number,
  name?: string,
  active: boolean,
  selected: boolean,
}