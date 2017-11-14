import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Button } from 'semantic-ui-react'
import { notNull } from 'app/utils/common'

const { bool, func, object } = PropTypes

class EditCommentDialog extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    onClose: func.isRequired,
    comment: object.isRequired,
    onSubmit: func.isRequired,
  }

  state = {
    body: ''
  }

  componentDidMount () {
    this.setFormState()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.comment.get('body') !== this.props.comment.get('body')) {
      this.setFormState()
    }
  }

  setFormState = () => {
    this.setState({
      body: notNull(this.props.comment.get('body')),
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      body: this.state.body
    }

    this.props.onSubmit(payload)
  }

  render () {
    return (
      <Modal open={this.props.isOpen}>
        <Modal.Header>Edit Comment</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field
                label='Body'
                control='textarea'
                rows='3'
                name='body'
                placeholder='Enter comment here...'
                value={this.state.body}
                onChange={this.handleChange} />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleSubmit} positive content='Submit'></Button>
          <Button onClick={this.props.onClose} negative content='Cancel'></Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EditCommentDialog
