/**
 * Home Screen
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { POSTS_FETCH } from '@/constants/ActionTypes'

import { List as PostList } from '@/components/Post'

@connect(
  (state) => ({
    posts: state.get('posts').toJS(),
  }),
  (dispatch) => ({
    fetchPosts({ page }) {
      dispatch({ type: POSTS_FETCH, page })
    },
  })
)
class Home extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    posts: PropTypes.object,
    fetchPosts: PropTypes.func,
  }

  state = {
    currentPage: 1,
  }

  componentDidMount() {
    const { currentPage } = this.state
    this.fetch(currentPage)
  }

  fetch = (page) => {
    const { fetchPosts } = this.props

    fetchPosts({
      page,
    })
  }

  render() {
    const {
      navigation,
      posts: { collections },
    } = this.props

    return (
      <View style={styles.container}>
        <PostList data={collections} navigation={navigation} />
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
