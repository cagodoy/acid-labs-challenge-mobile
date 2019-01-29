import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image
} from 'react-native'

import {NativeViewGestureHandler} from 'react-native-gesture-handler'
import {MapView} from 'expo'

import AcidMarker from '../../components/map-marker'

const headerTitle = () => (
  <View style={styles.navigation_options_header_title_container}>
    <Image 
      source={require('../../../assets/logo_small.png')}
      style={styles.navigation_options_header_title_image} />
      <Text style={styles.navigation_options_header_title_text}>
        ACID LABS CHALLENGE
      </Text>
  </View>
)

class WorldmapScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: headerTitle(),
    headerTitleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: 'rgba(51, 51, 51, 1)',
      borderBottomWidth: 0,
    },
  })

  state = {
    currentLat: null,
    currentLon: null,
    modalIsOpen: false,
    //define region for latam
    region: {
      latitude: -14.08570131843973,
      latitudeDelta: 53.86172087529619,
      longitude: -66.11898735406052,
      longitudeDelta: 35.79964931743976,
    }
  }
  
  onPressHandler = (event) => {
    const {latitude, longitude} = event.nativeEvent.coordinate
    
    this.setState({
      currentLat: latitude,
      currentLon: longitude,
    })

    this.props.fetchWeather(latitude, longitude)
    this.props.navigation.navigate('Detail')
  }

  render() {
    return (
      <NativeViewGestureHandler>
        <View style={styles.container}>
          <MapView
            style={styles.container}
            onPress={this.onPressHandler}
            zoomEnabled={false}
            initialRegion={this.state.region}>
            {(this.state.currentLat && this.state.currentLon) && (
              <MapView.Marker
                coordinate={{
                  latitude: this.state.currentLat,
                  longitude: this.state.currentLon,
                }}>
                <AcidMarker />
              </MapView.Marker>
            )}
          </MapView>
        </View>
      </NativeViewGestureHandler>
    ) 
  }
}

const styles = {
  container: {
    flex: 1
  },
  navigation_options_header_title_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigation_options_header_title_image: {
    marginTop: 2,
    width: 25,
    height: 25,
  },
  navigation_options_header_title_text: {
    marginTop: 2,
    marginLeft: 10,
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
}

WorldmapScreen.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default WorldmapScreen