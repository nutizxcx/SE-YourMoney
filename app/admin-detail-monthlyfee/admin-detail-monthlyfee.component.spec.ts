import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailMonthlyfeeComponent } from './admin-detail-monthlyfee.component';

describe('AdminDetailMonthlyfeeComponent', () => {
  let component: AdminDetailMonthlyfeeComponent;
  let fixture: ComponentFixture<AdminDetailMonthlyfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailMonthlyfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailMonthlyfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
