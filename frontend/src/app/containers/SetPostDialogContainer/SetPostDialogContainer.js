import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { getUnixTimestamp } from 'app/utils/common'
import { closeSetPost } from 'app/redux/actions/PostActions'
import { handleCreatePost } from 'app/redux/creators/PostActionCreator'
import { SetPostDialog } from 'app/components'

class SetPostDialogContainer extends Component {
  handleSubmit = async (payload) => {
    console.log(this.props.mode)
    if (this.props.mode === 'create') {

      const newPost = {
        ...payload,
        author: this.props.username,
        timestamp: getUnixTimestamp(),
        id: uuidv4(),
      }

      this.props.handleCreatePost(newPost)
      this.props.onClose()
    } else if (this.props.mode === 'update') {
      //
    }
  }

  render () {
    return (
      <SetPostDialog
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
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

function mapDispatchToProps (dispatch) {
  return {
    onClose: () => dispatch(closeSetPost()),
    handleCreatePost: (postData) => dispatch(handleCreatePost(postData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetPostDialogContainer)
