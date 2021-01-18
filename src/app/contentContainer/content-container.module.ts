import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentComponent} from './content/content.component';
import {NewOfferComponent} from './new-offer/new-offer.component';
import { FeaturedPostsComponent } from './featured-posts/featured-posts.component';




@NgModule({
  declarations: [
    ContentComponent,
    NewOfferComponent,
    FeaturedPostsComponent,


  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContentComponent,
    NewOfferComponent,
  ]
})
export class ContentContainerModule { }
