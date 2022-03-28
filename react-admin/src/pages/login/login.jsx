import React, {Component} from 'react'
import './login.less'
import logo from './images/SC.png'
import { Form, Input, Button, Checkbox, Icon } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
/*登录的路由组件*/
export default class Login extends Component {
    render () {
        const onFinish = (values) => {
            console.log('Success:', values);
          };
        
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
        return(
            <div className="login">
                <header className='login-header'>
                    <img src={logo} alt='logo'/>
                    <h1>LArental</h1>
                </header>
                <section className='login-content'>
                    <h2>sign in</h2>
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onSubmit={this.handleSubmit}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}   
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className='login-form'
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input prefix={<UserOutlined />}/>
 
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />}/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" className='login-form-button'>
                            Submit
                            </Button>
                        </Form.Item>
                        </Form>
                </section>
            </div>
        )
    }
}



