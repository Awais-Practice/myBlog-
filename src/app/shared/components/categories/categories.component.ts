import { Component, OnInit } from '@angular/core';
interface Topics {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor() {}
  topic = 'test';
  topics: Topics[] = [
    { value: 'home', viewValue: 'Home' },
    { value: 'profile', viewValue: 'Profile' },
    { value: 'messages', viewValue: 'Messages' },
    { value: 'settings', viewValue: 'Settings' },
  ];

  ngOnInit(): void {}
}
