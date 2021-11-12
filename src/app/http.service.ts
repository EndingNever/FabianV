import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { } 

  getConfig(username:string){
    const get = this.http.get(`https://api.github.com/users/${username}/repos`);
    return get;
  }
  
}
