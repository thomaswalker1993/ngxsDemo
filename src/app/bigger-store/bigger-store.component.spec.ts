import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerStoreComponent } from './bigger-store.component';

describe('BiggerStoreComponent', () => {
  let component: BiggerStoreComponent;
  let fixture: ComponentFixture<BiggerStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiggerStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiggerStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
