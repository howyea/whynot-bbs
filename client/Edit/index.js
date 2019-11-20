import React, { Component } from "react";
import { Input, Select, Button } from "antd";
import { topic_create, topic_edit } from "./request";
import { getQueryString } from "../agency_file";

const { TextArea } = Input;
const { Option } = Select;
let editor = null;
class Edit extends Component {
  params = {
    title: "",
    tab: "",
    content: ""
  };
  state = {
    title: "",
    tab: "",
    content: "",
    area: "",
    select: ""
  };
  tabs = [
    ["share", "分享"],
    ["ask", "问答"],
    ["job", "招聘"]
  ];
  async componentDidMount() {
    const _this = this;

    if (getQueryString("id")) {
      const { title, tab, content } = await topic_edit({
        id: getQueryString("id")
      });
      this.setState({
        title,
        tab,
        content,
        area: this.loadArea(content),
        select: this.loadSelect(tab)
      });
      setTimeout(() => {
        editor = new Editor();
        editor.render($(".editor")[0]);
      }, 1000);
    } else {
      setTimeout(() => {
        editor = new Editor();
        editor.render($(".editor")[0]);
      }, 1000);
      this.setState({
        area: this.loadArea(),
        select: this.loadSelect()
      });
    }
  }
  loadArea(content = "") {
    return (
      <div className="markdown_editor in_editor">
        <div className="markdown_in_editor">
          <TextArea
            defaultValue={content}
            id="TextArea"
            className="editor"
            rows="20"
            placeholder="文章支持 Markdown 语法, 请注意标记代码"
          ></TextArea>
          <Button
            onClick={() => {
              console.log(editor);
              editor.codemirror.save();
              const content = document.getElementById("TextArea");
              this.params.content = content.value;

              getQueryString("id")
                ? topic_edit(this.params)
                : topic_create(this.params);
              this.props.history.push("/");
            }}
          >
            提交
          </Button>
        </div>
      </div>
    );
  }
  loadSelect(tab = "") {
    return (
      <Select
        defaultValue={tab}
        style={{ width: 120 }}
        onSelect={value => {
          this.params.tab = value;
        }}
      >
        <Option value="">请选择</Option>
        {this.tabs.map((value, index) => {
          return (
            <Option key={index} value={value[0]}>
              {value[1]}
            </Option>
          );
        })}
      </Select>
    );
  }
  render() {
    return (
      <div>
        {this.state.select}
        <Input
          value={this.state.title}
          placeholder="标题字数 10 字以上"
          onChange={e => {
            this.params.title = e.target.value;
            this.setState({
              title: e.target.value
            });
          }}
        />
        {this.state.area}
      </div>
    );
  }
}

export default Edit;
