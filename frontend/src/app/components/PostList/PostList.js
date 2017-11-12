import React from 'react'
import { PostEntryContainer } from 'app/containers'

const styles = {
  listContainer: {
    listStyle: 'none',
  },
  listItem: {
    marginBottom: '10px',
  },
}

export default function PostList (props) {
  return (
    <div>
      <h2>Post List</h2>

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
