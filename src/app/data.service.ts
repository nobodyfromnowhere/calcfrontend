import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  hostname: string=window.location.hostname;
  
  constructor(private httpClient: HttpClient) {}
  getStation() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  getGood(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  getTypeOfCar(){
    return this.httpClient.get('http://' + this.hostname + ':5000/api/car');
  }
}
