import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { FilterService } from 'src/app/shared/services/filter-service/filter.service';
import { TColumnComponent } from 'src/app/shared/t-grid/t-column/t-column.component';
import { TGridModule } from 'src/app/shared/t-grid/t-grid.module';

import { BooksListComponent } from './books-list.component';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[FilterService],
      imports: [
        CommonModule,
        MaterialModule,
        HttpClientTestingModule,
        TGridModule
        ],
      declarations: [ BooksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
