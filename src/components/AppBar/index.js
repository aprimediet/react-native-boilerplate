import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarBackAction, ToolbarContent } from 'react-native-paper'

export default class AppBar extends PureComponent {
  static propTypes = {
    // index: PropTypes.number.isRequired,
    // scene: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    // navigationOptions: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  }

  navigateBack = () => {
    // Actions when back button is pressed
    const { navigation } = this.props

    navigation.goBack(null)
  }

  render() {
    return (
      <Toolbar>
        <ToolbarBackAction onPress={this.navigateBack} />
        <ToolbarContent title="Hello Paper" />
      </Toolbar>
    )
  }
}
