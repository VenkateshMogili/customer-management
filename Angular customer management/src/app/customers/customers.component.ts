import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  user: any;
  logged: Boolean = false;

  customers: any = [];
  filtered: any = [];

  constructor(private router: Router, private ls: LoginService) {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user!=null){
      // alert("Logged in");
      this.logged = true;
      this.getCustomers();
    } else{
      alert("Please login");
      this.logged = false;
      this.router.navigate(['/login']);
    }
   }

  ngOnInit() {
  }
  getCustomers(){
    this.ls.getCustomers().subscribe(res=>{
      this.customers = res['data'];
      this.filtered = this.customers;
    });
  }
  
  filterCustomer(input){
    this.filtered = this.ls.filterCustomer(input);
  }

}
