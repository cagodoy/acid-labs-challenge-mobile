import {connect} from 'react-redux'
import DetailComponent from './detail.component'

export default connect(
  state => ({
    weather: state.weather.get('weather').toJS(),
    weatherFetching: state.weather.get('weatherFetching'),
    weatherFetched: state.weather.get('weatherFetched'),
    weatherError: state.weather.get('weatherError'),
  })
)(DetailComponent)
