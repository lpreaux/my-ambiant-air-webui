export interface Post {
  id: number;
  message: string;
  threadId: number;
  threadTitle: string;
  replies: Post[];
}
