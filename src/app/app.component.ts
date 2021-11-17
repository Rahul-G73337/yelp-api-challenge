import { Component } from '@angular/core';
import {YelpReviewsService} from "./yelp-reviews.service";
import {Business, Review} from "./modal/yelp.reviews.modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ts-ignore
  businessData : Business[];
  // @ts-ignore
  reviews: Review[];
  selectedBusiness: any ;
  // @ts-ignore
  text: string;

  // @ts-ignore
  results: string[];
  searchValue = 'Coffee';
  isData = false;
  constructor(private yelpReviewsService: YelpReviewsService) {
    this.isData = true;
   this.getBusiness();
  }
  getBusiness(){
    this.reviews = [];
    this.businessData = [];
    this.yelpReviewsService.getBusinessData(this.searchValue).subscribe((data: any) =>{
      this.businessData =  data?.jsonBody?.businesses;
      this.selectedBusiness = this.businessData[0];
      this.getReviews();
      console.log(this.businessData);
    })
  }

  getReviews(){
    this.yelpReviewsService.getReviewBasedOnBusinessId(this.selectedBusiness.id).subscribe((val: any)=>{
      this.reviews = val?.jsonBody?.reviews;
      this.isData = false;
    })
  }

  search(event: any) {
    this.yelpReviewsService.getResults(event.query).subscribe((data: any) => {
      console.log(data);
      this.results = data;
    });
  }

}
