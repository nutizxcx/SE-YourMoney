import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCredit } from './admin-credit.component';

describe('AdminCredit', () => {
  let component: AdminCredit;
  let fixture: ComponentFixture<AdminCredit>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCredit ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCredit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});