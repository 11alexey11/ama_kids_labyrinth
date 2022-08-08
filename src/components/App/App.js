import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';
import { Field } from '../Field';
import { Menu } from '../Menu';

import './index.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Field />
            <Menu />
        </Provider>
    )
};

export default App;