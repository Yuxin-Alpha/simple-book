import React, { Component, Fragment } from 'react';
import './style.css'

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {

        return (
            <Fragment>
                {/*我是一个注释*/}
                <div>
                    <input
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button
                        onClick={this.handleBtnClick.bind(this)}
                    >提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{ item }</li>
                        })
                    }

                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        const listCopy = [...this.state.list];
        listCopy.splice(index, 1);
        this.setState({
            list: listCopy
        });
    }
}

export default TodoList;
