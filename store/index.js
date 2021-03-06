import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';

import reducers from '../reducers';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);

persistStore(store, { storage: AsyncStorage, whitelist: ['markets'] });

export default store;
