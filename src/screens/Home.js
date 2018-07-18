/**
 * Home Screen
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper'

@connect((state) => ({ http: state.get('http').toJS() }))
class Home extends PureComponent {
  static propTypes = {
    http: PropTypes.any,
  }

  componentDidMount() {
    const { http } = this.props

    console.log(http) //eslint-disable-line no-console
  }

  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.instructions}>Home Screen</Title>
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
