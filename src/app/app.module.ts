// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

// Routing Module //
import { AppRoutingModule } from './app-routing.module';

// Declarations
import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { LayoutComponent } from './layout/layout.component';
import { HomeModule } from './home/home.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // App Modules
    HomeModule,
    TodoModule,
    // Routing Modules
    AppRoutingModule

  ],
  providers: [
    // useClass, useValue
    MailService,
    {provide: 'mail', useClass:MailService},
    {provide: 'api', useValue: 'http://localhost:3000/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
