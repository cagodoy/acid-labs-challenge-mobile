import {createEpicMiddleware, combineEpics} from 'redux-observable'

import weather from '../../modules/weather/weather.epic'

export const epics = combineEpics(
  weather,
)

export default createEpicMiddleware()
