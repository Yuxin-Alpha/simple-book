import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
    render() {
        return (<Fragment>
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input
                    value={this.props.inputValue}
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={this.props.handleInputChange}
                    placeholder='11111'/>
                <Button
                    type="primary"
                    onClick={this.props.handleBtnClick}
                >提交</Button>
            </div>
            <List
                style={{marginLeft: '10px', width: '300px', marginTop: '5px'}}
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (<List.Item onClick={(index) => {this.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </Fragment>
        )
    }
}
export default TodoListUI;
