import axios from 'axios'

export default class UserService {
    constructor() {
        axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
    }

    getUsers() {
        return axios.get('users');
    }

    findUser() {
        // return axios.get(users.find(user => user.id == id));
        // return users.find(user => user.id == id);
        return axios.get('users.id');
    }

}

export const userService = new UserService()