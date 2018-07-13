import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Routes from '@/Routes'

export default createStackNavigator(Routes, {
  initialRouteName: 'Home',
  headerMode: 'none',
})
