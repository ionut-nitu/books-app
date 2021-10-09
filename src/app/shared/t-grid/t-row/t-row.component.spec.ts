import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRowComponent } from './t-row.component';

describe('TRowComponent', () => {
  let component: TRowComponent;
  let fixture: ComponentFixture<TRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
