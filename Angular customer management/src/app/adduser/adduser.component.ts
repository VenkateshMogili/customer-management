import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  customer: any = {state:''};

  constructor(private ls: LoginService, private router: Router) { }

  ngOnInit() {
  }
  addCustomer(){
    console.log(this.customer);
    this.ls.addCustomer(this.customer).subscribe
    (res=>{
      if(res['status']==200){
        alert("New Customer Added Successfully...");
        this.router.navigate(['/cardView']);
      } else{
        alert("Something went wrong");
      }
      // console.log(res);
    })
  }

}
