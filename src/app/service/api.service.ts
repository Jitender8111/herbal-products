import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   url = "https://fakestoreapi.com/products";   // 20 product
   url2 = "https://fakestoreapi.com/products/category/jewelery";  // 4 product only
  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<any>(this.url).pipe(map((res:any)=>{
      return res;
    }));
  }
}
