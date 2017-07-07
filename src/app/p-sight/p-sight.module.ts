// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Declarations
import { PSightComponent } from './p-sight.component';
import { PSightViewComponent } from './p-sight-view.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule  
    ],
    declarations: [
        PSightComponent,
        PSightViewComponent
    ]
})

export class PSightModule { }