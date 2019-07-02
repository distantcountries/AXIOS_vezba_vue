import axios from 'axios'

export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
    }
    getPosts() {
        return axios.get('posts');
    }
}

export const postService = new PostService()