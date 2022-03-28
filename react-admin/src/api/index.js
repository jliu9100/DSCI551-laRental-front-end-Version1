import axios from "axios";
import ajax from "./ajax";

const BASE = ''
//登录接口

//
export default axios.create({
    baseURL:"https://dsci551-project-e5ce9-default-rtdb.firebaseio.com"
})