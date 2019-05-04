import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionPastComponent } from './inspection-past.component';

describe('InspectionPastComponent', () => {
  let component: InspectionPastComponent;
  let fixture: ComponentFixture<InspectionPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
