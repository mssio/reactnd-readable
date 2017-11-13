import React from 'react'
import PropTypes from 'prop-types'
import { CommentEntryContainer } from 'app/containers'

const { object } = PropTypes

CommentList.propTypes = {
  comments: object.isRequired,
}

export default function CommentList ({ comments }) {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>

      {comments.map(comment => {
        return (
          <div key={comment.get('id')}>
            <CommentEntryContainer entry={comment} />
          </div>
        )
      })}

      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
        </div>
        <div className="ui blue labeled submit icon button">
          <i className="icon edit"></i> Add Comment
        </div>
      </form>
    </div>
  )
}
