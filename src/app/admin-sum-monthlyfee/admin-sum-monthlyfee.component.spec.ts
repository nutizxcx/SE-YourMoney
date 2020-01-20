import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSumMonthlyfeeComponent } from './admin-sum-monthlyfee.component';

describe('AdminSumMonthlyfeeComponent', () => {
  let component: AdminSumMonthlyfeeComponent;
  let fixture: ComponentFixture<AdminSumMonthlyfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSumMonthlyfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSumMonthlyfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
