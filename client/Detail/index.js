import React, { Component } from 'react';
import { Card, Button } from "antd";
import { getQueryString } from "../agency_file";
import { topicDetail } from "./request";
import { markdown } from "../../common/render_helper";
import { Styled } from "./styled";
import Reply from "./Reply";
let editor = null;
class Detail extends Component {
    state = {
        topic: {
            replies: []
        }
    }
    async componentDidMount() {
        editor = new Editor();
        editor.render($('.editor')[0]);
       const { topic } = await  topicDetail(getQueryString('id'), {});
        this.setState({
            topic
        });
    }
    edit = () => {
        this.props.history.push('/edit?id='+getQueryString('id'))
    }
    render() { 
        return ( 
            <Styled>
                <Card title={
                    <div>
                        <div>{this.state.topic.title}</div>
                        <span onClick={this.edit}>编辑</span>
                    </div>
                } bordered={false}>
                    <div dangerouslySetInnerHTML={{ __html: markdown(this.state.topic.linkedContent)}}></div>
                </Card>
                <div className='markdown_editor in_editor'>
                    <div className='markdown_in_editor'>
                        <textarea className='editor' name='r_content' rows='4'></textarea>
                        <Button onClick={() => {
                        }}>回复</Button>
                    </div>
                </div>
                <Card size="small" title="所有回复">
                    {
                        this.state.topic.replies.map((value,index) => {
                            return <Reply key={index} content={value}></Reply>
                        })
                    }
                </Card>
                
            </Styled>
         );
    }
}
 
export default Detail;