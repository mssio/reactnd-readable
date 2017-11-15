import { Map, fromJS } from 'immutable'
import {
  FETCHING_COMMENT_LIST,
  FETCHING_COMMENT_LIST_SUCCESS,
  FETCHING_COMMENT_LIST_ERROR,
  CREATING_COMMENT,
  CREATING_COMMENT_SUCCESS,
  CREATING_COMMENT_ERROR,
  OPEN_EDIT_COMMENT,
  CLOSE_EDIT_COMMENT,
  UPDATING_COMMENT,
  UPDATING_COMMENT_SUCCESS,
  UPDATING_COMMENT_ERROR,
  DELETING_COMMENT,
  DELETING_COMMENT_SUCCESS,
  DELETING_COMMENT_ERROR,
  UP_VOTING_COMMENT,
  UP_VOTING_COMMENT_SUCCESS,
  UP_VOTING_COMMENT_ERROR,
  DOWN_VOTING_COMMENT,
  DOWN_VOTING_COMMENT_SUCCESS,
  DOWN_VOTING_COMMENT_ERROR,
} from '../types/CommentActionTypes'

const initialState = Map({
  isLoading: true,
  isFetched: false,
  listError: '',
  createError: '',
  updateError: '',
  deleteError: '',
  upVotingError: '',
  downVotingError: '',
  commentList: Map({}),
  commentDialog: Map({
    isOpen: false,
    comment: Map({}),
  }),
})

export default function comment (state = initialState, action) {
  switch (action.type) {
    case FETCHING_COMMENT_LIST:
      return state.merge({
        isLoading: true,
      })
    case FETCHING_COMMENT_LIST_SUCCESS:
      return state.merge({
        isLoading: false,
        isFetched: true,
        listError: '',
        commentList: state.get('commentList').set(action.postId, fromJS(action.commentList)),
      })
    case FETCHING_COMMENT_LIST_ERROR:
      return state.merge({
        isLoading: false,
        listError: action.error,
      })
    case CREATING_COMMENT:
      return state.merge({
        isLoading: true,
      })
    case CREATING_COMMENT_SUCCESS:
      return state.merge({
        isLoading: false,
        createError: '',
        commentList: state.get('commentList').has(action.comment.parentId)
          ? state.get('commentList').merge({
            [action.comment.parentId]: state
              .get('commentList')
              .get(action.comment.parentId)
              .set(action.comment.id, Map(action.comment))
          })
          : state.get('commentList')
            .set(action.comment.parentId, Map({
              [action.comment.id]: Map(action.comment)
            }))
      })
    case CREATING_COMMENT_ERROR:
      return state.merge({
        isLoading: false,
        createError: action.error,
      })
    case OPEN_EDIT_COMMENT:
      return state.merge({
        commentDialog: Map({
          isOpen: true,
          comment: action.comment,
        })
      })
    case CLOSE_EDIT_COMMENT:
      return state.merge({
        commentDialog: initialState.get('commentDialog')
      })
    case UPDATING_COMMENT:
      return state.merge({
        isLoading: true,
      })
    case UPDATING_COMMENT_SUCCESS:
      return state.merge({
        isLoading: false,
        updateError: '',
        commentList: state.get('commentList').merge({
          [action.comment.parentId]: state
            .get('commentList')
            .get(action.comment.parentId)
            .set(action.comment.id, Map(action.comment))
        })
      })
    case UPDATING_COMMENT_ERROR:
      return state.merge({
        isLoading: false,
        updateError: action.error,
      })
    case DELETING_COMMENT:
      return state.merge({
        isLoading: true,
      })
    case DELETING_COMMENT_SUCCESS:
      return state.merge({
        isLoading: false,
        deleteError: '',
        commentList: state.get('commentList').merge({
          [action.comment.parentId]: state
            .get('commentList')
            .get(action.comment.parentId)
            .delete(action.comment.id)
        })
      })
    case DELETING_COMMENT_ERROR:
      return state.merge({
        isLoading: false,
        deleteError: action.error,
      })
    case UP_VOTING_COMMENT:
      return state.merge({
        isLoading: true,
      })
    case UP_VOTING_COMMENT_SUCCESS:
      return state.merge({
        isLoading: false,
        upVotingError: '',
        commentList: state.get('commentList').merge({
          [action.comment.parentId]: state
            .get('commentList')
            .get(action.comment.parentId)
            .set(action.comment.id, Map(action.comment))
        })
      })
    case UP_VOTING_COMMENT_ERROR:
      return state.merge({
        isLoading: false,
        upVotingError: action.error,
      })
    case DOWN_VOTING_COMMENT:
      return state.merge({
        isLoading: true,
      })
    case DOWN_VOTING_COMMENT_SUCCESS:
      return state.merge({
        isLoading: false,
        downVotingError: '',
        commentList: state.get('commentList').merge({
          [action.comment.parentId]: state
            .get('commentList')
            .get(action.comment.parentId)
            .set(action.comment.id, Map(action.comment))
        })
      })
    case DOWN_VOTING_COMMENT_ERROR:
      return state.merge({
        isLoading: false,
        downVotingError: action.error,
      })
    default:
      return state
  }
}
