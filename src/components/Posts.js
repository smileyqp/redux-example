import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
//fetchPost是一个action;connect是一个方法；connect是将action和组件相互连接起来的
class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        this.props.fetchPosts();
        
    }
  render() {
      const postItem = this.state.posts.map(post => (
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

export default connect(null,{ fetchPosts })(Posts);
