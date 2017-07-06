// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Declarations
import { TodoComponent } from '../todo/todo.component';
import { TodoViewComponent } from '../todo/todo-view.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule    
    ],
    declarations: [
        TodoComponent,
        TodoViewComponent
    ]
})

export class TodoModule { }