import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Credit } from './credit.component';

describe('Credit', () => {
  let component: Credit;
  let fixture: ComponentFixture<Credit>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Credit ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Credit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});