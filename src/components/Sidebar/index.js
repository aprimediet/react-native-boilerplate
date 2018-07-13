import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { material } from 'react-native-typography'

export default () => (
  <View style={styles.container}>
    <Text style={material.title}>Sidebar</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
