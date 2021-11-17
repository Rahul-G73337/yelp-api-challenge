import { TestBed } from '@angular/core/testing';

import { YelpReviewsService } from './yelp-reviews.service';

describe('YelpReviewsService', () => {
  let service: YelpReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YelpReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
