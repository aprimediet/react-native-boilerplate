import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Modal } from 'react-native'
import { connect } from 'react-redux'
import { Title } from 'react-native-paper'

import { RootNavigator } from '@/navigator'

@connect((state) => ({ http: state.get('http').toJS() }))
class Root extends Component {
  static router = RootNavigator.router
  static propTypes = {
    navigation: PropTypes.object,
    http: PropTypes.object,
  }

  renderLoading = () => (
    <View style={styles.container}>
      <Title style={styles.instructions}>Loading...</Title>
    </View>
  )

  renderError = (message) => (
    <View style={styles.container}>
      <Title style={styles.instructions}>{message}</Title>
    </View>
  )

  render() {
    const {
      navigation,
      http: { isFetching, isError },
    } = this.props

    return (
      <View style={{ flex: 1 }}>
        <RootNavigator navigation={navigation} />
        <Modal
          animationType="slide"
          transparent={false}
          visible={isFetching}
          onRequestClose={() => { console.log('loading closed') }}
        >
          {this.renderLoading()}
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isError}
          onRequestClose={() => { console.log('error closed') }}
        >
          {this.renderError('Error getting data from server')}
        </Modal>
      </View>
    )
  }
}

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
