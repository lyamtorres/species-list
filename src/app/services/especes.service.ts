import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecesService {
  url="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }

  getEspeces() {
    return this.http.get(this.url);
  }
}
