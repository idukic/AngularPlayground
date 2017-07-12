import { Component } from '@angular/core';

@Component({
  selector: 'app-p-sight-view',
  templateUrl: './p-sight-view.component.html',
  styleUrls: ['./p-sight-view.component.scss']
})

export class PSightViewComponent {

  title: string = "Random title 1";
  name: string = "Ivy";
  cssColor: string = "red";

  // customers = [
  //   {id:1, name: "Bob"},
  //   {id:2, name: "Peggy"},
  //   {id:3, name: "Peter"},
  //   {id:4, name: "Mary"},
  //   {id:5, name: "Oli"},
  // ]

  changeTextColor(){
    this.cssColor = this.cssColor === 'green' ? 'red' : 'green';
  }
  
}