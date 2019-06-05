import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { UserServiceService } from '../../shared/user-service.service';
import { map } from 'rxjs/operators';
import { RestClientService } from '../../shared/rest-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(public userService: UserServiceService,public router: Router) { }

  customer: Customer = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    contactNo: 4372250632,
    address: {street: '32 Fiddleneck Crescent', city: 'Brampton', province: 'Ontario', zip: 'L6R1R3'},
    middleName: 'Mathew'

  }

  submitForm(){
    let formObj = {};
    formObj['firstName'] = this.customer.firstName;
    formObj['middleName'] = this.customer.middleName;
    formObj['lastName'] = this.customer.lastName;
    formObj['email'] = this.customer.email;
    formObj['contactNo'] = this.customer.contactNo;
    formObj['street'] = this.customer.address.street;
    formObj['city'] = this.customer.address.city;
    formObj['province'] = this.customer.address.province;
    formObj['zip'] = this.customer.address.zip;

    this.userService.formSubmission(formObj).subscribe();

    
  }

  resetForm(){
    this.customer.firstName = '';
    this.customer.middleName = '';
    this.customer.lastName = '';
    this.customer.email = '';
    this.customer.contactNo = '-- --- ----';
    this.customer.address.city = '';
    this.customer.address.province = '';
    this.customer.address.street = '';
    this.customer.address.zip = '';

  }

  ngOnInit() {
  }

}
