import { useDispatch } from "react-redux"

const DISMISS_ALERT = 'DISMISS_ALERT'

export const initialState = {
  alerts: []
}

const useAlerts = () => {
  const dispatch = useDispatch()

  const dismissAlert = alertId => {
    dispatch({ type: DISMISS_ALERT, payload: alertId })
  }

  return {
    dismissAlert,
  }
}

export const alertsReducer = (state = initialState, { type, payload }) => {
  try {
    switch (type) {
      case DISMISS_ALERT: return {
        ...state,
        alerts: state.alerts.filter(({ id }) => id !== payload)
      }

      default: return state
    }
  } catch(error){
    console.log(error)
    return state
  }
}

export default useAlerts
