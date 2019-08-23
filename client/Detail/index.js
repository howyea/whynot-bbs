import React, { Component } from 'react';
import { Card } from "antd";
import { getQueryString } from "../agency_file";
import { topicDetail } from "./request";
import { markdown } from "../../common/render_helper";
class Detail extends Component {
    state = {
        topic: {}
    }
    async componentDidMount() {
       const { topic } = await  topicDetail(getQueryString('id'), {});
      console.log(topic.linkedContent)

        this.setState({
            topic
        });
    }
    render() { 
        return ( 
            <div>
                <Card title={this.state.topic.title} bordered={false}>
                    <div dangerouslySetInnerHTML={{ __html: markdown(this.state.topic.linkedContent)}}></div>
                </Card>
            </div>
         );
    }
}
 
export default Detail;