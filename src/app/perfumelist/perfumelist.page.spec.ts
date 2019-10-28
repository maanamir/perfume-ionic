import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumelistPage } from './perfumelist.page';

describe('PerfumelistPage', () => {
  let component: PerfumelistPage;
  let fixture: ComponentFixture<PerfumelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
