import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Input() inputMsg;
  @Output() update = new EventEmitter();

  constructor() {
    //setInterval(()=> this.inputMsg = Math.random().toString(), 3000);
   }

  ngOnInit() {
  }


  onClick(event, value){
    // event == MouseEvent (https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
    console.log(event);
    console.log(value);
  }

}
