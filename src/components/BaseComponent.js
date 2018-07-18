import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper'

export default class BaseComponent extends PureComponent {
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
}

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
