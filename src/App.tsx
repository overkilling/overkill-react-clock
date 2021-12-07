import { Container, ThemeProvider } from '@mui/material'
import * as React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Clock } from './Clock'
import clockReducer from './Clock/reducers'
import clockSaga from './Clock/sagas'
import { Configuration } from './Configuration'
import configurationReducer from './Configuration/reducers'
import { theme } from './theme'
import { Title } from './styles'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({
    clock: clockReducer,
    configuration: configurationReducer
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    // @ts-ignore
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
sagaMiddleware.run(clockSaga)

const AppComponent = () => (
  <Container>
    <Title variant="h1">Overkill React Clock</Title>
    <Clock />
    <Configuration />
  </Container>
)

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppComponent />
    </ThemeProvider>
  </Provider>
)
