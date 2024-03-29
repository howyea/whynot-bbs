import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Row, Col, Input } from 'antd';
import { signout } from "./request";
const { Header } = Layout;
const { Search } = Input;
class Head extends Component {
    state = { 
        is_login: false
     }
    componentDidMount() {
        this.setState({
            is_login: !!localStorage.getItem('accessToken')
        })
    }
    render() { 
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 20' }}>
                <Row>
                    <Col span={22} style={{display: 'flex', alignItems: 'center'}}>
                        <img src="/public/images/logo.png" alt=""/>
                        <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200, height: 35 }}
                        />
                    </Col>
                    <Col span={1}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                        onClick={(params) => {
                            this.props.history.push(params.item.props.route);
                        }}
                    >
                        <Menu.Item key="1" route="/">首页</Menu.Item>
                        {
                            this.state.is_login && <Menu.Item key="2" onClick={async() => {
                                const _result = await signout();
                                if (_result.success) {
                                    localStorage.removeItem('accessToken');
                                    location.href = location.origin;
                                }
                            }}>退出登录</Menu.Item>
                        }
                        {
                            !this.state.is_login && <Menu.Item key="2"  route="/login">登录</Menu.Item>
                        }
                        {
                            !this.state.is_login && <Menu.Item key="3"  route="/register">注册</Menu.Item>
                        }
                        <Menu.Item key="4"  route="/Edit">新增话题</Menu.Item>
                    </Menu>
                    </Col>
                </Row>
            </Header>
          )
    }
}

export default Head;