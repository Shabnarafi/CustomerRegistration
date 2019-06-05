import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http: HttpClient, private restService: RestClientService,public router: Router) { }

  getFormData(){
    return this.restService.get({url:'Users'})
    .pipe(
      map((result) => {
        if(!result.hasError){
          return result.payload;
        }
        else{
          return false;
        }
      })
    )
  }

  formSubmission(obj){
    console.log(obj);
    let payload = obj;
      return this.restService.post({ url:'Users', payload:obj })
      .pipe(
        map((result) => {
          if(!result.hasError){
            this.router.navigateByUrl('details');
          }
          else{
            this.router.navigate[''];
          }
          
        })
      )
        

      }
      
}