import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown } from 'semantic-ui-react'
import { PostEntryContainer } from 'app/containers'

const styles = {
  buttonContainer: {
    marginBottom: '30px',
  },
  listContainer: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
}

const { object, func, array } = PropTypes

PostList.propTypes = {
  posts: object.isRequired,
  onOpenNewPost: func.isRequired,
  sortOptions: array.isRequired,
  onChangeSort: func.isRequired,
}

export default function PostList (props) {
  return (
    <div>
      <h2>Post List</h2>

      <div style={styles.buttonContainer}>
        <Button primary content='New Post' onClick={props.onOpenNewPost} />
      </div>

      <div>
        <Dropdown icon='sort' floating labeled button className='icon'
          id='sort'
          name='sort'
          placeholder='Sort By'
          selection
          options={props.sortOptions}
          onChange={props.onChangeSort} />
      </div>

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
