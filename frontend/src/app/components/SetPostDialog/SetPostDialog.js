import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Dropdown, Button } from 'semantic-ui-react'
import { notNull } from 'app/utils/common'

const { bool, object, func } = PropTypes

class SetPostDialog extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    onClose: func.isRequired,
    categoryList: object.isRequired,
    post: object,
    onSubmit: func.isRequired,
  }

  state = {
    category: 'react',
    title: '',
    body: '',
  }

  componentWillMount () {
    this.setState({
      category: this.props.post.get('category') || 'react',
      title: notNull(this.props.post.get('title')),
      body: notNull(this.props.post.get('body')),
    })
  }

  componentDidMount () {
    this.setState({isOpen: true})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleCategoryChange = (e, data) => {
    this.setState({
      category: data.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      category: this.state.category,
      title: this.state.title,
      body: this.state.body,
    }
    this.props.onSubmit(payload)
  }

  render () {
    return (
      <Modal open={this.props.isOpen}>
        <Modal.Header>New Post</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='category'>Category</label>
                <Dropdown
                  id='category'
                  name='category'
                  placeholder='Select Category'
                  selection
                  options={this.props.categoryList.toJS()}
                  value={this.state.category}
                  onChange={this.handleCategoryChange} />
              </Form.Field>
              <Form.Field
                label='Title'
                control='input'
                type='text'
                name='title'
                placeholder='Title'
                value={this.state.title}
                onChange={this.handleChange} />
              <Form.Field
                label='Body'
                control='textarea'
                rows='5'
                name='body'
                placeholder='Enter post content here...'
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

export default SetPostDialog
