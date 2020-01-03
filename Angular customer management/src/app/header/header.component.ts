import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged: Boolean = false;
  user: any;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user!=null){
      // alert("Logged in");
      this.logged = true;
    }
   }

  ngOnInit() {
    
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

}
