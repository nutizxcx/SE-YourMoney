import { TestBed } from '@angular/core/testing';

import { YourMoneyService } from './your-money.service';

describe('YourMoneyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourMoneyService = TestBed.get(YourMoneyService);
    expect(service).toBeTruthy();
  });
});
