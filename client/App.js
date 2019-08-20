import React from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';

const { Content,Footer } = Layout;
const  App = (props) => {
  return (
    <Layout>
        <Header {...props}></Header>
        <Content style={{ marginTop: 64, backgroundColor:'#fff' }}>
            {renderRoutes(props.route.routes)}
        </Content>
    {/* <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0 }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
  )
};

export default App;