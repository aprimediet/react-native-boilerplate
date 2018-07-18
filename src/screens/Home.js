/**
 * Home Screen
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { POSTS_FETCH } from '@/constants/ActionTypes'
import BaseComponent from '@/components/BaseComponent'
import { Title } from 'react-native-paper'

@connect(
  (state) => ({
    http: state.get('http').toJS(),
    posts: state.get('posts').toJS(),
  }),
  (dispatch) => ({
    fetchPosts({ page }) {
      dispatch({ type: POSTS_FETCH, page })
    },
  })
)
class Home extends BaseComponent {
  static propTypes = {
    http: PropTypes.object,
    posts: PropTypes.object,
    fetchPosts: PropTypes.func,
  }

  state = {
    currentPage: 1,
  }

  componentDidMount() {
    const { currentPage } = this.state
    this.fetch(currentPage)
    // console.log(http) //eslint-disable-line no-console
    // console.log(posts) //eslint-disable-line no-console 
  }

  fetch = (page) => {
    const { fetchPosts } = this.props

    fetchPosts({
      page,
    })
  }

  // renderLoading = () => <Title style={styles.instructions}>Loading...</Title>

  render() {
    const {
      http: { isFetching, error },
      posts: { total },
    } = this.props

    if (isFetching) return this.renderLoading()
    if (error) return this.renderError(error.response.data.message)

    return (
      <View style={styles.container}>
        <View>
          <Title style={styles.instructions}>Home Screen</Title>
          <Title style={styles.instructions}>Total Row: {total}</Title>
        </View>
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
