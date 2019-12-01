import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCreditComponent } from './add-new-credit.component';

describe('AddNewCreditComponent', () => {
  let component: AddNewCreditComponent;
  let fixture: ComponentFixture<AddNewCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
