import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { IPost } from './posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  featuredPosts: IPost[] = [
    {
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

  constructor() {}
}
