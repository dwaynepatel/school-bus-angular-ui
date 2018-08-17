import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCompanyEditComponent } from './bus-company-edit.component';

describe('BusCompanyEditComponent', () => {
  let component: BusCompanyEditComponent;
  let fixture: ComponentFixture<BusCompanyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusCompanyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusCompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
