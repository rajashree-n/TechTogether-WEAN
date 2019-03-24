import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  logout(): void {
    //refresh the session
    sessionStorage.clear();
    var a = JSON.parse(localStorage.getItem('session'));
    for(var i = 0;i<a.length;i++) { 
      localStorage.removeItem('session');
      alert(localStorage.length); 
    }
  }
  constructor() {
    function myFunction2()
{        
    document.getElementById("load2").style.display="none";
    document.getElementById("contents").style.display="none";
    document.getElementById("load").style.display="none";
    document.getElementById("load3").style.display="none";
    
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
  document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
         sessionStorage.clear();
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.display="none";
           document.getElementById('contents').style.visibility="visible";
        },1000);
    }
  }
}
}
