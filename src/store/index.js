import { createStore } from 'redux';
import reducer from './reducer'

// 创建公共存储仓库
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
