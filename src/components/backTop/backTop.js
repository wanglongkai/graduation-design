/**
 * @author:WangLK5
 * @Date:2019-04-10
 */

import React from 'react';
import style from './backTop.module.scss'

export default class BackTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show:false};
    this.scrollEventHand = null;
    this.timer = null;
  }

  static defaultProps = {
    top: 0,//回到顶部的距离
    theme:'#cccccc',
    visibilityHeight:200,//多高显示
  }

  componentDidMount(){
    if(this.props.visibilityHeight){
      this.scrollEventHand = ()=>{
        if(this.getScrollTop() >= this.props.visibilityHeight){
          this.setState({show:true})
        }else{
          this.setState({show:false})
        }
      }
      document.addEventListener('scroll',this.scrollEventHand);
    }else{
      this.setState({show:true})
    }
  }


  //加点缓动效果
  scrollFunc = (targetTop)=>{
    this.timer = setInterval(()=>{
      let top = (document.body.scrollTop || document.documentElement.scrollTop)-targetTop;
      let speed = top / 4;
      if (document.body.scrollTop) {
        document.body.scrollTop -= speed;
      }else {
        document.documentElement.scrollTop -= speed;
      }
      if (top <=  0) {
        clearInterval(this.timer);
      }
    }, 30)
  }

  //获取滚动高度
  getScrollTop = ()=>{
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    return parseInt(top,10);
  }

  //正式回到顶部
  backTop = ()=>{
    this.scrollFunc(this.props.top)
  }

  render() {
    const {theme} = this.props;
    return (
      <div className={style.backTop}
           style={{border: `1px solid ${theme}`,
                    display:this.state.show ? null :'none'
                  }}
           onClick={this.backTop}
      >
        {this.props.children}
      </div>
    )
  }
}