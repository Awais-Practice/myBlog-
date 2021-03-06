export interface IPost {
  category: string;
  postImg: string;
  postAuthor: {
    name: string;
    authorPost: string;
    avatarImg: string;
  };
  creationDate: string;
  postTitle: string;
  description: string;
}

export interface Topics {
  value: string;
  viewValue: string;
}
