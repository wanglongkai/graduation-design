/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
import style from './index.module.scss'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div style={{height:'100%',width:'100%'}} className={style.topMain}>
        <div className={style.title}>毕业设计-自定义业务系统组件库</div>
        <span>姓名：王龙楷</span> <span>学号：14047019</span>
      </div>
    )
  }
}