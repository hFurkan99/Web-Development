import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  constructor() {}

  displayAll: boolean = false;
  errorMsg: string = '';
  inputText: string = '';
  model = new Model();

  // private name = 'Furkan';

  // items = ['item 1', 'item 2', 'item 3'];

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) return this.model.items;
    else return this.model.items.filter((item) => !item.action);
  }

  addItem() {
    let length = this.model.items.length;
    if (this.inputText !== '') {
      this.model.items.push({
        id: length + 1,
        description: this.inputText,
        action: false,
      });
      this.inputText = '';
    } else {
      this.errorMsg = 'Yapılacak bir iş giriniz!';
    }
  }

  handleStartWriting() {
    this.errorMsg = '';
  }

  getCompletedTaskCount() {
    return this.model.items.filter((item) => item.action === true).length;
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length === 0,
      'btn-secondary': this.inputText.length === 0,
      'btn-primary': this.inputText.length > 0,
    };
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
