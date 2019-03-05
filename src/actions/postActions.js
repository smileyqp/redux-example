import {FETCH_POSTS} from './types';


export function fetchPosts(){
    //分发操作，对应一些请求
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(post => 
        dispatch({
            type:FETCH_POSTS
            })
        );
    }
}