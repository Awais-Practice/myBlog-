import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { CategoriesModule } from '../../shared/components/categories/categories.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [PostDetailComponent],
  imports: [CommonModule, CategoriesModule],
  exports: [PostDetailComponent],
})
export class PostDetailModule {}
