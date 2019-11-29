import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCredit } from './add-new-credit.component';

describe('AddNewCredit', () => {
  let component: AddNewCredit;
  let fixture: ComponentFixture<AddNewCredit>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCredit ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCredit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});