import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterService } from '../../services/filter-service/filter.service';

import { TPaginationComponent } from './t-pagination.component';

describe('TPaginationComponent', () => {
  let component: TPaginationComponent;
  let fixture: ComponentFixture<TPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FilterService],
      declarations: [ TPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
