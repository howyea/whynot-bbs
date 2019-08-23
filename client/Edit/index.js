import React, { Component } from 'react';
import { Input, Select, Button } from 'antd';
import { topic_create } from "./request";
const { TextArea } = Input;
const { Option } = Select;
let editor = null;
class Edit extends Component {
    params = { 
        title: '',
        tab: '',
        content: ''
     }
    componentDidMount() {
        const _this = this;
        editor = new Editor();
        editor.render($('.editor')[0]);
    }
    render() { 
        return ( 
            <div>
                <Select defaultValue="请选择" style={{ width: 120 }} onSelect={(value) => {
                    this.params.tab = value;
                }}>
                    <Option value="">请选择</Option>
                    <Option value="share">分享</Option>
                    <Option value="ask">问答</Option>
                    <Option value="job">招聘</Option>
                </Select>
                <Input placeholder="标题字数 10 字以上" onChange={(e) => {
                    this.params.title = e.target.value;
                }}/>
                <div className='markdown_editor in_editor'>
                    <div className='markdown_in_editor'>
                        <TextArea id="TextArea" className='editor' rows='20'
                            placeholder='文章支持 Markdown 语法, 请注意标记代码'
                            ></TextArea>
                        <Button onClick={() => {
                            editor.codemirror.save();
                            const content = document.getElementById('TextArea');
                            this.params.content = content.value;
                            console.log(this.params);
                            topic_create(this.params);
                            // this.props.history.push('/');
                        }}>提交</Button>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Edit;