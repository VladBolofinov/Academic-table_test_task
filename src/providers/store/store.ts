import {combineReducers, configureStore} from "@reduxjs/toolkit";
import apiRequestReducer from './reducers/ApiRequestSlice';

const rootReducer = combineReducers({
    apiRequestReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];