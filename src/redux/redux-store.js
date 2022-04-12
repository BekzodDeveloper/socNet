import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;