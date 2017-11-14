import axios from 'axios'
import { readableApiUrl, readableApiHeaders } from 'app/config/api'

export function svcFetchPostComments (postId) {
  return axios
    .get(`${readableApiUrl}/posts/${postId}/comments`, readableApiHeaders)
    .then(res => res.data)
}

export function svcCreateComment (commentData) {
  return axios
    .post(`${readableApiUrl}/comments`, commentData, readableApiHeaders)
    .then(res => res.data)
}

export function svcUpdateComment (commentId, commentData) {
  return axios
    .put(`${readableApiUrl}/comments/${commentId}`, commentData, readableApiHeaders)
    .then(res => res.data)
}

export function svcDeleteComment (commentId) {
  return axios
    .delete(`${readableApiUrl}/comments/${commentId}`, readableApiHeaders)
}

export function svcUpVoteComment (commentId) {
  return axios
    .post(`${readableApiUrl}/comments/${commentId}`, {option: 'upVote'}, readableApiHeaders)
    .then(res => res.data)
}

export function svcDownVoteComment (commentId) {
  return axios
    .post(`${readableApiUrl}/comments/${commentId}`, {option: 'downVote'}, readableApiHeaders)
    .then(res => res.data)
}
