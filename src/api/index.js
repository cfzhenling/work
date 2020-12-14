import axios from "../utils/http"
import base from "./base"

const api = {
      login(params){
          return axios.post(base.baseUrl + base.login,params)
      }
}
export default api