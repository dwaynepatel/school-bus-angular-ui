import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPassengerListComponent } from './journey-passenger-list.component';

describe('JourneyPassengerListComponent', () => {
  let component: JourneyPassengerListComponent;
  let fixture: ComponentFixture<JourneyPassengerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPassengerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPassengerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
