import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPassengerEditComponent } from './journey-passenger-edit.component';

describe('JourneyPassengerEditComponent', () => {
  let component: JourneyPassengerEditComponent;
  let fixture: ComponentFixture<JourneyPassengerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPassengerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPassengerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
