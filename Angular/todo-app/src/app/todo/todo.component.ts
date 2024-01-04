import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  constructor() {}

  model = new Model();

  // private name = 'Furkan';

  // items = ['item 1', 'item 2', 'item 3'];

  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items;
  }

  // items: TodoItem[] = [
  //   //Interface ile tip kontrolü yapılırsa
  //   { id: 1, description: 'Kahvaltı', action: 'yes' },
  //   { id: 2, description: 'Spor', action: 'yes' },
  //   { id: 3, description: 'Alışveriş', action: 'no' },
  //   //Class ile tip kontrolü yapılırsa
  //   new TodoItem(1, 'Kahvaltı', 'Yes'),
  //   new TodoItem(1, 'Spor', 'Yes'),
  //   new TodoItem(1, 'Alışveriş', 'Yes'),
  // ];
}
