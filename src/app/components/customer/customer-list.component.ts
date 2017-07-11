import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customer-list.component.html'
})

export class CustomersComponent implements OnInit {

    customers = [
        {id:1, name: "Bob"},
        {id:2, name: "Peggy"},
        {id:3, name: "Peter"},
        {id:4, name: "Mary"},
        {id:5, name: "Oli"},
    ]

    
    constructor() { }

    ngOnInit() { }
}