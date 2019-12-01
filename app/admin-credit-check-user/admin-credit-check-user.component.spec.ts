import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreditCheckUserComponent } from './admin-credit-check-user.component';

describe('AdminCreditCheckUserComponent', () => {
  let component: AdminCreditCheckUserComponent;
  let fixture: ComponentFixture<AdminCreditCheckUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreditCheckUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreditCheckUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
