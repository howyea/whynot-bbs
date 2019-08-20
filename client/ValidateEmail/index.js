import React, { Component } from 'react';
import { Button } from 'antd';
import { activeAccount } from "./request";
class ValidateEmail extends Component {
    state = {  }
    render() { 
        return ( 
                <Button onClick={() => {
                    activeAccount();
                }}>激活账号</Button>
         );
    }
}
 
export default ValidateEmail;