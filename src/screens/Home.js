import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { material } from 'react-native-typography'


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
        <Text style={[styles.instructions, material.display1]}>Home Screen</Text>
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
