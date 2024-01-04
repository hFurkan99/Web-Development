import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  private name = 'Furkan';

  // items = ['item 1', 'item 2', 'item 3'];

  items = [
    { id: 1, description: 'Kahvaltı', action: 'yes' },
    { id: 2, description: 'Spor', action: 'yes' },
    { id: 3, description: 'Alışveriş', action: 'no' },
  ];

  getName() {
    return this.name;
  }
}
