import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo app';

  todoItem = {
    description: 'kahvaltı',
    action: true,
  };

  getTitle() {
    return this.title;
  }
}
