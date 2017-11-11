import React from 'react'
// import PropTypes from 'prop-types'

export default function PostList (props) {
  return (
    <div>
      <h2>Post List</h2>

      <ul>
        {props.posts.map(post => (
          <li key={post.get('id')}>{post.get('title')}</li>
        ))}
      </ul>
    </div>
  )
}
