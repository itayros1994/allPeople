import axios from 'axios'

export const UsersService = {
getUsers
}

function getUsers(page,gender) {
    return axios
        .get(`https://randomuser.me/api/?gender=${gender}&results=10&page=${page}`)
        .then(res => res.data)
}




