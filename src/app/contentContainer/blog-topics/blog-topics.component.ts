import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
interface Topics {
  value: string;
  viewValue: string;
}
import { PostDataService } from '../shared/post-data.service';

@Component({
  selector: 'app-blog-topics',
  templateUrl: './blog-topics.component.html',
  styleUrls: ['./blog-topics.component.scss'],
})
export class BlogTopicsComponent implements OnInit {
  topic = 'home';
  topics: Topics[] = [
    { value: 'home', viewValue: 'Home' },
    { value: 'profile', viewValue: 'Profile' },
    { value: 'messages', viewValue: 'Messages' },
    { value: 'settings', viewValue: 'Settings' },
  ];

  constructor(private postDataService: PostDataService) {}
  get posts() {
    return this.postDataService.posts.filter((post) => {
      return post.category === this.topic;
    });
  }

  ngOnInit(): void {}
}
