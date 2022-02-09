import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecesService {
  url="https://services-fish-price-dev.sinay.ai/seafoods"
  constructor(private http:HttpClient) { }

  getEspeces() {
    return this.http.get(this.url);
  }
}