import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const config = {
    apiKey: '3624203c3f8aa66f05b09012ea276ec6'
}