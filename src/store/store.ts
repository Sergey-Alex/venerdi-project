import {combineReducers, legacy_createStore} from "redux";
import {AuthReducer} from "./auth-reducer";
import {RegistrationReducer} from "./registration-reducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
    registration: RegistrationReducer
})

export type AppRootState = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)