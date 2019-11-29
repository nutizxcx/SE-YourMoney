import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USERVIEW } from './USERVIEW.component';

describe('USERVIEW', () => {
  let component: USERVIEW;
  let fixture: ComponentFixture<USERVIEW>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USERVIEW ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USERVIEW);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});