import {usersAPI} from "../api/api";

const SET_USERS = "SET_USERS";

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        default:
            return state;
    }
}

const setUsers = (users) => ({type: SET_USERS, users});

export const getUsers = () => {
    return (dispatch) => {
        usersAPI.getUsers().then(response => {
            dispatch(setUsers(response.data.data));
        })
    }
}

export default usersReducer;
