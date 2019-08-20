import React, { Component } from 'react';
import { Card, Input, Button } from 'antd';
import { signin } from "./request";
class Login extends Component {
    state = { 
        loginname: '',
        pass: ''
     }
    render() { 
        return ( 
            <div>
                <Card style={{ margin: '0 auto' }}>
                    <div>
                        <span>用户名</span>
                        <Input allowClear value={this.state.loginname} placeholder="请输入用户名/邮箱" onChange={(e) => {
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
                    <Button type="primary" onClick={() => {
                        const {
                            loginname,
                            pass
                        } = this.state;
                        signin({
                            loginname,
                            pass
                        })
                    }}>登录</Button>
                </Card>
            </div>
         );
    }
}
 
export default Login;
