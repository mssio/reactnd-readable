import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { getUnixTimestamp } from 'app/utils/common'
import { closeSetPost } from 'app/redux/actions/PostActions'
import { handleCreatePost } from 'app/redux/creators/PostActionCreator'
import { SetPostDialog } from 'app/components'

const { object, string } = PropTypes

class SetPostDialogContainer extends Component {
  static propTypes = {
    mode: string.isRequired,
    post: object,
  }

  handleSubmit = async (payload) => {
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
    isOpen: PostReducer.get('isOpenSetPost'),
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
