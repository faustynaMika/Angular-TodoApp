import { Component, OnInit, Input} from '@angular/core';
import { ToDo } from '../todo/todo.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
@Input() public  todos: ToDo[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
