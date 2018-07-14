import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'

import RootNavigator from './RootNavigator'
import Sidebar from '@/components/Sidebar'

const deviceWidth = Dimensions.get('window').width

export default createDrawerNavigator(
  {
    Stack: { screen: RootNavigator },
  },
  {
    drawerWidth: deviceWidth * (3 / 4),
    contentComponent: (props) => (
      <ScrollView>
        <Sidebar {...props} />
      </ScrollView>
    ),
  }
)
