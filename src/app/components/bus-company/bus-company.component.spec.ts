import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCompanyComponent } from './bus-company.component';

describe('BusCompanyComponent', () => {
  let component: BusCompanyComponent;
  let fixture: ComponentFixture<BusCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
