//reducer的作用是返回一个新的状态
import {FETCH_POSTS} from '../actions/types';
const initialState = {
    items:[]
}


//reducer要传两个参数，一个是新的状态一个是action
export default function(state = initialState,action){
    console.log('123');
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state
            }
        default:
            return state;
    }
}


