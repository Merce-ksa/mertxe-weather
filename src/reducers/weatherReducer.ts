export const WEATHER_ACTIONS_TYPES = {
  GET_WEATHER: 'GET_WEATHER'
}
  
export const weatherReducer = (state, action) => {
  switch (action.type) {
  case WEATHER_ACTIONS_TYPES.GET_WEATHER:
    return action.payload      
  default:
    return state
  }
}