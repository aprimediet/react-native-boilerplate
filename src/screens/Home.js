/**
 * Home Screen
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Button, Title } from 'react-native-paper'


export default class Home extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = {
    title: 'Home',
  }

  goAbout = () => {
    const { navigation } = this.props

    navigation.navigate('About')
  }

  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.instructions}>Home Screen</Title>
        <Button raised onPress={this.goAbout}>
          About
        </Button>
      </View>
    )
  }
}

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
