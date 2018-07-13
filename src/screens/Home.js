import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { material } from 'react-native-typography'

export default () => (
  <View style={styles.container}>
    <Text style={[styles.instructions, material.display1]}>Home Screen</Text>
  </View>
)

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
