import axios from 'axios'

const http = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default http
