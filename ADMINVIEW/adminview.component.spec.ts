import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { adminview } from './adminview.component';

describe('adminview', () => {
  let component: adminview;
  let fixture: ComponentFixture<adminview>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ adminview]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(adminview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});