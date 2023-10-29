import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-fs1b.onrender.com',
})
