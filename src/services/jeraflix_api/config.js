import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
})

export const getHeaders = () => {
    let authUser = JSON.parse(sessionStorage.getItem('authUser'))

    if(!authUser) {
        authUser = {
            email: null,
            token: null
        }
    }

    const credentials = {
        email: authUser.email,
        token: authUser.token
    }
    return {
        'X-User-Email': credentials.email,
        'X-User-Token': credentials.token
    }
}