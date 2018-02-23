import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReserveComponent } from './book-reserve.component';

describe('BookReserveComponent', () => {
  let component: BookReserveComponent;
  let fixture: ComponentFixture<BookReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
