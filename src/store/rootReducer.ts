import {combineReducers} from '@reduxjs/toolkit';

import {api} from './api';

const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

const rootReducer: typeof combinedReducer = (state, action) => {
  return combinedReducer(state, action);
};

export {rootReducer};
