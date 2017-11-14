import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setFilteredPostCategory,
  unsetFilteredPostCategory,
  openNewPost,
} from 'app/redux/actions/PostActions'
import { handleFetchPostList } from 'app/redux/creators/PostActionCreator'
import { Loading, PostList } from 'app/components'

class PostListContainer extends Component {
  componentDidMount () {
    this.updateSelectedCategory()
    this.props.handleFetchPostList()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.categoryId !== this.props.match.params.categoryId) {
      this.updateSelectedCategory()
    }
  }

  updateSelectedCategory = () => {
    if (typeof(this.props.match.params.categoryId) !== 'undefined') {
      this.props.setFilteredPostCategory(this.props.match.params.categoryId)
    } else {
      this.props.unsetFilteredPostCategory()
    }
  }

  postSorter (a, b) {
    if (a.get('timestamp') < b.get('timestamp')) return 1
    else return -1
  }

  render () {
    const posts = typeof(this.props.match.params.categoryId) === 'undefined'
      ? this.props.posts.sort(this.postSorter).valueSeq()
      : this.props.filteredPosts.sort(this.postSorter).valueSeq()

    return this.props.isLoading
      ? <Loading />
      : <PostList posts={posts} onOpenNewPost={this.props.onOpenNewPost} />
  }
}

function mapStateToProps ({ PostReducer }) {
  return {
    isLoading: PostReducer.get('isLoading'),
    posts: PostReducer.get('postList'),
    filteredPosts: PostReducer.get('filteredPostList'),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setFilteredPostCategory: (categoryId) => dispatch(setFilteredPostCategory(categoryId)),
    unsetFilteredPostCategory: () => dispatch(unsetFilteredPostCategory()),
    handleFetchPostList: () => dispatch(handleFetchPostList()),
    onOpenNewPost: () => dispatch(openNewPost()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
