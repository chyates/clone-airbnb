import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashReservesComponent } from './dash-reserves.component';

describe('DashReservesComponent', () => {
  let component: DashReservesComponent;
  let fixture: ComponentFixture<DashReservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashReservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
