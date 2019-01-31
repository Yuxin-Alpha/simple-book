import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import './style.css';
import store from './store'

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    render() {
        return (
            <Fragment>
                <div style={{marginTop: '10px', marginLeft: '10px'}}>
                    <Input
                        value={this.state.inputValue}
                        style={{width: '300px', marginRight: '10px'}}
                        placeholder='11111'/>
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{marginLeft: '10px', width: '300px', marginTop: '5px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </Fragment>
        )
    }

}

export default TodoList;
