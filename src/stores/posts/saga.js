import { POSTS_FETCH, POSTS_SET } from '@/constants/ActionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import { httpRequest } from '@/stores/http/saga'
import url from '@/utils/url'

export function* fetchPosts({ id = undefined, page = undefined }) {
  let baseUrl = url('posts')

  if (id) baseUrl = url(`posts/${id}`)

  const response = yield call(httpRequest, {
    method: 'get',
    url: baseUrl,
  })

  if (response !== null && !response.error) {
    const { data, total, totalPages } = response
    yield put({ type: POSTS_SET, payload: { data, total, totalPages } })
  }
}

export function* postsWatcher() {
  yield takeLatest(POSTS_FETCH, fetchPosts)
}
