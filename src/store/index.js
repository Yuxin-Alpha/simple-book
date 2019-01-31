import { createStore } from 'redux';
import reducer from './reducer'

// 创建公共存储仓库
const store = createStore(reducer);

export default store;
