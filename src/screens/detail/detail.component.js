import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import {NativeViewGestureHandler} from 'react-native-gesture-handler'
import {AntDesign} from '@expo/vector-icons'
import WeatherIcon from '../../components/weather-icon'

const headerLeft = ({goBack}) => (
  <TouchableOpacity
    onPress={() => goBack()}
    style={styles.navigation_options_header_left}>
      <AntDesign
        name={'arrowleft'}
        size={26}
        style={{color: 'white'}}
      />
  </TouchableOpacity>
)

class DetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Weather Detail',
    headerLeft: headerLeft(navigation),
    headerTitleStyle: {color: 'white'},
    headerStyle: styles.navigation_options_style,
  })

  getModalError = () => (
    <View style={styles.modal_error_container}>
      <Text style={styles.modal_error_text}>
        Ocurrió un error, asegúrate de hacer click en un país o inténtalo nuevamente.
      </Text>
    </View>
  )

  getModalLoading = () => (
    <View style={styles.modal_loading_container}>
      <ActivityIndicator size={'large'} color={'rgba(51, 51, 51, 1)'} />
    </View>
  )

  getModalInfo = () => (
    <>
      <View style={styles.modal_info_container}>
        <WeatherIcon iconName={this.props.weather.icon} size={100} color={'rgba(51, 51, 51, 0.8)'} />
      </View>
      <View>
        <View>
          <Text style={styles.modal_info_temperature}>
            {this.props.weather.temperature.toFixed(1)}º
          </Text>
        </View>
        <View>
          <Text style={styles.modal_info_city_country}>
            {this.props.weather.capital.charAt(0).toUpperCase() + this.props.weather.capital.substring(1, this.props.weather.capital.length)}, {this.props.weather.country.charAt(0).toUpperCase() + this.props.weather.country.substring(1, this.props.weather.country.length)}
          </Text>
        </View>
      </View>
    </>
  )

  render() {
    let modal = null
    if (this.props.weatherError !== null) {
      modal = this.getModalError()
    } else if (!this.props.weatherFetching) {
      modal = this.getModalInfo()
    } else {
      modal = this.getModalLoading()
    }

    return (
      <NativeViewGestureHandler>
        <View style={styles.container}>
          <View style={styles.box_container}>
            {this.props.weatherFetched && !this.props.weatherError && this.props.weather.cached && (
              <Text style={styles.box_cached_text}>
                CACHED
              </Text>
            )}
            {modal}
          </View>
          {this.props.weatherFetched && !this.props.weatherError && (
            <View style={styles.box_summary_container}>
              <Text style={styles.box_summary_text}>
                {this.props.weather.summary}
              </Text>
            </View>
          )}
        </View>
      </NativeViewGestureHandler>
    ) 
  }
}

const styles = {
  container: {
    flex: 1, 
    backgroundColor: 'rgba(235, 242, 246, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_container: {
    height: 300,
    width: 300,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 20,
    padding: 30,
    paddingTop: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    position: 'relative',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
  },
  box_cached_text: {
    position: 'absolute',
    fontFamily: 'lato',
    color: 'rgba(132, 132, 132, 1)',
    fontSize: 10,
    bottom: 15,
    right: 25,
  }, 
  box_summary_container: {
    marginTop: 15,
    width: 300,
  },
  box_summary_text: {
    fontFamily: 'lato',
    fontSize: 18,
    color: 'rgba(110, 110, 110, 1)',
    fontWeight: '600',
    textAlign: 'center',
  },
  modal_info_container: {
    flexDirection: 'row-reverse',
  },
  modal_info_temperature: {
    fontSize: 60,
    color: 'rgba(155, 155, 155, 1)',
    fontFamily: 'lato-light',
    fontWeight: '300',
    textAlign: 'left'
  },
  modal_info_city_country: {
    fontSize: 24,
    color: 'rgba(170, 170, 170, 1)',
    fontFamily: 'lato-light',
    fontWeight: '300',
    textAlign: 'left',
  },
  modal_loading_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_error_container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_error_text: {
    textAlign: 'center',
    color: 'rgba(100, 100, 100, 1)',
    fontSize: 20,
    paddingTop: 10,
    paddingRight: 10,
    fontWeight: '300',
  },
  navigation_options_style: {
    backgroundColor: 'rgba(51, 51, 51, 1)',
    borderBottomWidth: 0,
  },
  navigation_options_header_left: {
    paddingLeft: 15
  },
}

DetailScreen.propTypes = {
  weather: PropTypes.object.isRequired,
  weatherFetching: PropTypes.bool.isRequired,
  weatherFetched: PropTypes.bool.isRequired,
  weatherError: PropTypes.object,
}

export default DetailScreen