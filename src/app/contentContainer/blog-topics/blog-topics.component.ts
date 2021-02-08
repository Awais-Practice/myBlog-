import { Component, OnInit } from '@angular/core';
interface Topics {
  value: string;
  viewValue: string;
}

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

  constructor() {}

  ngOnInit(): void {}
}
