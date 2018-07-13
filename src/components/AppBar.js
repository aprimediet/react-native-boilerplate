import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarBackAction, ToolbarAction, ToolbarContent } from 'react-native-paper'


export default class AppBar extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    scene: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    navigationOptions: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  }

  navigateBack = () => {
    // Actions when back button is pressed
    const { navigation } = this.props

    navigation.goBack(null)
  }

  openDrawer = () => {
    // Actions when menu button is pressed
    const { navigation } = this.props

    navigation.openDrawer()
  }

  renderToolbarRight = () => {
    // If headerLeft is provided in navigationOptions, return headerLeft
    // else, return back button when index is not 0
    const {
      index,
      scene: {
        descriptor: {
          options: { headerLeft },
        },
      },
    } = this.props

    if (headerLeft) {
      return headerLeft
    } else {
      if (index > 0) {
        return <ToolbarBackAction onPress={this.navigateBack} />
      }

      return <ToolbarAction icon="menu" onPress={this.openDrawer} />
    }
  }

  render() {
    const {
      scene: {
        descriptor: {
          options: { title },
        },
      },
    } = this.props

    return (
      <Toolbar>
        {this.renderToolbarRight()}
        <ToolbarContent title={title || 'React Native Paper'} />
      </Toolbar>
    )
  }
}
