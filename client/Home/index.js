import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHomeList, getSiteIndexList } from './store/actions'
import { Layout, Breadcrumb,List, Typography, Tag } from 'antd';
import { ListHead } from "./styled";

const { Content } = Layout;
const { CheckableTag } = Tag;

class Home extends Component {
    state = {
        tabs: [],
        tab: 'all'
    }
    async componentDidMount() {
        const { tabs } = await getSiteIndexList()
        if (!this.props.list.length) {
             this.props.getHomeList();
        }
        this.setState({
            tabs
        });
      }
    handleChange = (tab) => {
        console.log(tab)
        this.setState({
            tab
        });
        getSiteIndexList({tab});
    };
  render() {
    const { list } = this.props
    return <List
        style={{backgroundColor: "#fff",margin:"20 auto"}}
        header={<ListHead>
            <CheckableTag className="tab" checked={this.state.tab == 'all'} onChange={() => {
                this.handleChange('all')
            }}>全部</CheckableTag>
            {
                this.state.tabs.map((value,index) => {
                    return <CheckableTag  className="tab" key={value[0]+index} checked={this.state.tab == value[0]} onChange={() => {
                        this.handleChange(value[0])
                    }}>{value[1]}</CheckableTag>
                })
            }
        </ListHead>}
        footer={<div>Footer</div>}
        bordered
        dataSource={list}
        renderItem={item => (
        <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item.title}
        </List.Item>
        )}
    />
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList,
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getHomeList
    }, dispatch)
};

Home.loadData = (store) => {
    return store.dispatch(getHomeList())
}
//连接store
export default connect(mapStateToProps, mapDispatchToProps)(Home);