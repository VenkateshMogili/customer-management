import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  customers: any = [];
  filtered: any = [];
  searchInput: any = '';
  searchInputs: any = '';

  constructor(private ls: LoginService) { }

  ngOnInit() {
    this.getCustomers();
    console.log(this.searchInput);
  }

  getCustomers(){
    this.ls.getCustomers().subscribe(res=>{
      this.customers = res['data'];
      this.filtered= this.customers;
    });
  }
  filterCustomer(input){
    this.filtered = this.ls.filterCustomer(input);
  }

}
