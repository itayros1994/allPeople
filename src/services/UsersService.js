import axios from 'axios'

export const UsersService = {
    getUsers
}

function getUsers(page) {
    
    return axios
        .get(`https://randomuser.me/api/?page=${page}&results=10&seeds=abc'`)
        .then(res => res.data)
        .catch(err => console.log(err))
}