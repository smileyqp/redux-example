import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
//fetchPost是一个action;connect是一个方法；connect是将action和组件相互连接起来的
class Posts extends Component {
    //在组件中获取状态；由于所有的数据都已经在redux中进行管理了，那么就不需要这个来保存state了
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         posts:[]
    //     }
    // }

    //触发action操作
    componentDidMount(){
        this.props.fetchPosts();
        
    }
  render() {
      const postItem = this.props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.id}</h3>
            <h3>{post.uerId}</h3>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>
      ));
    return (
      <div className="Posts">
       <h1>Posts</h1>
       {postItem}
      </div>
    );
  }
}

//给当前的方法和状态规定具体的数据类型
PropTypes.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
}
//将状态转化成属性
const mapStateToProps = state => ({
    posts:state.posts.items,
})

export default connect(mapStateToProps,{ fetchPosts })(Posts);
