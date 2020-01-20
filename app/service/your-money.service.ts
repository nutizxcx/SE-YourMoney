import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class YourMoneyService {


  constructor(private http: HttpClient) {
  }

  postAPIService(url: string, data: any) {
    return this.http.post<any>(url, data);
  }

  getAPIService(url: string) {
    return this.http.get<any>(url);
  }

  
  

}
