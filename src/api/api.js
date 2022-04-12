import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
});

export const usersAPI = {
    getUsers(currentPage = 2) {
        return instance.get(`users?page=${currentPage}`);
    }
}, profileApi = {
    getUserProfile(userId){
        return instance.get(`users/${userId}`)
    }
}
