import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Searchbar } from 'react-native-paper'

export default class Header extends PureComponent {
  static propTypes = {
    searchText: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
  }

  render() {
    const { searchText, onChangeText } = this.props

    return <Searchbar placeholder="search" onChangeText={onChangeText} value={searchText} />
  }
}
