import { combineReducers, configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import postsReducer from './postsRedux';
import categoryReducer from './categoryRedux';
const subreducers = {
  posts: postsReducer,
  category: categoryReducer,
};

const reducer = combineReducers(subreducers);

const store = configureStore({
  reducer: reducer,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
  preloadedState: initialState,
});

export default store;
