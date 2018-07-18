import axios from 'axios'

const parseJSON = (response) => {
  if (response.status === 204 || response.status === 205) return null

  // return response.data
  return {
    data: response.data,
    total: response.headers['x-wp-total'] || 0,
    totalPages: response.headers['x-wp-totalpages'] || 0,
  }
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) return response

  const error = new Error(response.statusText)
  error.response = response

  throw error
}

export default ({ method = 'get', url = null, data = null, headers = {}, params = null }) => axios({
  method,
  url,
  data,
  headers: {
    ...headers,
    Accept: 'application/json',
  },
  params,
}).then(checkStatus)
  .then(parseJSON)
