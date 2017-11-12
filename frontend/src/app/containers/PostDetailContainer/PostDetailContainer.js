import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleFetchPostList } from 'app/redux/creators/PostActionCreator'
import { PostDetail } from 'app/components';

class PostDetailContainer extends Component {
  componentWillMount () {
    this.postId = this.props.match.params.postId
  }

  async componentDidMount () {
    if (!this.props.posts.has(this.postId)) {
      await this.props.handleFetchPostList()
      if (!this.props.posts.has(this.postId)) {
        this.props.history.push('/404')
      }
    }
  }
  render () {
    return (
      <PostDetail
        post={this.props.posts.get(this.postId)} />
    );
  }
}

function mapStateToProps ({ PostReducer }) {
  return {
    isLoading: PostReducer.get('isLoading'),
    posts: PostReducer.get('postList'),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleFetchPostList: () => dispatch(handleFetchPostList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
