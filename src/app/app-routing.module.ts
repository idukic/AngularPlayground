import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { SimpleFormRoutes } from './simple-form/simple-form.routing';
import { HomeRoutes } from './home/home.routing';
import { TodoRoutes } from './todo/todo.routing';
import { PSigthRoutes } from './p-sight/p-sight.routing';

@NgModule({
    imports: [
        RouterModule.forRoot([
            ...HomeRoutes,
            ...TodoRoutes,
            ...PSigthRoutes,
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ], { useHash: true })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }