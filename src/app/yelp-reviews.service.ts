import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YelpReviewsService {
hostUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  selectedCity = 'san francisco, ca';
  getBusinessData(searchValue: string){
    return this.http.post(this.hostUrl + 'getBusiness', {term : searchValue , location: this.selectedCity});
  }

  getReviewBasedOnBusinessId(businessId: string){
    return this.http.post(this.hostUrl + 'getReviews', {id: businessId});
  }
  getResults(query: string){
    return this.http.post(this.hostUrl + 'getResults', {id: query});
  }
}
