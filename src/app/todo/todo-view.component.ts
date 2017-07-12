import { Component, OnInit, Inject } from '@angular/core';
import {TodoStore} from '../services/store';
import {Todo} from '../services/todo';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})

export class TodoViewComponent {

    newTodoText = '';

    constructor(@Inject('todo') private todoStore){}
    
    stopEditingTodo(todo: Todo, editedTitle:string){
      todo.title = editedTitle;
		  todo.editing = false;
    }

    cancelEditingTodo(todo: Todo) {
      todo.editing = false;
    }

    updateEditingTodo(todo: Todo, editedTitle: string) {
      editedTitle = editedTitle.trim();
      todo.editing = false;

      if (editedTitle.length === 0) {
        return this.todoStore.remove(todo);
      }

      todo.title = editedTitle;
    }

    editTodo(todo: Todo) {
      todo.editing = true;
    }

    removeCompleted() {
      this.todoStore.removeCompleted();
    }

    toggleCompletion(todo: Todo) {
      this.todoStore.toggleCompletion(todo);
    }

    remove(todo: Todo) {
      this.todoStore.remove(todo);
    }

    addTodo() {
      if (this.newTodoText.trim().length) {
        this.todoStore.add(this.newTodoText);
        this.newTodoText = '';
      }
  	}

}
