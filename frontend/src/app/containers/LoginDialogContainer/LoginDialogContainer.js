import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  handleGetUsername,
  handleSetUsername
} from 'app/redux/creators/UserActionCreator'
import { LoginDialog } from 'app/components'

class LoginDialogContainer extends Component {
  componentWillMount () {
    this.props.handleGetUsername()
  }

  handleSubmit = (formPayload) => {
    this.props.handleSetUsername(formPayload.username)
  }

  render () {
    const isOpen = this.props.username === ''

    return (
      <LoginDialog
        isOpen={isOpen}
        onSubmit={this.handleSubmit} />
    )
  }
}

function mapStateToProps ({ UserReducer }) {
  return {
    username: UserReducer.get('username')
  }
}

const actions = {
  handleGetUsername,
  handleSetUsername,
}

export default connect(mapStateToProps, actions)(LoginDialogContainer)
