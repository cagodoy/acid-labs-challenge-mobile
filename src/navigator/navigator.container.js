import {connect} from 'react-redux'
import NavigatorComponent from './navigator.component'

export default connect(
  state => ({
    state: state.nav,
  })
)(NavigatorComponent)