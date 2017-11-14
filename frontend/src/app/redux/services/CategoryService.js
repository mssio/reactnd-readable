import axios from 'axios'
import { readableApiUrl, readableApiHeaders } from 'app/config/api'

export function svcFetchCategoryList () {
  return axios
    .get(`${readableApiUrl}/categories`, readableApiHeaders)
    .then(res => res.data.categories)
}
