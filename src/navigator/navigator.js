import React from 'react'
import {
  Platform,
} from 'react-native'

import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'

import {Feather} from '@expo/vector-icons'
import WorldmapContainer from '../screens/worldmap/worldmap.container'
import DetailContainer from '../screens/detail/detail.container'

const WorldmapStack = createStackNavigator({
  Worldmap: {
    screen: WorldmapContainer,
  },
  Detail: {
    screen: DetailContainer,
  },
})

export default createAppContainer(
  createStackNavigator(
    {
      App: {
        screen: WorldmapStack,
        navigationOptions: () => ({
          header: null,
          headerMode: null,
          tabBarLabel: 'Worldmap weather',
          tabBarIcon: ({ tintColor, focused, horizontal }) => (
            <Feather
              name={'map-pin'}
              size={horizontal ? 20 : 26}
              style={{ color: tintColor }}
            />
          ),
        }),
      },
    }, {
      initialRouteName: 'App',
      mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
  )
)
