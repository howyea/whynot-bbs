import React, { Component } from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';

const { Content,Footer } = Layout;
class App extends Component {
    state = {  }
    render() { 
        return (
            <Layout>
                <Header {...this.props}></Header>
                <Content style={{ marginTop: 64, backgroundColor:'#fff' }}>
                    {renderRoutes(this.props.route.routes)}
                </Content>
            {/* <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0 }}>Ant Design ©2018 Created by Ant UED</Footer> */}
          </Layout>
          )
    }
}

export default App;