import { responsiveArray } from 'antd/lib/_util/responsiveObserve'
import axios from 'axios'
import { message } from 'antd'
import api from '.'
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary'
import { resolveOnChange } from 'antd/lib/input/Input'

export default function ajax(url, data={}, type='GET') {
    let promise
    if (type==='GET'){
       promise =  api.get(url)
    }else{
        promise = api.post(url,data)
    }
    promise.then(response=>{
        console.log(1111)
        console.log(response)
    }).catch(error=>{
        message.error('request出错！'+error.message)
    })
}

// ajax('/login',{username:'Tom', password:'123'},'POST').then()
// //获得对象数组（全部对象）
// //获得一个对象
// ajax()