import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverViewListComponent } from './driver-view-list.component';

describe('DriverViewListComponent', () => {
  let component: DriverViewListComponent;
  let fixture: ComponentFixture<DriverViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
