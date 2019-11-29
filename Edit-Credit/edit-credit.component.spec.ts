import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCredit } from './edit-credit.component';

describe('EditCredit', () => {
  let component: EditCredit;
  let fixture: ComponentFixture<EditCredit>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCredit ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCredit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});