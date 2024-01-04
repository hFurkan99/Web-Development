import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Furkan';
    this.items = [
      { id: 1, description: 'Kahvaltı', action: 'yes' },
      { id: 2, description: 'Spor', action: 'yes' },
      { id: 3, description: 'Alışveriş', action: 'no' },
    ];
  }
}
