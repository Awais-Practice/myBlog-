import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesDropdownComponent } from './categoriesDropdown.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CategoriesDropdownComponent],
  imports: [CommonModule, MatSelectModule],
  exports: [CategoriesDropdownComponent],
})
export class CategoriesDropdownModule {}
