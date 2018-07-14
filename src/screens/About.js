/**
 * About Screen
 */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper'

const About = () => (
  <View style={styles.container}>
    <Title style={styles.instructions}>About Screen</Title>
  </View>
)

About.navigationOptions = {
  title: 'About',
}

export default About

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
