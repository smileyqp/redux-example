#### 数据流程：

- 前台输入数据，点击submit按钮触发createPost()方法</br>
- 在action中dispatch分发；将action的type以及payload传给reducer</br>
- reducer进行state更新；然后在Post中通过以下代码将状态转化成属性，在进行state添加，显示出来

```shell
const mapStateToProps = state => ({
    posts:state.posts.items,
    newPost:state.posts.item
})
```

![Image text](https://github.com/smileyqp/redux-example/blob/redux_20190306_01/src/Screenshot%20from%202019-03-06%2015-56-30.png)
