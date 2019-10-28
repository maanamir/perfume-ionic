import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumePage } from './perfume.page';

describe('PerfumePage', () => {
  let component: PerfumePage;
  let fixture: ComponentFixture<PerfumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
