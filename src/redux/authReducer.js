import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_AUTH_HEADER_DATA = "SET_AUTH_HEADER_DATA";
const SET_USER_REGISTERED = "SET_USER_REGISTERED";


let initialState = {
    token: null,
    isAuth: false,
    isRegistered: false,
    authUserData: {
        userId: null,
        email: null,
        first_name: null,
        last_name: null,
        avatar: null
    },
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                token: action.token,
                isAuth: action.isAuth,
                authUserData: {
                    userId: action.userId
                }

            };
        case SET_AUTH_HEADER_DATA:
            return {
                ...state,
                authUserData: {
                    userId: action.userId,
                    email: action.email,
                    first_name: action.first_name,
                    last_name: action.last_name,
                    avatar: action.avatar
                }
            };
        case SET_USER_REGISTERED:
            return {
                ...state,
                isRegistered: action.isRegistered
            };
        default:
            return state;
    }
};
export const setAuthUserData = (token, isAuth, userId) => ({
        type: SET_AUTH_USER_DATA, token, isAuth, userId
    }),
    setAuthHeaderData = (userId, email, first_name, last_name, avatar) => ({
        type: SET_AUTH_HEADER_DATA, userId, email, first_name, last_name, avatar
    }),
    setUserRegistered = (isRegistered) => ({type: SET_USER_REGISTERED, isRegistered}),

    getAuthUserProfile = (userId) => (dispatch) => {
        authAPI.getAuthUserProfile(userId).then(response => {
            dispatch(setAuthHeaderData(userId,
                response.data.data.email, response.data.data.first_name,
                response.data.data.last_name, response.data.data.avatar));
        });
    },

    register = (email, password) => (dispatch) => {
        authAPI.register(email, password).then(response => {
            if (response.status === 200) {
                dispatch(setUserRegistered(true));
            } else {
                console.log('Error')
            }
        });
    },

    login = (email, password) => (dispatch) => {

        authAPI.login(email, password).then(response => {
            if (response.status === 200) {
                let token = response.data.token;
                let userId = parseInt(token.slice(16));
                dispatch(setAuthUserData(response.data.token, true, parseInt(userId)));
                dispatch(getAuthUserProfile(parseInt(userId)));

            } else {
                console.log("Error");
            }
        });
    }

export default authReducer;