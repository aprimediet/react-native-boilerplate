import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Headline } from 'react-native-paper'

const Detail = ({ title }) => (
  <View style={styles.container}>
    <Headline>{title}</Headline>
  </View>
)

Detail.propTypes = {
  title: PropTypes.string,
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
