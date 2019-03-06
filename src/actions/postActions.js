import {FETCH_POSTS} from './types';

//分发操作的地方
// export function fetchPosts(){
//     //分发操作，对应一些请求
//     console.log(123);
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res =>res.json())
//         .then(posts => 
//         dispatch({
//             type:FETCH_POSTS,
//             payload:posts
//             })
//         );
//     }
// }


//将上面部分改为ES6；中间的dispatch是调用的另外一个参数即箭头函数返回值调用另外一个参数
//分发操作的地方，分发操作成功之后需要将type以及payload放入到store中去；store可以拿到这个action以及前一个状态；给reducer，reducer拿到action和人状态之后开始判断，看其执行的是哪一个type
export const fetchPosts = ()=> dispatch => {
    //分发操作，对应一些请求
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(posts => 
        dispatch({
            type:FETCH_POSTS,
            payload:posts
            })
        );
}