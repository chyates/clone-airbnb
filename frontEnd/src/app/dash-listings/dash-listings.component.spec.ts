import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashListingsComponent } from './dash-listings.component';

describe('DashListingsComponent', () => {
  let component: DashListingsComponent;
  let fixture: ComponentFixture<DashListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
