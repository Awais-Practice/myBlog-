import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, MatSelectModule],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
