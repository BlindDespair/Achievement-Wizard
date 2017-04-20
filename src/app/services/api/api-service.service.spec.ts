/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {AchievementsApiService} from './achievements-api.service';

describe('ApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AchievementsApiService]
    });
  });

  it('should ...', inject([AchievementsApiService], (service: AchievementsApiService) => {
    expect(service).toBeTruthy();
  }));
});
