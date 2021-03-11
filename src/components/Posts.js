import React from 'react';
import { Consumer } from '../context/Provider'

const Posts = () => (
  <Consumer>
    {
      ({ posts }) => (
        <ul>
          {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
      )
    }
  </Consumer>
);

export default Posts;
