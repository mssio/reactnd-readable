import { Map } from 'immutable'
import {
  FETCHING_POST_LIST,
  FETCHING_POST_LIST_SUCCESS,
  FETCHING_POST_LIST_ERROR,
  SET_FILTERED_POST_CATEGORY,
  UNSET_FILTERED_POST_CATEGORY,
  SORT_POST_BY_DATE,
  SORT_POST_BY_SCORE,
  SORT_POST_BY_COMMENTS,
  OPEN_NEW_POST,
  OPEN_EDIT_POST,
  CLOSE_SET_POST,
  CREATING_POST,
  CREATING_POST_SUCCESS,
  CREATING_POST_ERROR,
  FETCHING_SINGLE_POST,
  FETCHING_SINGLE_POST_SUCCESS,
  FETCHING_SINGLE_POST_ERROR,
  UPDATING_POST,
  UPDATING_POST_SUCCESS,
  UPDATING_POST_ERROR,
  DELETING_POST,
  DELETING_POST_SUCCESS,
  DELETING_POST_ERROR,
  VOTING_UP_POST,
  VOTING_UP_POST_SUCCESS,
  VOTING_UP_POST_ERROR,
  VOTING_DOWN_POST,
  VOTING_DOWN_POST_SUCCESS,
  VOTING_DOWN_POST_ERROR,
} from '../actions/PostActions'

const initialState = Map({
  isLoading: true,
  isFetched: false,
  listError: '',
  createError: '',
  showError: '',
  updateError: '',
  deleteError: '',
  votingUpError: '',
  votingDownError: '',
  postList: Map({}),
  filteredPostCategory: '',
  filteredPostList: Map({}),
  isOpenSetPost: false,
  setPostId: '',
  postDialog: Map({
    isOpen: false,
    mode: '',
    post: Map({}),
  }),
})

function dateSorter (a, b) {
  if (a.get('timestamp') < b.get('timestamp')) return 1
  else return -1
}
function scoreSorter (a, b) {
  if (a.get('voteScore') < b.get('voteScore')) return 1
  else return -1
}
function commentsSorter (a, b) {
  if (a.get('commentCount') < b.get('commentCount')) return 1
  else return -1
}

function updateFilteredPostList (filteredPostState, post) {
  let updatedFilteredPostList

  if (filteredPostState.has(post.id)) {
    const oldPost = filteredPostState.get(post.id)
    if (post.category === oldPost.get('category')) {
      updatedFilteredPostList = filteredPostState.set(post.id, Map(post))
    } else {
      updatedFilteredPostList = filteredPostState.delete(post.id)
    }
  } else {
    updatedFilteredPostList = filteredPostState
  }

  return updatedFilteredPostList
}

export default function post (state = initialState, action) {
  switch (action.type) {
    case FETCHING_POST_LIST:
      return state.merge({
        isLoading: true,
      })
    case FETCHING_POST_LIST_SUCCESS:
      return state.merge({
        isLoading: false,
        isFetched: true,
        listError: '',
        postList: action.postList,
      })
    case FETCHING_POST_LIST_ERROR:
      return state.merge({
        isLoading: false,
        listError: action.error,
      })
    case SET_FILTERED_POST_CATEGORY:
      const filteredPostList = state.get('postList')
        .reduce(function (filtered, entry) {
          if (entry.get('category') === action.categoryId) {
            filtered[entry.get('id')] = entry
          }
          return filtered
        }, {})
      return state.merge({
        filteredPostList: Map(filteredPostList),
        filteredPostCategory: action.categoryId,
      })
    case UNSET_FILTERED_POST_CATEGORY:
      return state.merge({
        filteredPostList: Map({})
      })
    case SORT_POST_BY_DATE:
      return state.merge({
        postList: state.get('postList').sort(dateSorter),
        filteredPostList: state.get('filteredPostList').sort(dateSorter),
      })
    case SORT_POST_BY_SCORE:
      return state.merge({
        postList: state.get('postList').sort(scoreSorter),
        filteredPostList: state.get('filteredPostList').sort(scoreSorter),
      })
    case SORT_POST_BY_COMMENTS:
      return state.merge({
        postList: state.get('postList').sort(commentsSorter),
        filteredPostList: state.get('filteredPostList').sort(commentsSorter),
      })
    case OPEN_NEW_POST:
      return state.merge({
        postDialog: Map({
          isOpen: true,
          mode: 'create',
        })
      })
    case OPEN_EDIT_POST:
      return state.merge({
        postDialog: Map({
          isOpen: true,
          mode: 'update',
          post: action.post,
        })
      })
    case CLOSE_SET_POST:
      return state.merge({
        postDialog: initialState.get('postDialog'),
      })
    case CREATING_POST:
      return state.merge({
        isLoading: true,
      })
    case CREATING_POST_SUCCESS:
      const newPostList = state.get('postList').set(action.post.id, Map(action.post))

      let newFilteredPostList = Map({})
      if (action.post.category === state.get('filteredPostCategory')) {
        newFilteredPostList = state.get('filteredPostList').set(action.post.id, Map(action.post))
      } else {
        newFilteredPostList = state.get('filteredPostList')
      }

      return state.merge({
        isLoading: false,
        createError: '',
        postList: newPostList,
        filteredPostList: newFilteredPostList,
      })
    case CREATING_POST_ERROR:
      return state.merge({
        isLoading: false,
        createError: action.error,
      })
    case FETCHING_SINGLE_POST:
      return state.merge({
        isLoading: true,
      })
    case FETCHING_SINGLE_POST_SUCCESS:
      return state.merge({
        isLoading: false,
        showError: '',
        postList: state.get('postList').set(action.post.id, Map(action.post)),
        filteredPostList: updateFilteredPostList(state.get('filteredPostList'), action.post),
      })
    case FETCHING_SINGLE_POST_ERROR:
      return state.merge({
        isLoading: false,
        showError: action.error,
      })
    case UPDATING_POST:
      return state.merge({
        isLoading: true,
      })
    case UPDATING_POST_SUCCESS:
      return state.merge({
        isLoading: false,
        updateError: '',
        postList: state.get('postList').set(action.post.id, Map(action.post)),
        filteredPostList: updateFilteredPostList(state.get('filteredPostList'), action.post),
      })
    case UPDATING_POST_ERROR:
      return state.merge({
        isLoading: false,
        updateError: action.error,
      })
    case DELETING_POST:
      return state.merge({
        isLoading: true,
      })
    case DELETING_POST_SUCCESS:
      return state.merge({
        isLoading: false,
        deleteError: '',
        postList: state.get('postList').delete(action.postId),
        filteredPostList: state.get('filteredPostList').delete(action.postId),
      })
    case DELETING_POST_ERROR:
      return state.merge({
        isLoading: false,
        deleteError: action.error,
      })
    case VOTING_UP_POST:
      return state.merge({
        isLoading: true,
      })
    case VOTING_UP_POST_SUCCESS:
      return state.merge({
        isLoading: false,
        votingUpError: '',
        postList: state.get('postList').set(action.post.id, Map(action.post)),
        filteredPostList: updateFilteredPostList(state.get('filteredPostList'), action.post),
      })
    case VOTING_UP_POST_ERROR:
      return state.merge({
        isLoading: false,
        votingUpError: action.error,
      })
    case VOTING_DOWN_POST:
      return state.merge({
        isLoading: true,
      })
    case VOTING_DOWN_POST_SUCCESS:
      return state.merge({
        isLoading: false,
        votingDownError: '',
        postList: state.get('postList').set(action.post.id, Map(action.post)),
        filteredPostList: updateFilteredPostList(state.get('filteredPostList'), action.post),
      })
    case VOTING_DOWN_POST_ERROR:
      return state.merge({
        isLoading: false,
        votingDownError: action.error,
      })
    default:
      return state
  }
}
