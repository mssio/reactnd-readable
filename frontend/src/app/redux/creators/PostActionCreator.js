import { normalize, schema } from 'normalizr'
import {
  fetchingPostList,
  fetchingPostListSuccess,
  fetchingPostListError,
  creatingPost,
  creatingPostSuccess,
  creatingPostError,
} from '../actions/PostActions'
import {
  svcFetchAllPosts,
  svcCreatePost,
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
