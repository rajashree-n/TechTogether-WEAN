import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable"
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})

export class AnalysisComponent implements OnInit {
  private RespUrl = 'http://localhost:3000/?name=';
  str: "";
  rest: any = {};
  rest2: any = {};
  show: boolean;
   //use is_login to monitor the loginstatue
  is_login: string;
  logout(): void {
    //refresh the session
    sessionStorage.clear();
  }
  constructor(private http: Http) { 
    function showUsers()
    {        
        document.getElementById("teams").style.display="none";
        document.getElementById("users").style.display="block";
       
        
    }
    function logout() {
      //refresh the session
      window.sessionStorage.clear();
      window.localStorage.clear();
      window.localStorage.clear();
      localStorage.removeItem('session');
      sessionStorage.removeItem('session');
      alert("done")
     
    }
  
  }  getRes() {
    return this.http.get(this.RespUrl)
    .map((es1: Response) => es1.json())
    }
    
    getData() {
      this.getRes().subscribe(rest => {
        var resources = JSON.parse(rest);
        console.log(resources["sentences_tone"]);
        this.rest = resources["sentences_tone"]
      })
  }
  

  ngOnInit() {
    var a = JSON.parse(localStorage.getItem('session'));
    for(var i = 0;i<a.length;i++) { 
      this.str += '. '+ a;
   }
   alert(this.str); 
   this.RespUrl += '"'+this.str+'"';
   alert(this.RespUrl); 
    this.getRes();
    this.getData();
  }

  
}
