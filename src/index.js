import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './Reducers/rootReducer'

// connects the Redux store to React as well as the Redux dev tools in browser.
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={store} >
    {/* allows routing in the App. */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>,
document.getElementById('root')
);