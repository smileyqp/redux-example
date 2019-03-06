//reducer的作用是返回一个新的状态
import {FETCH_POSTS,NEW_POST} from '../actions/types';
const initialState = {
    items:[],
    item:{}
}


//reducer要传两个参数，一个是新的状态一个是action
export default function(state = initialState,action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items:action.payload
            }
        case NEW_POST:
        return {
            ...state,
            item:action.payload
        }
        default:
            return state;
    }
}


