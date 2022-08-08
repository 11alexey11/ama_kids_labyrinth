import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';
import { Field } from '../Field';

import './index.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Field />
        </Provider>
    )
};

export default App;