import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../shared/services/post-data.service';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss'],
})
export class FeaturedPostsComponent implements OnInit {
  constructor(private postsData: PostDataService) {}

  featuredPosts = this.postsData.featuredPosts;
  ngOnInit(): void {}
}
