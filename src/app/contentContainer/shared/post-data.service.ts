import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { IPost } from './posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  featuredPosts: IPost[] = [
    {
      postImg: 'feture1.jpg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'Starting a business is hard, we get it. It wasn’t so long ago that DigitalOcean was there too. There’s a lot to tackle.',
    },
    {
      postImg: 'feture1.jpg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'Starting a business is hard, we get it. It wasn’t so long ago that DigitalOcean was there too. There’s a lot to tackle.',
    },
    {
      postImg: 'feture1.jpg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'Starting a business is hard, we get it. It wasn’t so long ago that DigitalOcean was there too. There’s a lot to tackle.',
    },
  ];

  topicPostsHome: IPost[] = [
    {
      postImg: 'feture1.jpg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
    {
      postImg: 'feture1.jpg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
    {
      postImg: 'feture1.jpg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
  ];

  topicPostsProfile: IPost[] = [
    {
      postImg: 'feature2.png',
      postAuthor: {
        name: 'Shantanu awais',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
  ];
  topicPostsMessages: IPost[] = [
    {
      postImg: 'feature3.jpeg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
  ];
  topicPostsSettings: IPost[] = [
    {
      postImg: 'feature3.jpeg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
    {
      postImg: 'feature3.jpeg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
    {
      postImg: 'feature3.jpeg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
    {
      postImg: 'feature3.jpeg',
      postAuthor: {
        name: 'Shantanu Kedar',
        authorPost: 'Developer Relations',
        avatarImg: 'avtar1.jpeg',
      },
      creationDate: '10-22-2021',
      postTitle: '  Jump-start your startup with DigitalOcean App Platform',
      description:
        'DigitalOcean Droplets are on-demand, Linux virtual machines suit ...',
    },
  ];

  constructor() {}
}
