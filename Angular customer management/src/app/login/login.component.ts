import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  data: any = [];
  user: any;
  logged: Boolean = false;

  constructor(private ls: LoginService, private router: Router) { 
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user!=null){
      // alert("Logged in");
      this.logged = true;
      this.router.navigate(['/cardView']);
    } else{
      this.logged = false;
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

  login(){
    this.ls.getCustomer(this.email,this.password).subscribe(res=>{
      this.data = res;
      if(this.data['data'].length>0){
        alert('Logged in successfully...');
        const store = {"username":this.data['data'][0]['firstname']+" "+this.data['data'][0]['lastname']
        ,"email":this.data['data'][0]['email']};
        localStorage.setItem("user",JSON.stringify(store));
        this.router.navigate(['/cardView']);
        // console.log('s');
      } else{
        alert('Wrong email or password');
      }
      // console.log(this.data);
    });
    // console.log(this.email);
    // console.log(this.password);
  }

}
