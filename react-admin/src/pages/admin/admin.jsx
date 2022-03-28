import React, {Component} from 'react'
import { Layout } from 'antd'
import {Navigate, BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom'
import LeftNav from '../../components/left-nav/left-nav';
import Header from '../../components/header/header';
const { Footer, Sider, Content } = Layout;
// const {Header, Footer, Sider, Content } = Layout;
/*管理的路由组件*/
export default class Admin extends Component {
    render () {
        return(
            <Layout style={{height: "100%"}}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Outlet/>  
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#ccccc'}}>Footer(Coming soon)</Footer>
                </Layout>
            </Layout>
        )
    }
}