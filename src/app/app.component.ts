import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Title';
  user: User = { id:1, name: "FirstName", Address:"Address1" };

  constructor(@Inject('mail') private mail){}

  onClick(value){
    console.log(value);
  }

  onUpdate(id, text){
    this.mail.updateMessages(id, text);
  }

}

export class User {
  id: number;
  name: string;
  Address: string;
}