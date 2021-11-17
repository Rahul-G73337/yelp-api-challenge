import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../modal/yelp.reviews.modal";

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss']
})
export class CardReviewComponent implements OnInit {

  // @ts-ignore
  @Input() review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
