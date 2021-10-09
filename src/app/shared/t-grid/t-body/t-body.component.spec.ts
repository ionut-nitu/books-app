import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBodyComponent } from './t-body.component';

describe('TBodyComponent', () => {
  let component: TBodyComponent;
  let fixture: ComponentFixture<TBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
