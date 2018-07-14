import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import Home from '@/screens/Home'

export default () => (
  <PaperProvider>
    <Home />
  </PaperProvider>
)
