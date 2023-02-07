import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMomentComponent } from './one-moment.component';

describe('OneMomentComponent', () => {
  let component: OneMomentComponent;
  let fixture: ComponentFixture<OneMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
