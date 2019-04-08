/*四个props
*
* type:图标的类型(必须)
* style/className:对于图标，用户可以自己控制一些样式，比如字体、颜色等等
* onClick:对于图标我们也可绑定点击事件
* */

import React from 'react';
import './iconfont/iconfont.css';


export default class Ico extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    const {className='', style={}, type, onClick=()=>{}} = this.props;
    return(<i className={`crmico crmico-${type} ${className}`} style={style} onClick={onClick} /> )
  }
}

