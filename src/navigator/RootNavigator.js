import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Routes from '@/Routes'
import AppBar from '@/components/AppBar'

export default createStackNavigator(Routes, {
  initialRouteName: 'Home',
  headerMode: 'float',
  navigationOptions: () => ({
    title: 'React Native',
    header: (props) => <AppBar {...props} />,
  }),
})
