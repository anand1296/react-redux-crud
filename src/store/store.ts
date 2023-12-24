import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./root-reducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
