import axios from 'axios';
import {getCookie} from "cookies-next";
import 'dotenv/config'


const token = getCookie("token");

axios.defaults.headers.common = {
  'Authorization': `bearer ${token}`, 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
}
export default axios;
