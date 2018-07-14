import React from 'react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import store from '@/stores'

import DrawerNavigator from '@/navigator'

export default () => (
  <Provider store={store}>
    <PaperProvider>
      <DrawerNavigator />
    </PaperProvider>
  </Provider>
)
