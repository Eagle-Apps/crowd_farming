import axios from 'axios'
const token = localStorage.getItem('ndembeleAccess')
let myAxios = axios.create({
  baseURL: 'https://ndembele.onrender.com',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export default myAxios
