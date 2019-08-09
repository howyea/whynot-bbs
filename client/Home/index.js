import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions'

class Home extends Component {
    getList() {
        const { list } = this.props
        return list.map(item => <div key={item.id}>{item.title}</div>)
    }
    componentDidMount() {
        if (!this.props.list.length) {
          this.props.getHomeList()
        }
      }
  render() {
    const { list } = this.props
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList,
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})

Home.loadData = (store) => {
    return store.dispatch(getHomeList())
}
//连接store
export default connect(mapStateToProps, mapDispatchToProps)(Home);