import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiponUiComponent } from './kipon-ui.component';

describe('KiponUiComponent', () => {
  let component: KiponUiComponent;
  let fixture: ComponentFixture<KiponUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiponUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiponUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
