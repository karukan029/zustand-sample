import { FC } from "react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Props = {
  posts: Post[];
}

const Posts: FC<Props> = (props) => {
  return (
    <div>
      <h3>Posts</h3>
      <div>
      {props.posts.map((item) => (
        <div key={item.id}>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.body}</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Posts