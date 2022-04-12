import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer
});

let store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;