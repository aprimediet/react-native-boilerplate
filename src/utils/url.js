import { API } from '@/config'

const serialize = (obj) => {
  if (obj !== {}) {
    const entries = Object.entries(obj)

    return entries
      .map((entry) => entry.reduce((a, b) => `${encodeURI(a)}=${encodeURI(b)}`))
      .join('&')
  }

  return null
}

export default (resource = undefined, params = undefined) => {
  const { secure, host, path, port = undefined } = API

  let apiPort
  const proto = secure ? 'https://' : 'http://'
  const apiHost = host || 'localhost'
  const apiPath = `/${path}/` || '/'

  let url = `${proto}${apiHost}`

  if (port) {
    apiPort = `:${port}`
    url += apiPort
  }

  url += apiPath

  if (resource) url += resource

  if (params) url += `?${serialize(params)}`

  return url
}
