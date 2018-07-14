import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper'

import { Header } from '@/components/Search'

export default class Search extends PureComponent {
  static navigationOptions = {
    header: null,
  }

  state = {
    searchText: null,
  }

  onChangeText = (value) => {
    this.setState({ searchText: value })
  }

  render() {
    const { searchText } = this.state

    return (
      <View style={styles.container}>
        <Header searchText={searchText} onChangeText={this.onChangeText} />
        {searchText !== null && <Title>{searchText}</Title>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
