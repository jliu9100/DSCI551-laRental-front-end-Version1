import axios from "axios";
import ajax from "./ajax";
import Qs from 'qs'

const BASE = ''
//登录接口

//
export default axios.create({
    baseURL:"http://localhost:5000",

    paramsSerializer: function (params){      
        return Qs.stringify(params, {arrayFormat : 'brackets'})
        // let result = '';
        // Object.keys(params).forEach(key => {
        //     result += `${key}=${encodeURIComponent(params[key])}&`;
        // });
        // return result;
        
    }
})