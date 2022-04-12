import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";


let initialState = {
    token: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth}
    }),

    getAuthUserData = () => (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    },
    login = (email, password, rememberMe = false) => (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                //Show summary error for login form from API
                let message = response.data.messages.length > 0 ? response.data.messages : 'Some error';
                dispatch(stopSubmit("login", {_error: message}))
            }
        });
    }

export default authReducer;