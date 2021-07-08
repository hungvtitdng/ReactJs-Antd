import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import createReducer from './reducers'

/**
 * Make Configure Redux Store.
 *
 * @param initialState
 * @param history
 */
export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose
  const reduxSagaMonitorOptions = {}

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    }
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)

  // Create the store with two middleware
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middleware = [sagaMiddleware, routerMiddleware(history)]

  const enhancers = [applyMiddleware(...middleware)]

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  )

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {} // Reducer registry.
  store.injectedSagas = {} // Saga registry.

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}
