import axios from 'axios'

const API_KEY = 'Y8RgWkfnkR5YW0qdYKAo37G47EibuAGA'

export const UsersService = {
getUsers
}

function getUsers(page) {
    return axios
        .get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
        .then(res => res.data)
}


