import React, { Component } from 'react';
import { Input, Select, Button } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
class Edit extends Component {
    state = {  }
    componentDidMount() {
        var editor = new Editor();
        editor.render($('.editor')[0]);
    }
    render() { 
        return ( 
            <div>
                <Select defaultValue="请选择" style={{ width: 120 }}>
                    <Option value="">请选择</Option>
                    <Option value="share">分享</Option>
                    <Option value="ask">问答</Option>
                    <Option value="job">招聘</Option>
                </Select>
                <Input placeholder="标题字数 10 字以上" />
                <div className='markdown_editor in_editor'>
                    <div className='markdown_in_editor'>
                        <textarea className='editor' name='t_content' rows='20'
                                placeholder='文章支持 Markdown 语法, 请注意标记代码'
                                ></textarea>

                        <div className='editor_buttons'>
                        <Button>提交</Button>
                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Edit;