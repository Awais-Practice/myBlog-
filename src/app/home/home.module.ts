import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { FeaturedPostsComponent } from './featured-posts/featured-posts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BlogTopicsComponent } from './blog-topics/blog-topics.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HomeComponent,
    AlertComponent,
    FeaturedPostsComponent,
    BlogTopicsComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatSelectModule],
  exports: [HomeComponent, AlertComponent],
})
export class HomeModule {}
