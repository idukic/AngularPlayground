import _ from "lodash";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html'
})
export class SimpleFormComponent implements OnInit {

  @Input() inputMsg;
  @Input() inputCalc;
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

  onBtnTwoClick(){
    let calc = _.add(3,4);
    console.log(calc);
  }

}
