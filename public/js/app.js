import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainComponent from './MainComponent';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MainComponent/>
    </Provider>,
    document.getElementById("app")
);