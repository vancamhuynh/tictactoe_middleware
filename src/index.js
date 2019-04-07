import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import logger from './utils/logger'
import calculateWinner from './utils/calculateWinner'
import Game from './components/Game'

const store = createStore(
    rootReducer,
    applyMiddleware(logger, calculateWinner) 
)

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
)

