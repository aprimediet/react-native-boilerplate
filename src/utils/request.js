import axios from 'axios'

const parseJSON = (response) => {
  if (response.status === 204 || response.status === 205) return null

  return response.data
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
