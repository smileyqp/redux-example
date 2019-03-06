import {createStore, applyMiddleware,compose} from '../node_modules/redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
const middleware = [thunk];


//...是分步操作符;middleware是分步操作符的数组
//三个参数：reducer是新返回的状态的计算、状态state、applyMiddleware异步操作排序
//rootReducer可以看做一个数组，里面包含很多我们需要的reducer
export const store = createStore(
    rootReducer,
    initialState,
    compose(//compose是用于连接浏览器；让浏览器有一个调试工具 ；中间件
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
    
    );