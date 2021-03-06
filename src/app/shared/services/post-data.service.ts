import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { IPost, Topics } from './posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  featuredPosts: IPost[] = [
    {
      id: 1,
      category: 'home',
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
      id: 2,
      category: 'home',
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
      id: 2,
      category: 'home',
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

  posts: IPost[] = [
    {
      id: 1,
      category: 'home',
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
      id: 2,
      category: 'home',
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
      id: 3,
      category: 'profile',
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
    {
      id: 4,
      category: 'messages',
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
    {
      id: 5,
      category: 'settings',
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
    {
      id: 6,
      category: 'settings',
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
    {
      id: 7,
      category: 'settings',
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

  topics: Topics[] = [
    { value: 'home', viewValue: 'Home' },
    { value: 'profile', viewValue: 'Profile' },
    { value: 'messages', viewValue: 'Messages' },
    { value: 'settings', viewValue: 'Settings' },
  ];

  constructor() {}
}
