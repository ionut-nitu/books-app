import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterService } from '../services/filter-service/filter.service';
import { TColumnComponent } from './t-column/t-column.component';

import { TGridComponent } from './t-grid.component';
import { TGridModule } from './t-grid.module';
import { TPaginationComponent } from './t-pagination/t-pagination.component';

describe('TGridComponent', () => {
  let component: TGridComponent;
  let fixture: ComponentFixture<TGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[FilterService],
      imports:[TGridModule],
      declarations: [ TGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
