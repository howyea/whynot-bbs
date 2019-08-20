import React, { Component } from 'react';
import { Card, Input, Button } from 'antd';
import { signup } from "./request";
class Register extends Component {
    state = { 
        loginname: '',
        email: '',
        pass: '',
        re_pass: ''
     }
    render() { 
        return ( 
            <div>
                <Card style={{ margin: '0 auto' }}>
                    <div>
                        <span>用户名</span>
                        <Input allowClear value={this.state.loginname} placeholder="请输入用户名" onChange={(e) => {
                            this.setState({
                                loginname: e.target.value
                            })
                        }} />
                    </div>
                    <div>
                        <span>密码</span>
                        <Input.Password allowClear value={this.state.pass} placeholder="请输入密码" onChange={(e) => {
                            this.setState({
                                pass: e.target.value
                            })
                        }}/>
                    </div>
                    <div>
                        <span>确认密码</span>
                        <Input.Password allowClear value={this.state.re_pass} placeholder="请输入确认密码" onChange={(e) => {
                            this.setState({
                                re_pass: e.target.value
                            })
                        }}/>
                    </div>
                    <div>
                        <span>电子邮箱</span>
                        <Input allowClear value={this.state.email} placeholder="请输入电子邮箱" onChange={(e) => {
                            this.setState({
                                email: e.target.value
                            })
                        }}/>
                    </div>
                    <Button type="primary" onClick={() => {
                        const {
                            loginname,
                            pass,
                            re_pass,
                            email
                        } = this.state;
                        signup({
                            loginname,
                            pass,
                            re_pass,
                            email
                        })
                    }}>注册</Button>
                </Card>
            </div>
         );
    }
}
 
export default Register;