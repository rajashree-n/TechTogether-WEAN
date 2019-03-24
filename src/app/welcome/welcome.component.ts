import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  array = [];
  search: "";
  // login successful
  dolog(): void {
    //when login successful set the loh_in to 1
    sessionStorage.setItem('deletedItems', JSON.stringify(this.array))
}
  constructor() { 
    function myFunction2()
  {        
      document.getElementById("load2").style.display="none";
      document.getElementById("contents").style.display="block";
      document.getElementById("load").style.display="none";
      document.getElementById("load3").style.display="none";
      
  }
  }

  viewSearch(search) {
    this.search = search;
    console.log(search);
    //console.log(a);
    //var a = [];
    // Parse the serialized data back into an aray of objects
    var a = JSON.parse(localStorage.getItem('session'));
    console.log(a);
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(search);
    // Alert the array value
    alert(a[0]);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
  }
  ngOnInit() {
    localStorage.setItem('session', '[]');
  }
}
