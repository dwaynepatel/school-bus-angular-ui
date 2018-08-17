import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerRouteListComponent } from './passenger-route-list.component';

describe('PassengerRouteListComponent', () => {
  let component: PassengerRouteListComponent;
  let fixture: ComponentFixture<PassengerRouteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerRouteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerRouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
