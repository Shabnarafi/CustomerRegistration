import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

interface Options {
  url: string;
  header?:HttpHeaders;
  payload?: any;
  params?:HttpParams;
}

interface serverResponse {
    hasError: boolean;
    message: string;
    payload?: any;
    statusCode: number;
}

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient) { }
  private hostUrl = "http://localhost:3000/";

  post(options:Options){
    let url = options.url;
    let header = options.header || new HttpHeaders().set('Content-Type', 'application/json');
    let payload = options.payload;
    return this.http.post<serverResponse>(this.hostUrl+url,payload,{headers:header});
    
}

get(options:Options){
  let url = options.url;
  let header = options.header || new HttpHeaders().set('Content-Type', 'application/json');
  let params = options.params;
  return this.http.get<serverResponse>(this.hostUrl+url,{headers:header, params: params});
  
}
}
