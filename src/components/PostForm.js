
import React, { Component } from 'react';


class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const post ={
            title:this.state.title,
            body:this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        }).then(res => res.json())
        .then(data => console.log(data))
    }
  render() {
    return (
      <div className="Posts">
        <h1>添加内容</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>title</label>
                <br />
                <input type='test' name='title' onChange={this.onChange} value={this.state.title}/>
            </div>
            <div>
                <label>body</label>
                <br />
                <textarea name='body' onChange={this.onChange}value={this.state.body}/>
            </div>
            <br />
            <button type='submit'>添加</button>
        
        </form>
      </div>
    );
  }
}

export default PostForm;
