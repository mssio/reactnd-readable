import axios from 'axios'
import { readableApiUrl } from 'app/config/api'

export function svcFetchAllPosts () {
  return axios.get(`${readableApiUrl}/posts`, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}

export function svcCreatePost (postData) {
  return axios.post(`${readableApiUrl}/posts`, postData, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}
export function svcUpdatePost (postId, postData) {
  return axios.put(`${readableApiUrl}/posts/${postId}`, postData, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}

export function svcFetchPostComments (postId) {
  return axios.get(`${readableApiUrl}/posts/${postId}/comments`, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}
