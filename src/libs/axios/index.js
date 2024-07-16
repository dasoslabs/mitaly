import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.DOMAIN,
})

export default axiosInstance
