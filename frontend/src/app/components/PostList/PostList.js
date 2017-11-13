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

const { object } = PropTypes

PostList.propTypes = {
  posts: object.isRequired,
}

export default function PostList ({ posts }) {
  return (
    <div>
      <h2>Post List</h2>

      <Button primary content='New Post' />

      <ul style={styles.listContainer}>
        {posts.map(post => (
          <li style={styles.listItem} key={post.get('id')}>
            <PostEntryContainer entry={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}
