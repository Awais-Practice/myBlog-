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
  topic = 'home-0';
  topics: Topics[] = [
    { value: 'home-0', viewValue: 'Home' },
    { value: 'profile-1', viewValue: 'Profile' },
    { value: 'messages-2', viewValue: 'Messages' },
    { value: 'settings-2', viewValue: 'Settings' },
  ];

  constructor(private blogTopicsComponent: PostDataService) {}
  topicsPostsHome = this.blogTopicsComponent.topicPostsHome;
  topicPostsProfile = this.blogTopicsComponent.topicPostsProfile;
  topicPostsMessages = this.blogTopicsComponent.topicPostsMessages;
  topicPostsSettings = this.blogTopicsComponent.topicPostsSettings;

  ngOnInit(): void {}
}
