// graphql-todo-app/src/app/app.component.ts

import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Todo } from './todo';

const allTodosQuery = gql`
  query {
    getTodos {
      id
      title
      done
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoItems: Todo[] = [];

  constructor(private apollo: Apollo) {
    this.apollo
      .watchQuery<{ getTodos: Todo[] }>({
        query: allTodosQuery,
      })
      .valueChanges.subscribe((result) => {
        this.todoItems = result.data.getTodos;
      });
  }

  addTodo(title: string) {
    // TODO: This will be implemented later
  }
}
