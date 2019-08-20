import React from 'react';
import { Card, Input, Button } from 'antd';
const Login = (props) => {
  return (
    <div>
        <Card style={{ margin: '0 auto' }}>
            <div>
                <span>用户名</span>
                 <Input placeholder="请输入用户名" />
            </div>
            <div>
                <span>密码</span>
                 <Input placeholder="请输入密码" />
            </div>
            <div>
                <span>确认密码</span>
                 <Input placeholder="请输入确认密码" />
            </div>
            <div>
                <span>电子邮箱</span>
                 <Input placeholder="请输入电子邮箱" />
            </div>
            <Button type="primary">注册</Button>
        </Card>
    </div>
  )
};

export default Login;