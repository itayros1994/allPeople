import axios from 'axios'

export const UsersService = {
    getUsers
}

function getUsers(page, gender) {
    if (gender === 'all-genders') {
        console.log('all-gender', gender);
        return axios
        .get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
        .then(res => res.data)
    } else {
        console.log('male or female' , gender);
        return axios
            .get(`https://randomuser.me/api/?gender=${gender}&results=10&page=${page}&seed='abc`)
            .then(res => res.data)
    }
}