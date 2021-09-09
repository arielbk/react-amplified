import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { DataStore } from '@aws-amplify/datastore';

import { Post } from "./models";

export default function PostList () {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      // Get all of our posts and update state with them
      const postData = await DataStore.query(Post);
      setPosts(postData);
    }
    getData();
  }, [])

  // Loop through posts and display them
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 300)}...</p>
        </div>
      ))}
    </div>
  );
}
