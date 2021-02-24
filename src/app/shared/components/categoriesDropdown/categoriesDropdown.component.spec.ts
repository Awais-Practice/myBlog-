import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDropdownComponent } from './categoriesDropdown.component';

describe('CategoriesComponent', () => {
  let component: CategoriesDropdownComponent;
  let fixture: ComponentFixture<CategoriesDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesDropdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
