import { Routes } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoViewComponent } from './todo-view.component';

export const TodoRoutes: Routes = [
    {
        path: 'todo', component: TodoComponent, children: [
            { path: '', component: TodoViewComponent }
        ]
    }
];