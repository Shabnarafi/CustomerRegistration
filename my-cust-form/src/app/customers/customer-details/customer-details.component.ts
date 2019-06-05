import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../shared/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(public userService: UserServiceService, public router: Router) { }

  customer = {};



  displayForm(){
    this.userService.getFormData().subscribe(data =>{
      if(data){
        this.customer = data;
      }
      
    })
  }

  ngOnInit() {
    this.displayForm();
  }

}
