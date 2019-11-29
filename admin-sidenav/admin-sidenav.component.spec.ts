import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidenav } from './admin-sidenav.component';

describe('AdminSidenav', () => {
  let component: AdminSidenav;
  let fixture: ComponentFixture<AdminSidenav>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidenav ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
