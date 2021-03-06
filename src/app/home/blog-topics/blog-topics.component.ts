import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { PostDataService } from '../../shared/services/post-data.service';

@Component({
  selector: 'app-blog-topics',
  templateUrl: './blog-topics.component.html',
  styleUrls: ['./blog-topics.component.scss'],
})
export class BlogTopicsComponent implements OnInit {
  topic = 'home';

  constructor(private postDataService: PostDataService) {}
  topics = this.postDataService.topics;

  get posts() {
    return this.postDataService.posts.filter((post) => {
      return post.category === this.topic;
    });
  }
  getTopic(topic) {
    console.log(topic);
    this.topic = topic;
  }

  ngOnInit(): void {}
}
