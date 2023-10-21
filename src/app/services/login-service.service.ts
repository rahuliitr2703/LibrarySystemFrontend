import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private httpClient: HttpClient) { }
  Users = [{
    "username": 'Vinay',
    'password': '123',
    'userType': 'Buyer'
  },
  {
    "username": 'Rahul',
    'password': '123',
    'userType': 'Seller'
  },
  {
    "username": 'Shivani',
    'password': '123',
    'userType': 'Admin'
  }];

  serverUrl = 'http://localhost:9000/';

  checkUserAuth(data:any){
    // return this.httpClient.post(this.serverUrl + 'checkUserAuth', data, { observe: 'response'});
    data['status'] = false; 
    for(let user of this.Users){
      if(user.username == data.username && user.password == data.password && user.userType == data.userType) data['status'] = true;    
    }
    return data;
  }
}
