import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
});

export const
    usersAPI = {
        getUsers(currentPage = 2) {
            return instance.get(`users?page=${currentPage}`);
        }
    },
    profileAPI = {
        getUserProfile(userId) {
            return instance.get(`users/${userId}`)
        }
    },
    authAPI = {
        login(email, password) {
            return instance.post(`login`, {email, password})
        },
        register(email, password) {
            return instance.post(`register`, {email, password})
        },
        getAuthUserProfile(userId) {
            return instance.get(`users/${userId}`)
        }

    }
