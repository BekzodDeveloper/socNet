import {profileAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profileData: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profileData: action.profileData};
        }

        default:
            return state;
    }
}

export const setUserProfile = (profileData) => ({type: SET_USER_PROFILE, profileData}),

    getUserProfile = (userId) => (dispatch) => {
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data.data));
        });
    }

export default profileReducer;