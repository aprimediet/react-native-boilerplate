import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, FlatList } from 'react-native'
import { removeHTMLTag } from '@/utils/filter'

import ListItem from './ListItem'

class List extends Component {
  static propTypes = {
    data: PropTypes.array,
    navigation: PropTypes.object,
  }

  static defaultProps = {
    data: [],
  }

  keyExtractor = (item) => item.id.toString()

  renderItem = ({ item }) => {
    const { navigation } = this.props

    return (
      <ListItem
        navigation={navigation}
        title={item.title.rendered}
        content={`${removeHTMLTag(item.content.rendered).slice(0, 50)}...`}
      />
    )
  }

  render() {
    const { data } = this.props

    return (
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    )
  }
}

export default List

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})
