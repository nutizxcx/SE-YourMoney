import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyFeeComponent } from './monthly-fee.component';

describe('MonthlyFeeComponent', () => {
  let component: MonthlyFeeComponent;
  let fixture: ComponentFixture<MonthlyFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
