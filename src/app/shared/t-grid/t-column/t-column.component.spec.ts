import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterService } from '../../services/filter-service/filter.service';

import { TColumnComponent } from './t-column.component';

describe('TColumnComponent', () => {
  let component: TColumnComponent;
  let fixture: ComponentFixture<TColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[FilterService],
      declarations: [ TColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
