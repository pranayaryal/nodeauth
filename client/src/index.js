
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'


ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <Router>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup} />
            </App>
        </Router>
    </Provider>,
    document.querySelector('#root')
)
