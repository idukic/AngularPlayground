import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  message = "You got mail!";
  
  msgs = [
      {id: 0, text: "Message 1"},
      {id: 1, text: "Message 2"},
      {id: 2, text: "Message 3"}
  ]
  
  updateMessages(id, text){
    this.msgs = this.msgs.map(m => 
      m.id === id
      ? { id, text }
      : m
    )
  }
  constructor() { }

}
