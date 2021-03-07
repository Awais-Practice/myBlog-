import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PostDataService } from '../../shared/services/post-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss'],
})
export class FeaturedPostsComponent implements OnInit {
  constructor(
    private postsData: PostDataService,
    private route: ActivatedRoute,
    private routerService: Router
  ) {
    this.route.params.subscribe((params) => {
      alert(params);
    });
  }

  featuredPosts = this.postsData.featuredPosts;
  ngOnInit(): void {}
}
