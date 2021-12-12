import { Container, ThemeProvider } from '@mui/material'
import * as React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import clockReducer from './ui/pages/Clock/reducers'
import clockSaga from './ui/pages/Clock/sagas'
import { Clock, Configuration } from './ui/pages'
import configurationReducer from './ui/pages/Configuration/reducers'
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
