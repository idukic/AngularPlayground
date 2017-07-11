// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

// Declarations
import { PSightComponent } from './p-sight.component';
import { PSightViewComponent } from './p-sight-view.component';

import { CustomersComponent } from '../components/customer/customer-list.component';
import { CustomerComponent } from '../components/customer/customer.component';

//import { CustomersModule } from '../components/customer/customer-list.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        //CustomersModule
    ],
    declarations: [
        PSightComponent,
        PSightViewComponent,
        CustomersComponent,
        CustomerComponent
    ]
})

export class PSightModule { }