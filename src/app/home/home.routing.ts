import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeViewComponent } from '../home/home-view/home-view.component';

export const HomeRoutes: Routes = [
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', component: HomeViewComponent }
        ]
    }
];