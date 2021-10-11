import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TGridModule } from '../shared/t-grid/t-grid.module';

import { BooksComponent } from './books.component';
import { BooksModule } from './books.module';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TGridModule],
      declarations: [ BooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
