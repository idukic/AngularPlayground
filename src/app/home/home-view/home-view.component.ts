import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})

export class HomeViewComponent implements OnInit {

  title = 'Title';
  user: User = { id:1, name: "FirstName", Address:"Address1" };

  constructor(@Inject('mail') private mail){}

  onClick(value){
    console.log(value);
  }

  onUpdate(id, text){
    this.mail.updateMessages(id, text);
  }

  ngOnInit() {
  }

}

export class User {
  id: number;
  name: string;
  Address: string;
}