
import React from 'react';
import Post from './Post';

const PostList = ({ post, updatePost, deletePost }) => (
  <div classname="row">
    { posts.map( post =>
      <Post
        key={post.id}
        {...post}
        updatePost={updatePost}
        deletePost={deletePost}
        />
    )
    }
   </div>
)

export default PostList