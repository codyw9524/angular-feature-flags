import { TestBed, async, inject } from '@angular/core/testing';

import { FeatureFlagGuardGuard } from './feature-flag-guard.guard';

describe('FeatureFlagGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureFlagGuardGuard]
    });
  });

  it('should ...', inject([FeatureFlagGuardGuard], (guard: FeatureFlagGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
