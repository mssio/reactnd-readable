import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button } from 'semantic-ui-react'

const { bool, func } = PropTypes

class LoginDialog extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    onSubmit: func.isRequired,
  }

  state = {
    username: 'John Doe',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      username: this.state.username
    }
    this.props.onSubmit(payload)
  }

  render () {
    return (
      <Modal open={this.props.isOpen}>
        <Modal.Header>Enter your username</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={this.state.username}
                  onChange={this.handleChange} />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleSubmit} positive content='Submit'></Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default LoginDialog
