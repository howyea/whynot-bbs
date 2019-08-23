import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHomeList, getSiteIndexList } from './store/actions'
import { Layout, Breadcrumb,List, Typography, Tag, Pagination } from 'antd';
import { Styled,ListHead } from "./styled";

const { Content } = Layout;
const { CheckableTag } = Tag;

class Home extends Component {
    state = {
        tabs: [],
        tab: 'all',
        topics: [],
        current_page: 0,
        list_topic_count: 0,
        pages: 0
    }
    async componentDidMount() {
        const { 
            tabs,
            topics,
            current_page,
            list_topic_count,
            pages 
        } = await getSiteIndexList();
        this.setState({
            tabs, topics,
            current_page,
            list_topic_count,
            pages 
        });
      }
      handleChange = async(tab) => {
        const { 
            topics,
            current_page,
            list_topic_count,
            pages 
        } = await getSiteIndexList({tab});
        this.setState({
            tab,
            topics,
            current_page,
            list_topic_count,
            pages 
        });
    };
  render() {
    const { 
        topics,
        current_page,
        list_topic_count,
        pages 
    } = this.state
    return <Styled><List
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
        bordered
        dataSource={topics}
        renderItem={item => (
        <List.Item onClick={() => {
            this.props.history.push(`/topic_detail?id=${item._id}`)
        }}>
            <Typography.Text mark>[ITEM]</Typography.Text> {item.title}
        </List.Item>
        )}
    />
     <Pagination current={current_page} pageSize={list_topic_count} size="small" total={pages*list_topic_count} />
    </Styled>
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