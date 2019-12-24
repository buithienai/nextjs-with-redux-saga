import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    ));

persistStore(store);

store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
}

store.runSagaTask()

export default () => {
    return store;
};