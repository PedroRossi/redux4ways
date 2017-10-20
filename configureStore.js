import { createStore, applyMiddleware } from 'redux';
import app from './reducers';

// thunk
/*
import thunk from 'redux-thunk';
export default function configureStore() {
    let store = createStore(app, applyMiddleware(thunk));
    return store;
};
*/

// saga
/*
import createSagaMiddleware from 'redux-saga';
import dataSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(app, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(dataSaga);
    return store;
};
*/

// rjsx
import { createEpicMiddleware } from 'redux-observable'
import fetchUserEpic from './epic'

const epicMiddleware = createEpicMiddleware(fetchUserEpic)

export default function configureStore() {
    const store = createStore(app, applyMiddleware(epicMiddleware))
    return store
}