import { TestBed } from '@angular/core/testing';

import { KiponUiService } from './kipon-ui.service';

describe('KiponUiService', () => {
  let service: KiponUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KiponUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
