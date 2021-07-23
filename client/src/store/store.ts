import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import appSlice from './features/appSlice';
import profileSlice from './features/profileSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        profile: profileSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>


export default store;