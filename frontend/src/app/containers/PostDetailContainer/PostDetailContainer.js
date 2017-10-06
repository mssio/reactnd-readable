import React, { Component } from 'react';
import { PostDetail } from 'app/components';

class PostDetailContainer extends Component {
  componentDidMount () {
    console.log('Props from Post Detail Container: ', this.props)
  }
  render () {
    return (
      <PostDetail />
    );
  }
}

export default PostDetailContainer;
