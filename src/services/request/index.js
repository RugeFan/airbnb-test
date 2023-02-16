import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

class RJRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({ baseURL, timeout })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}
const RjRequest = new RJRequest(BASE_URL, TIMEOUT)

export default RjRequest;
