import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Row, Col, Input } from 'antd';

const { Header } = Layout;
const { Search } = Input;
import { Title } from "./styled";
const Head = (props) => {
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
                    props.history.push(params.item.props.route);
                }}
            >
                <Menu.Item key="1" route="/">首页</Menu.Item>
                <Menu.Item key="2"  route="/login">登录</Menu.Item>
                <Menu.Item key="3"  route="/register">注册</Menu.Item>
            </Menu>
            </Col>
        </Row>
    </Header>
  )
}

export default Head;