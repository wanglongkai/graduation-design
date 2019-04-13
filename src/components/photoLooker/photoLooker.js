/**
 * @author:WangLK5
 * @Date:2019-04-10
 */

import React from 'react';
import './photoLooker.css'

export default class Photo extends React.Component {

  //产生全屏查看效果
  create = ()=>{
    let img = document.createElement('img');
    img.classList.add("imgCss");
    img.src = this.props.children.props.src;
    let div = document.createElement('div');
    div.classList.add('divCss');
    div.onclick = this.cancelClick;
    let container = document.createElement('div');
    container.id='pic';
    let body = document.body || document.documentElement;

    div.appendChild(img);
    container.appendChild(div);
    body.appendChild(container)
  }

  //取消查看
  cancelClick = ()=>{
    let body = document.body || document.documentElement;
    let node = document.getElementById('pic');
    body.removeChild(node)
  }

  //点击查看
  toAllClick = (e)=>{
    e.stopPropagation();
    if(this.props.children&&this.props.children.props&&this.props.children.props.src){
      this.create();
    }else{
      return false;
    }

  }

  render() {
    return <span onClick={(e)=>{this.toAllClick(e)}}>
      {this.props.children}
    </span>
  }
}