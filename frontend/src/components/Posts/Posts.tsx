import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

import Post, {Props as PostType} from './Post/Post';



type Props = {
posts: PostType[]
}

const Posts : React.FunctionComponent<Props> = ({posts}) => {
  return (
    <Card className="p-2">
      <Form className="m-2">
        <Form.Control type="text" placeholder="Where I want to go..." />
        <Form.File
          id="custom-file-translate-scss"
          label="Upload image"
          lang="en"
          custom
          className="m-1"
        />
        <Button type="submit">Post</Button>
      </Form>
      {posts.map((post, i) => (
        <Post
          key={`post_${i}`}
          user={post.user}
          body={post.body}
          image={post.image ? post.image : ''}
        />
      ))}
    </Card>
  );
}

export default Posts
