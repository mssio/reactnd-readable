import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import pluralize from 'pluralize'
import { Link } from 'react-router-dom'

const styles = {
  extraContentText: {
    marginRight: '8px',
  }
}

const { object, bool, func } = PropTypes

PostEntry.propTypes = {
  entry: object.isRequired,
  isUpvoteDisabled: bool.isRequired,
  isDownvoteDisabled: bool.isRequired,
  onUpvote: func.isRequired,
  onDownvote: func.isRequired,
}

export default function PostEntry (props) {
  const { entry } = props

  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="header">
          <Link to={`/${entry.get('category')}/${entry.get('id')}`}>
            {entry.get('title')}
          </Link>
        </div>
        <div className="meta">{moment(entry.get('timestamp')).fromNow()}</div>
        <div className="descirption">
          <p>{entry.get('body')}</p>
        </div>
      </div>
      <div className="extra content">
        <span className="left floated">
          <button disabled={props.isUpvoteDisabled} onClick={props.onUpvote} className='ui circular arrow up icon button'>
            <i className="arrow up icon" />
          </button>
          <button disabled={props.isDownvoteDisabled} onClick={props.onDownvote} className='ui circular arrow down icon button'>
            <i className="arrow down icon" />
          </button>
          <span style={styles.extraContentText}>
            {pluralize('Votes', entry.get('voteScore'), true)}
          </span>
          <span style={styles.extraContentText}>
            {pluralize('Comments', entry.get('commentCount'), true)}
          </span>
        </span>
        <span className="right floated author">
          {entry.get('author')}
        </span>
      </div>
    </div>
    )
}
