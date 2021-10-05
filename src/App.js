import { Provider } from 'react-redux';
import { store } from 'core/redux-config.js';
import React from 'react';
import {
    Content,
    Header
} from 'views/components';

const App = () => {

    console.log(store.getState());

    return (
        <Provider store={ store } >
            <Header />
            <Content />
        </Provider>
    );
}

export default App;
