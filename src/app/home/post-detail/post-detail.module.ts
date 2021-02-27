import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [PostDetailComponent],
  imports: [CommonModule],
  exports: [PostDetailComponent],
})
export class PostDetailModule {}
