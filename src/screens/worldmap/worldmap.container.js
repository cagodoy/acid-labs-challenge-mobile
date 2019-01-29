import {connect} from 'react-redux'
import WorldmapComponent from './worldmap.component'
import {fetchWeather} from '../../modules/weather/weather.state'

export default connect(
  state => ({}), {
    fetchWeather,
  }
)(WorldmapComponent)
