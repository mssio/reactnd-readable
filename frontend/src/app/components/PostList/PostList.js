import React from 'react'
import PropTypes from 'prop-types'
import { Button  } from 'semantic-ui-react'
import { PostEntryContainer } from 'app/containers'

const styles = {
  listContainer: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
}

const { object, func } = PropTypes

PostList.propTypes = {
  posts: object.isRequired,
  onOpenNewPost: func.isRequired,
}

export default function PostList (props) {
  return (
    <div>
      <h2>Post List</h2>

      <Button primary content='New Post' onClick={props.onOpenNewPost} />

      <ul style={styles.listContainer}>
        {props.posts.map(post => (
          <li style={styles.listItem} key={post.get('id')}>
            <PostEntryContainer entry={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}
