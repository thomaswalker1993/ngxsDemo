import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreArraysComponent } from './store-arrays.component';

describe('StoreArraysComponent', () => {
  let component: StoreArraysComponent;
  let fixture: ComponentFixture<StoreArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
