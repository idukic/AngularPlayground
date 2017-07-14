import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

import { Theme } from './theme';

const envTheme_Dev = "dev";
const envTheme_Qa = "qa";
const envTheme_Prod = "prod";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent extends Theme implements  OnInit {
  envTheme: string = environment.envTheme;
  //cookie?
  ngOnInit() {
    
    console.log("Current environment", this.envTheme);

    if(this.envTheme === envTheme_Dev){
        require("style-loader!./../styles/themes/envs/env-dev.scss");
    } 
    if(this.envTheme === envTheme_Qa){
        require("style-loader!./../styles/themes/envs/env-qa.scss");
    } 
    if(this.envTheme === envTheme_Prod) {
        require("style-loader!./../styles/themes/envs/env-prod.scss");
    }
    
    this.setThemeByClass();

  }

}