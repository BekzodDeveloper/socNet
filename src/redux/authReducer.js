import {authAPI} from "../api/api";
// import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";


let initialState = {
    userId: null,
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
                token: action.token,
                isAuth: action.isAuth
            };
        default:
            return state;
    }
};

export const setAuthUserData = (token,isAuth) => ({type: SET_AUTH_USER_DATA, token,isAuth}),

// getAuthUserData = () => (dispatch) => {
//     authAPI.me().then(response => {
//         if (response.data.resultCode === 0) {
//             let {id, email, login} = response.data.data;
//             dispatch(setAuthUserData(id, email, login, true));
//         }
//     });
// },
    register = (email, password) => (dispatch) => {
        authAPI.register(email, password).then(response => {
            if (response.data) {
                console.log('Registration is successful!');

            } else {
                console.log('Error')
            }
        });
    },
    login = (email, password) => (dispatch) => {
        authAPI.login(email, password).then(response => {
            if (response.data) {
                console.log('Successful!')
                dispatch(setAuthUserData(response.data.token, true))

            } else {
                console.log("Error");
            }
        });
    }

export default authReducer;