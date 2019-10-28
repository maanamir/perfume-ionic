import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerfumePage } from './add-perfume.page';

describe('AddPerfumePage', () => {
  let component: AddPerfumePage;
  let fixture: ComponentFixture<AddPerfumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPerfumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerfumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
