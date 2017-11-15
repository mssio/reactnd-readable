import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setFilteredPostCategory,
  unsetFilteredPostCategory,
  openNewPost,
} from 'app/redux/actions/PostActions'
import {
  handleFetchPostList,
  handleSortPostList,
} from 'app/redux/creators/PostActionCreator'
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

  handleChangeSort = (e, data) => {
    console.log('Sort by', data.value)
    this.props.handleSortPostList(data.value)
  }

  render () {
    const sortOptions = [
      {
        text: 'Date',
        value: 'date',
      },
      {
        text: 'Score',
        value: 'score',
      },
      {
        text: 'Comments',
        value: 'comments',
      },
    ]

    const posts = typeof(this.props.match.params.categoryId) === 'undefined'
      ? this.props.posts.valueSeq()
      : this.props.filteredPosts.valueSeq()

    return this.props.isLoading
      ? <Loading />
      : <PostList
          posts={posts}
          onOpenNewPost={this.props.openNewPost}
          sortOptions={sortOptions}
          onChangeSort={this.handleChangeSort} />
  }
}

function mapStateToProps ({ PostReducer }) {
  return {
    isLoading: PostReducer.get('isLoading'),
    posts: PostReducer.get('postList'),
    filteredPosts: PostReducer.get('filteredPostList'),
  }
}

const actions = {
  setFilteredPostCategory,
  unsetFilteredPostCategory,
  handleFetchPostList,
  handleSortPostList,
  openNewPost
}

export default connect(mapStateToProps, actions)(PostListContainer)
