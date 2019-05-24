import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTwoComponent } from './selector-two.component';

describe('SelectorTwoComponent', () => {
  let component: SelectorTwoComponent;
  let fixture: ComponentFixture<SelectorTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
