// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Declarations

import { SimpleFormComponent } from '../components/simple-form/simple-form.component';
import { HomeComponent } from '../home/home.component';
import { HomeViewComponent } from '../home/home-view/home-view.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
        // app modules
        
    ],
    declarations: [
        HomeComponent,
        HomeViewComponent,
        SimpleFormComponent
    ]
})

export class HomeModule { }