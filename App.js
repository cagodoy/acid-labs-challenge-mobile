import React from 'react'
import {Provider} from 'react-redux'

import store from './src/redux/store'
import AppContainer from './src/app.container'

import {ScreenOrientation, Font} from 'expo'
ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT_UP)
Font.loadAsync({
  'lato': require('./assets/fonts/Lato-Regular.ttf'),
  'lato-light': require('./assets/fonts/Lato-Light.ttf'),
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
