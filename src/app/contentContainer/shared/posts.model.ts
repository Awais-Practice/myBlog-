export interface IPost {
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