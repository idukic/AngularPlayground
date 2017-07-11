import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'
})

export class CustomerComponent implements OnInit {
    // public facing input > can't user component witout this decorator
    @Input() customer: {id: number, name: string };
    @Input() cssColor: string;

    constructor() { }

    ngOnInit() { }
    
}

