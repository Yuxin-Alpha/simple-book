import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        // 订阅store的改变
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
                list={this.state.list}
        />)
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action)
    }
}
export default TodoList;
