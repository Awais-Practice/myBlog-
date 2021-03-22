import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDataService } from '../../shared/services/post-data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  topic = 'home';

  constructor(
    private postDataservice: PostDataService,
    private route: ActivatedRoute,
    private routerService: Router
  ) {}
  topics = this.postDataservice.topics;
  postData;
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postData = this.postDataservice.posts;
    this.postData = this.postData.filter((item) => item.id == id);
    console.log(this.postData);
  }
}
