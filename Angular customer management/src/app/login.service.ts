import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  customers: any = [];
  filtered: any = [];

  constructor(private hc: HttpClient) {
   }

  getCustomer(email,password){
    return this.hc.get('http://localhost:4500/customers_api/getCustomer/'+email+'/'+password);
  }
  getCustomerById(id){
    return this.hc.get('http://localhost:4500/customers_api/getCustomer/'+id);
  }
  getCustomers(){
    return this.hc.get('http://localhost:4500/customers_api/getCustomers');
  }
  addCustomer(data){
    // console.log(data);
    return this.hc.post('http://localhost:4500/customers_api/addCustomer',data);
  }
  updateCustomer(id,data){
    return this.hc.put('http://localhost:4500/customers_api/updateCustomer/'+id,data);
  }
  deleteCustomer(id){
    return this.hc.delete('http://localhost:4500/customers_api/deleteCustomer/'+id);
  }

  filterCustomer(input){
    this.getCustomers().subscribe(res=>{
      this.customers = res['data'];
    });
    this.filtered = this.customers;
    this.filtered = this.customers.filter(function(customer){
      return customer.firstname.toLowerCase().indexOf(input.toLowerCase())!== -1 || 
      customer.lastname.toLowerCase().indexOf(input.toLowerCase())!== -1 ||
      customer.address.toLowerCase().indexOf(input.toLowerCase())!== -1 ||
      customer.city.toLowerCase().indexOf(input.toLowerCase())!== -1 ||
      customer.state.toLowerCase().indexOf(input.toLowerCase())!== -1;
    });
    return this.filtered;
  }
}
   