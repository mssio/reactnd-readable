import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleFetchPostList } from 'app/redux/creators/PostActionCreator'
import { Loading, PostDetail } from 'app/components';

class PostDetailContainer extends Component {
  componentWillMount () {
    this.postId = this.props.match.params.postId
  }

  componentDidMount () {
    if (!this.props.isFetched && !this.props.posts.has(this.postId)) {
      this.props.handleFetchPostList()
    } else if (this.props.isFetched && !this.props.posts.has(this.postId)) {
      this.props.history.push('/404')
    }
  }

  render () {
    return this.props.isLoading
      ? <Loading />
      : <PostDetail
        post={this.props.posts.get(this.postId)} />
  }
}

function mapStateToProps ({ PostReducer }) {
  return {
    isLoading: PostReducer.get('isLoading') || !PostReducer.get('isFetched'),
    isFetched: PostReducer.get('isFetched'),
    posts: PostReducer.get('postList'),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleFetchPostList: () => dispatch(handleFetchPostList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
