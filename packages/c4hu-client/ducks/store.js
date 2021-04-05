import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createRouterMiddleware, initialRouterState, routerReducer } from 'connected-next-router'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import Router from 'next/router'
import { projectDataReducer, initialState as initialProjectState } from './useProject'
import { alertsReducer, initialState as initialAlertsState } from './useAlerts'
import { loadingReducer, initialState as initialLoadingState } from './useLoading'

const rootReducer = combineReducers({
  project: projectDataReducer,
  alerts: alertsReducer,
  router: routerReducer,
  loading: loadingReducer,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (typeof window !== 'undefined' && state?.router) {
      // preserve router value on client side navigation
      nextState.router = state.router
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

let initialState = {
  project: initialProjectState,
  alerts: initialAlertsState,
  loading: initialLoadingState,
}

export const useStore = (context) => {
  const routerMiddleware = createRouterMiddleware()
  const { asPath } = context?.ctx || Router.router || {}

  if (asPath) {
    initialState = {
      ...initialState,
      router: initialRouterState(asPath)
    }
  }
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(routerMiddleware)))
}

export const wrapper = createWrapper(useStore)



