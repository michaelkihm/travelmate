import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Post from './Post/Post';

// const renderPosts = (posts) => {
//   return posts.map((post, i) => (
//     <Post
//       key={`post_${i}`}
//       name={post.name}
//       body={post.body}
//       image={post.image ? post.image : null}
//     />
//   ));
// };

export default function Posts(props) {
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
      {props.posts.map((post, i) => (
        <Post
          key={`post_${i}`}
          user={post.user}
          body={post.body}
          image={post.img ? post.img : ''}
        />
      ))}
    </Card>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
