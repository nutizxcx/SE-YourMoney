import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonthlyFeeComponent } from './edit-monthly-fee.component';

describe('EditMonthlyFeeComponent', () => {
  let component: EditMonthlyFeeComponent;
  let fixture: ComponentFixture<EditMonthlyFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMonthlyFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMonthlyFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
