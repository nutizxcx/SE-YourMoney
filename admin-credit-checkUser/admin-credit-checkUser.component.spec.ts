import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreditUser } from './admin-credit-checkUser.component';

describe('AdminCreditUser', () => {
  let component: AdminCreditUser;
  let fixture: ComponentFixture<AdminCreditUser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreditUser ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreditUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});