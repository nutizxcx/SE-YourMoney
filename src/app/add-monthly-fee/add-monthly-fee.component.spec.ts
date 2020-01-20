import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyFeeComponent } from './add-monthly-fee.component';

describe('AddMonthlyFeeComponent', () => {
  let component: AddMonthlyFeeComponent;
  let fixture: ComponentFixture<AddMonthlyFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonthlyFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonthlyFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
