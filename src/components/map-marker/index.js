import React from 'react'
import {
  View,
} from 'react-native'
import {Image} from 'react-native'

// import PropTypes from 'prop-types'

const AcidMarker = ({}) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/logo_small.png')}
        style={styles.image} />
    </View>
  )
}

AcidMarker.propTypes = {}

const styles = {
  container: {
    borderRadius: 25,
    backgroundColor: 'rgba(51, 51, 51, 0.30)',
    shadowColor: 'rgba(51, 51, 51, 1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    height: 50,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -25,
    marginTop: -25,
  },
  image: {
    height: 40,
    width: 40,
    marginTop: 3,
  },
}

export default AcidMarker