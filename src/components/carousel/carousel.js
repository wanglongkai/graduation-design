/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
import  './carousel.css'
import mianFunc from './mainfunc'



export default class Carousel extends React.Component {

  componentDidMount(){
    mianFunc(this.props.time,this.props.theme)
  }

  static defaultProps = {
    theme:'#cccccc',//主题颜色
    time:4,//多少秒切换一次图片
    radius:50,//圆角度数
    prevNext:true,//是否显示前后箭头
    olList:true,//是否显示下标列表
    prevIcon: '<',//前一张图标
    nextIcon:'>',//后一张图标
    children:'👍'
  }



  render() {
    const {radius,prevNext,olList,prevIcon,nextIcon,children} = this.props;
    return (
      <div className="box" id="box">
        <div className="inner" style={{borderRadius:radius}}>
          {children}
          <ol className="bar" style={{display:olList ? null : 'none'}}> </ol>
          {/*<div id="arr" style={{opacity: prevNext ? 1 : 0}}>*/}
          <div id="arr">
            <span id="left" className='left'>{prevIcon}</span>
            <span id="right" className='right'>{nextIcon}</span>
          </div>
        </div>
      </div>
    )
  }
}