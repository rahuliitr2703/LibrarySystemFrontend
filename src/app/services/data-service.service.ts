import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private httpClient: HttpClient) {}
  serverUrl = 'http://localhost:9000/';

  getBooks(data:any){
    return this.httpClient.post(this.serverUrl + 'getBooks', data, { observe: 'response'});
  }
}
