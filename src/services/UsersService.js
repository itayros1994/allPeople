import axios from 'axios'

export const UsersService = {
    getUsers
}

function getUsers(page, gender) {
    console.log(gender);
    if (gender === 'all-genders') {
        return axios
            .get(`https://randomuser.me/api/?page=${page}&results=10&seeds=abc'`)
            .then(res => res.data)

    } else {
        return axios
            .get(`https://randomuser.me/api/?gender=${gender}&results=10&page=${page}&seeds='abc'`)
            .then(res => res.data)
    }
}