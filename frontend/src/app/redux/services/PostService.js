import axios from 'axios'
import { readableApiUrl, readableApiHeaders } from 'app/config/api'

export function svcFetchAllPosts () {
  return axios
    .get(`${readableApiUrl}/posts`, readableApiHeaders)
    .then(res => res.data)
}

export function svcCreatePost (postData) {
  return axios
    .post(`${readableApiUrl}/posts`, postData, readableApiHeaders)
    .then(res => res.data)
}
export function svcShowPost (postId) {
  return axios
    .get(`${readableApiUrl}/posts/${postId}`, readableApiHeaders)
    .then(res => res.data)
}
export function svcUpdatePost (postId, postData) {
  return axios
    .put(`${readableApiUrl}/posts/${postId}`, postData, readableApiHeaders)
    .then(res => res.data)
}
export function svcDeletePost (postId) {
  return axios
    .delete(`${readableApiUrl}/posts/${postId}`, readableApiHeaders)
}
export function svcUpVotePost (postId) {
  return axios
    .post(`${readableApiUrl}/posts/${postId}`, {option: 'upVote'}, readableApiHeaders)
    .then(res => res.data)
}
export function svcDownVotePost (postId) {
  return axios
    .post(`${readableApiUrl}/posts/${postId}`, {option: 'downVote'}, readableApiHeaders)
    .then(res => res.data)
}
