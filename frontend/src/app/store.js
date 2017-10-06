import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'app/reducer'

const isDevelopment = process.env.NODE_ENV === 'development'

let middlewares = [
  thunk,
]

const composeEnhancers = (isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

export default store
