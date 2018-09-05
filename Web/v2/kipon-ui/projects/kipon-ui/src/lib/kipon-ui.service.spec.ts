import { TestBed, inject } from '@angular/core/testing';

import { KiponUiService } from './kipon-ui.service';

describe('KiponUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KiponUiService]
    });
  });

  it('should be created', inject([KiponUiService], (service: KiponUiService) => {
    expect(service).toBeTruthy();
  }));
});
