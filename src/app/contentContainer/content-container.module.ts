import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentComponent} from './content/content.component';
import {NewOfferComponent} from './new-offer/new-offer.component';
import { FeaturedPostsComponent } from './featured-posts/featured-posts.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BlogTopicsComponent } from './blog-topics/blog-topics.component';




@NgModule({
  declarations: [
    ContentComponent,
    NewOfferComponent,
    FeaturedPostsComponent,
    BlogTopicsComponent,


  ],
  imports: [
    CommonModule,MatButtonModule,MatCardModule

  ],
  exports:[
    ContentComponent,
    NewOfferComponent,
  ]
})
export class ContentContainerModule { }
