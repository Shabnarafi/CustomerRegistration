import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestClientService } from './rest-client.service';
import { UserServiceService } from './user-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [RestClientService, UserServiceService]
})
export class SharedModule { }
