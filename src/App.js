import React from 'react';
import { Provider } from 'react-redux';
import Router from './screens/Router';
import store from './Store';

const App = () => {
    
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}



export default App;