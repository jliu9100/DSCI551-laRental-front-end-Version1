import logo from './logo.svg';
import './App.less';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Home from './pages/home/home'
import { Button, List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Info from './pages/info/info';
import Bar from './pages/charts/bar';
import Line from './pages/charts/line';
import Pie from './pages/charts/pie';
export default class App extends Component {

  render () {
    return (
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element ={<Login/>}></Route>
          <Route path='/' element ={<Admin/>}>
            <Route path='home' element = {<Home/>}/>
            <Route path='info' element = {<Info/>}/>
            <Route path='charts/bar' element = {<Bar/>}/>
            <Route path='charts/line' element = {<Line/>}/>
            <Route path='charts/pie' element = {<Pie/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    )
  }
}