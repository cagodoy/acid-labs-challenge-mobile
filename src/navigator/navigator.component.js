import RootNavigator from './navigator'
import {reduxifyNavigator} from 'react-navigation-redux-helpers'

export default reduxifyNavigator(RootNavigator, 'root')
