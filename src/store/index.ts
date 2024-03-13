import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {configureStore} from '@reduxjs/toolkit';
import {api} from './api';
import {rootReducer} from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch<AppDispatch>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type {RootState};
export {store, useAppDispatch, useAppSelector};