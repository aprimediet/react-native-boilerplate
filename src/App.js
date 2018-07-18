import React from 'react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import configureStore from '@/stores'

import { RootNavigator } from '@/navigator'

export default () => (
  <Provider store={configureStore()}>
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  </Provider>
)
