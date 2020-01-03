import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  customer: any = [];
  id: number;
  constructor(private ls: LoginService, private route: ActivatedRoute,private router: Router) { 
    this.route.paramMap.subscribe(params=>{
      // console.log(+params.get("id"));
      this.id = +params.get("id");
    });
  }

  ngOnInit() {
    this.getCustomer();
  }
  getCustomer(){
    this.ls.getCustomerById(this.id)
    .subscribe(res=>{
      this.customer = res['data'][0];
      // console.log(this.customer);
    });
  }

  updateCustomer(){
    // console.log(this.customer);
    this.ls.updateCustomer(this.id,this.customer)
    .subscribe(res=>{
      if(res['status']==200){
        alert('Updated Successfully...');
        this.router.navigate(['/cardView']);
      } else{
        alert('Something went wrong');
      }
    });
  }

  deleteCustomer(){
    this.ls.deleteCustomer(this.id)
    .subscribe(res=>{
      if(res['status']==200){
        alert("Deleted successfully...");
        this.router.navigate(['/cardView']);
      } else{
        alert("Something went wrong");
      }
    });
  }

}
