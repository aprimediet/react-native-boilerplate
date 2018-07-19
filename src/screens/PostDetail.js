import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { POSTS_RETRIEVE } from '@/constants/ActionTypes'

import { Detail } from '@/components/Post'

@connect(
  (state) => ({
    posts: state.get('posts').toJS(),
  }),
  (dispatch) => ({
    retrievePosts({ id }) {
      dispatch({ type: POSTS_RETRIEVE, id })
    },
  })
)
class PostDetail extends PureComponent {
  static propTypes = {
    posts: PropTypes.object,
    retrievePosts: PropTypes.func,
  }

  componentDidMount() {
    const { retrievePosts } = this.props

    retrievePosts({ id: 1 })
  }

  render() {
    const {
      posts: { model },
    } = this.props

    return model ? <Detail title={model.title.rendered} /> : null
  }
}

export default PostDetail
