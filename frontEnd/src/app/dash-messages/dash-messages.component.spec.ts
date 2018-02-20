import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMessagesComponent } from './dash-messages.component';

describe('DashMessagesComponent', () => {
  let component: DashMessagesComponent;
  let fixture: ComponentFixture<DashMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
