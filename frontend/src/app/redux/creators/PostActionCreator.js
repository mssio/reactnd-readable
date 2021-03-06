import { normalize, schema } from 'normalizr'
import {
  fetchingPostList,
  fetchingPostListSuccess,
  fetchingPostListError,
  sortPostByDate,
  sortPostByScore,
  sortPostByComments,
  creatingPost,
  creatingPostSuccess,
  creatingPostError,
  fetchingSinglePost,
  fetchingSinglePostSuccess,
  fetchingSinglePostError,
  updatingPost,
  updatingPostSuccess,
  updatingPostError,
  deletingPost,
  deletingPostSuccess,
  deletingPostError,
  votingUpPost,
  votingUpPostSuccess,
  votingUpPostError,
  votingDownPost,
  votingDownPostSuccess,
  votingDownPostError,
} from '../actions/PostActions'
import {
  svcFetchAllPosts,
  svcCreatePost,
  svcShowPost,
  svcUpdatePost,
  svcDeletePost,
  svcUpVotePost,
  svcDownVotePost,
} from '../services/PostService'

export function handleFetchPostList () {
  return async function (dispatch) {
    dispatch(fetchingPostList())

    try {
      const posts = await svcFetchAllPosts()
      const postSchema = new schema.Entity('posts', {}, {
        idAttribute: 'id'
      })
      const postListSchema = new schema.Array(postSchema)
      const normalizrPosts = normalize(posts, postListSchema)
      const normalizedPosts = normalizrPosts.entities.hasOwnProperty('posts') ? normalizrPosts.entities.posts : {}

      dispatch(fetchingPostListSuccess(normalizedPosts))
    } catch (err) {
      dispatch(fetchingPostListError(err))
    }
  }
}

export function handleSortPostList (sortBy) {
  return function (dispatch) {
    switch (sortBy) {
      case 'date':
        dispatch(sortPostByDate())
        break
      case 'score':
        dispatch(sortPostByScore())
        break
      case 'comments':
        dispatch(sortPostByComments())
        break
      default:
        return
    }
  }
}

export function handleCreatePost (postData) {
  return async function (dispatch) {
    dispatch(creatingPost())

    try {
      const post = await svcCreatePost(postData)
      dispatch(creatingPostSuccess(post))
    } catch (err) {
      dispatch(creatingPostError(err))
    }
  }
}

export function handleShowPost (postId) {
  return async function (dispatch) {
    dispatch(fetchingSinglePost())

    try {
      const post = await svcShowPost(postId)
      dispatch(fetchingSinglePostSuccess(post))
    } catch (err) {
      dispatch(fetchingSinglePostError(err))
    }
  }
}

export function handleUpdatePost (postId, postData) {
  return async function (dispatch) {
    dispatch(updatingPost())

    try {
      const post = await svcUpdatePost(postId, postData)
      dispatch(updatingPostSuccess(post))
    } catch (err) {
      dispatch(updatingPostError(err))
    }
  }
}

export function handleDeletePost (postId) {
  return async function (dispatch) {
    dispatch(deletingPost())

    try {
      await svcDeletePost(postId)
      dispatch(deletingPostSuccess(postId))
    } catch (err) {
      dispatch(deletingPostError(err))
    }
  }
}

export function handleVoteUpPost (postId) {
  return async function (dispatch) {
    dispatch(votingUpPost())

    try {
      const post = await svcUpVotePost(postId)
      dispatch(votingUpPostSuccess(post))
    } catch (err) {
      dispatch(votingUpPostError(err))
    }
  }
}
export function handleVoteDownPost (postId) {
  return async function (dispatch) {
    dispatch(votingDownPost())

    try {
      const post = await svcDownVotePost(postId)
      dispatch(votingDownPostSuccess(post))
    } catch (err) {
      dispatch(votingDownPostError(err))
    }
  }
}
