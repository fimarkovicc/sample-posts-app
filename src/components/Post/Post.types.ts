export type PostType = {
    title: string
    id: number
    userId: number
    body: string
  }
  
  export type CommentType = {
    name: string
    id: number
    postId: number
    body: string
  }