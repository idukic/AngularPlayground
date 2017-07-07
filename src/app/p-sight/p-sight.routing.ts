import { Routes } from '@angular/router';

import { PSightComponent } from './p-sight.component';
import { PSightViewComponent } from './p-sight-view.component';

export const PSigthRoutes: Routes = [
    {
        path: 'page-3', component: PSightComponent, children: [
            { path: '', component: PSightViewComponent }
        ]
    }
];