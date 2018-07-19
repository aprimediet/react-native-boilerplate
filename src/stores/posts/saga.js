import {
  POSTS_FETCH,
  POSTS_RETRIEVE,
  POSTS_SET,
  POSTS_SET_INFO,
  POSTS_ADD,
} from '@/constants/ActionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import { httpRequest } from '@/stores/http/saga'
import url from '@/utils/url'

export function* requestPost({ id = undefined, page = undefined }) {
  let baseUrl = url('posts')
  const params = {}

  if (id) baseUrl = url(`posts/${id}`)

  if (page) params.page = page

  const response = yield call(httpRequest, {
    method: 'get',
    url: baseUrl,
    params,
  })

  return response
}

export function* fetchPosts({ page = undefined }) {
  const response = yield call(requestPost, { page })

  if (response !== null && !response.error) {
    const { data, total, totalPages } = response
    yield put({ type: POSTS_SET_INFO, payload: { total, totalPages }})
    yield put({ type: POSTS_ADD, payload: { collections: data } })
  }
}

export function* retrievePosts({ id = undefined }) {
  const response = yield call(requestPost, { id })

  if (response !== null && !response.error) {
    const { data } = response
    yield put({ type: POSTS_SET_INFO, payload: { total: 1, totalPages: 1 } })
    yield put({ type: POSTS_SET, payload: { model: data } })
  }
}

export function* postsWatcher() {
  // console.log('watcher being called')
  yield takeLatest(POSTS_FETCH, fetchPosts)
  yield takeLatest(POSTS_RETRIEVE, retrievePosts)
}
