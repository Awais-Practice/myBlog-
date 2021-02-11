import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../shared/post-data.service';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss'],
})
export class FeaturedPostsComponent implements OnInit {
  constructor(private postsData: PostDataService) {
    console.log(postsData);
  }

  featuredPosts = this.postsData.featuredPosts;
  ngOnInit(): void {}
}
