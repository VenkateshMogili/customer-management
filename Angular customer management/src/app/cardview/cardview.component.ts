import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  customers: any = [];
  filtered: any = [];
  page: number = 1;
  pageSize: number = 10;
  searchInput: any ='';

  constructor(private ls: LoginService) { }

  ngOnInit() {
    this.getCustomers();
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
