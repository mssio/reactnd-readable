import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'
import { CommentEntryContainer } from 'app/containers'

const { object, func } = PropTypes

class CommentList extends Component {
  state = {
    body: '',
  }

  static propTypes = {
    comments: object.isRequired,
    onAddComment: func.isRequired,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      body: this.state.body,
    }
    this.props.onAddComment(payload)
  }

  render () {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>

        {this.props.comments.map(comment => {
          return (
            <div key={comment.get('id')}>
              <CommentEntryContainer entry={comment} />
            </div>
          )
        })}

        <Form onSubmit={this.handleSubmit} className='ui reply form'>
          <Form.Field
            control='textarea'
            rows='5'
            name='body'
            placeholder='Enter new comment here...'
            value={this.state.body}
            onChange={this.handleChange} />
          <Button positive type='submit' content='Add Comment' icon='edit' labelPosition='left' />
        </Form>
      </div>
    )
  }
}

export default CommentList
