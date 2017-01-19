/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NwhttpService } from './nwhttp.service';

describe('NwhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NwhttpService]
    });
  });

  it('should ...', inject([NwhttpService], (service: NwhttpService) => {
    expect(service).toBeTruthy();
  }));
});
