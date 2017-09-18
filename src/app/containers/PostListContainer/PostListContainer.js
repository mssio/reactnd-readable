import React, { Component } from 'react';
import { PostList } from 'app/components';

class PostListContainer extends Component {
  componentDidMount () {
    console.log('Props from Post List Container: ', this.props)
  }

  render () {
    return (
      <PostList />
    );
  }
}

export default PostListContainer;
