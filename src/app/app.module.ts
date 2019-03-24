import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnalysisComponent } from './analysis/analysis.component';
import 'rxjs/add/operator/map'; 
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from "./app.routes"; 
import { HttpModule, JsonpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    AppRoutingModule,   
    HttpModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
