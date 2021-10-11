import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FilterService } from '../../services/filter-service/filter.service';

import { TPaginationComponent } from './t-pagination.component';

describe('TPaginationComponent', () => {
  let component: TPaginationComponent;
  let fixture: ComponentFixture<TPaginationComponent>;
  let service: FilterService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FilterService],
      declarations: [ TPaginationComponent ]
    })
    .compileComponents();
    service = TestBed.inject(FilterService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change page limit', () => {
    spyOn(component, 'onPageSizeChange');
    const compiled = fixture.debugElement.nativeElement;
    let select = compiled.querySelector('select')
    select.value = select.options[1].value; 
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.onPageSizeChange).toHaveBeenCalledWith('10');
  });
});
