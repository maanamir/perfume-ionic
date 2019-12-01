import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumelistitemComponent } from './perfumelistitem.component';

describe('PerfumelistitemComponent', () => {
  let component: PerfumelistitemComponent;
  let fixture: ComponentFixture<PerfumelistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumelistitemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumelistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
