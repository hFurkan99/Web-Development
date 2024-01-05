import { Component } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  constructor() {
    this.model.items = this.getItemsFormLS();
  }

  displayAll: boolean = false;
  errorMsg: string = '';
  inputText: string = '';
  model = new Model();

  // private name = 'Furkan';

  // items = ['item 1', 'item 2', 'item 3'];

  getName() {
    return this.model.name;
  }

  handleStartWriting() {
    this.errorMsg = '';
  }

  addItem() {
    let length = this.model.items.length + 1;
    if (this.inputText !== '') {
      let data = { id: length, description: this.inputText, action: false };
      this.model.items.push(data);

      let items = this.getItemsFormLS();
      items.push(data);
      localStorage.setItem('items', JSON.stringify(items));

      this.inputText = '';
    } else {
      this.errorMsg = 'Yapılacak bir iş giriniz!';
    }
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length === 0,
      'btn-secondary': this.inputText.length === 0,
      'btn-primary': this.inputText.length > 0,
    };
  }

  getItems() {
    if (this.displayAll) return this.model.items;
    else return this.model.items.filter((item) => !item.action);
  }

  getCompletedTaskCount() {
    return this.model.items.filter((item) => item.action === true).length;
  }

  getItemsFormLS() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem('items');
    if (value !== null) items = JSON.parse(value);

    return items;
  }

  onActionChange(item: TodoItem) {
    let items = this.getItemsFormLS();

    localStorage.clear();

    items.forEach((i) => {
      if (i.id === item.id) i.action = item.action;
    });

    localStorage.setItem('items', JSON.stringify(items));
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
