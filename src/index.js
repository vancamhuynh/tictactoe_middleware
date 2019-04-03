import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import Game from './containers/game'
import { logger, calculateWinner } from './utils/logger'

const store = createStore(
    rootReducer,
    applyMiddleware(logger, calculateWinner) 
)

// =================================
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// )

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
)

