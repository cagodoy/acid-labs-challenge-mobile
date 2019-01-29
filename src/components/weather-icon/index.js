import React from 'react'
import PropTypes from 'prop-types'

import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'

const WeatherIcon = ({iconName, size, color}) => {
  let icon = null

  switch (iconName) {
    case 'clear-day':
      icon = (<MaterialCommunityIcons name={'weather-sunny'} size={size} style={{color}} />)
      break
      case 'clear-night':
      icon = (<MaterialCommunityIcons name={'weather-night'} size={size} style={{color}} />)
      break
      case 'rain':
      icon = (<MaterialCommunityIcons name={'weather-rainy'} size={size} style={{color}} />)
      break
      case 'snow':
      icon = (<MaterialCommunityIcons name={'weather-snowy'} size={size} style={{color}} />)
      break
      case 'sleet':
      icon = (<MaterialCommunityIcons name={'weather-pouring'} size={size} style={{color}} />)
      break
      case 'wind':
      icon = (<MaterialCommunityIcons name={'weather-windy'} size={size} style={{color}} />)
      break
      case 'fog':
      icon = (<MaterialCommunityIcons name={'weather-fog'} size={size} style={{color}} />)
      break
      case 'cloudy':
      icon = (<MaterialCommunityIcons name={'weather-cloudy'} size={size} style={{color}} />)
      break
      case 'partly-cloudy-day':
      icon = (<MaterialCommunityIcons name={'weather-partlycloudy'} size={size} style={{color}} />)
      break
      case 'partly-cloudy-night':
      icon = (<Ionicons name={'md-cloudy-night'} size={size} style={{color}} />)
      break
  }

  return (
    <>
      {icon}
    </>
  )
}

WeatherIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default WeatherIcon