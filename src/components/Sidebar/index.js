import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DrawerSection, DrawerItem } from 'react-native-paper'
// import { StyleSheet, View, Text } from 'react-native'
// import { material } from 'react-native-typography'

// export default () => (
//   <View style={styles.container}>
//     <Text style={material.title}>Sidebar</Text>
//   </View>
// )

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// })
export default class Sidebar extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  state = {
    active: 'Home',
  }

  render() {
    const { navigation } = this.props
    const { active } = this.state

    return (
      <DrawerSection title="Sidebar">
        <DrawerItem
          label="Home"
          active={active === 'Home'}
          onPress={() => {
            this.setState({ active: 'Home' })
            navigation.navigate('Home')
          }}
        />
        <DrawerItem
          label="About"
          active={active === 'About'}
          onPress={() => {
            this.setState({ active: 'About' })
            navigation.navigate('About')
          }}
        />
      </DrawerSection>
    )
  }
}
