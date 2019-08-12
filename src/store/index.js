import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const initialState = {};
const middleware = [];

const composerEnhancers = middlewares => (process.env.NODE_ENV !== "prod" ? composeWithDevTools(middlewares) : middlewares);

const store = createStore(
    reducers,
    initialState,
    composerEnhancers(applyMiddleware(...middleware)),
);

export default store;
