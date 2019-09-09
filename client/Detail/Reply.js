import React, { Component } from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';
moment.locale('zh-cn'); 
class Reply extends Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  render() {
    const { likes, dislikes, action } = this.state;
    const { content, update_at, author: {loginname}} = this.props.content;
    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span key='comment-basic-dislike'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">回复</span>,
    ];

    return (
      <Comment
        actions={actions}
        author={<a>{loginname}</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            {content}
          </p>
        }
        datetime={
          <Tooltip title={moment(update_at).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(update_at).fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}
export default Reply;