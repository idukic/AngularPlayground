import { Routes } from '@angular/router';

import { SimpleFormComponent } from './simple-form.component';

export const SimpleFormRoutes: Routes = [
    {
        path: 'simple-form', component: SimpleFormComponent, children: [
            { path: '', component: SimpleFormComponent }
        ]
    }
];