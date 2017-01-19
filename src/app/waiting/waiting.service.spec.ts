/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WaitingService } from './waiting.service';

describe('WaitingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaitingService]
    });
  });

  it('should ...', inject([WaitingService], (service: WaitingService) => {
    expect(service).toBeTruthy();
  }));
});
