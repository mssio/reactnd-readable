import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { getUnixTimestamp } from 'app/utils/common'
import { closeSetPost } from 'app/redux/actions/PostActions'
import { handleCreatePost, handleUpdatePost } from 'app/redux/creators/PostActionCreator'
import { SetPostDialog } from 'app/components'

class SetPostDialogContainer extends Component {
  handleSubmit = async (payload) => {
    if (this.props.mode === 'create') {

      const newPost = {
        ...payload,
        author: this.props.username,
        timestamp: getUnixTimestamp(),
        id: uuidv4(),
      }

      await this.props.handleCreatePost(newPost)
      this.props.closeSetPost()

    } else if (this.props.mode === 'update') {

      await this.props.handleUpdatePost(this.props.post.get('id'), payload)
      this.props.closeSetPost()

    }
  }

  render () {
    return (
      <SetPostDialog
        mode={this.props.mode}
        isOpen={this.props.isOpen}
        onClose={this.props.closeSetPost}
        categoryList={this.props.categoryList}
        onSubmit={this.handleSubmit}
        post={this.props.post} />
    )
  }
}

function mapStateToProps ({ PostReducer, CategoryReducer, UserReducer }) {
  return {
    isOpen: PostReducer.get('postDialog').get('isOpen'),
    mode: PostReducer.get('postDialog').get('mode'),
    post: PostReducer.get('postDialog').get('post'),
    categoryList: CategoryReducer.get('categoryList').map(cat => ({
      text: cat.name,
      value: cat.path,
    })),
    username: UserReducer.get('username'),
  }
}

const actions = {
  closeSetPost,
  handleCreatePost,
  handleUpdatePost,
}

export default connect(mapStateToProps, actions)(SetPostDialogContainer)
