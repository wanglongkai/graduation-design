/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"

export default class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Modal模态框</h3>
          <p>模态对话框。打开一个浮层，不用离开当前页面即可执行某些操作。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>
        <h3 style={{fontSize:18,paddingLeft:20,fontWeight:'lighter'}}>效果展示</h3>

        {/*主题展示区域*/}

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>
        <h3 style={{fontSize:18,paddingLeft:20,fontWeight:'lighter'}}>API</h3>
        <ul className={style.API}>
          <li className={style.title}>
            <div className={style.param}>参数</div>
            <div className={style.desc}>说明</div>
            <div className={style.type}>类型</div>
            <div className={style.plain}>默认</div>
          </li>
          <li className={style.li}>
            <div>count</div>
            <div>徽标的数字</div>
            <div>number</div>
            <div>0</div>
          </li>
        </ul>
      </div>
    )
  }
}