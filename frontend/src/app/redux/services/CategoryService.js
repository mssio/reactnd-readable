import axios from 'axios'
import { readableApiUrl } from 'app/config/api'

export function svcFetchCategoryList () {
  return axios.get(`${readableApiUrl}/categories`, {
    headers: {
      Authorization: 'whatever-you-want'
    }
  }).then(res => res.data.categories)
}
