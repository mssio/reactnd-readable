import axios from 'axios'
import { readableApiUrl } from 'app/config/api'

export function svcFetchPostComments (postId) {
  return axios.get(`${readableApiUrl}/posts/${postId}/comments`, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}

export function svcCreateComment (commentData) {
  return axios.post(`${readableApiUrl}/comments`, commentData, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}

export function svcUpdateComment (commentId, commentData) {
  return axios.put(`${readableApiUrl}/comments/${commentId}`, commentData, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}

export function svcDeleteComment (commentId) {
  return axios.delete(`${readableApiUrl}/comments/${commentId}`, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  })
}

export function svcUpVoteComment (commentId) {
  return axios.post(`${readableApiUrl}/comments/${commentId}`, {option: 'upVote'}, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}

export function svcDownVoteComment (commentId) {
  return axios.post(`${readableApiUrl}/comments/${commentId}`, {option: 'downVote'}, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data)
}
