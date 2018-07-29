import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './src/components/component.app.js';
import rootReducer from './src/reducers/reducer.root';
import './src/styles/index.css';

const storeVar =  createStore(rootReducer, applyMiddleware(thunk));

class Root extends React.Component {
    constructor(props){
        super(props);   
    }
    render() {
        return(
            <App className='app'/>
        );
    }
}

ReactDOM.render(
<Provider store = {storeVar}>
    <Root/>
</Provider>,
    document.querySelector('#root')
);