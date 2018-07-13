import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { DrawerNavigator } from '@/navigator'

export default () => (
  <PaperProvider>
    <DrawerNavigator />
  </PaperProvider>
)
