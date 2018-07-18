import React from 'react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import configureStore from '@/stores'

import Home from '@/screens/Home'

export default () => (
  <Provider store={configureStore()}>
    <PaperProvider>
      <Home />
    </PaperProvider>
  </Provider>
)
