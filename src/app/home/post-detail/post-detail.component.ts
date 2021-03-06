import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../shared/services/post-data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  topic = 'home';

  constructor(private postDataservice: PostDataService) {}
  topics = this.postDataservice.topics;

  ngOnInit(): void {}
}
