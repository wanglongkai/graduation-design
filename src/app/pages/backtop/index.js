/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import BackTop from '../../../components/backTop'

export default class BackTopPage extends React.Component {
  stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>BackTop回到顶部</h3>
          <p>当页面高度达到一定高度，显示回到顶部按钮。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        {/*主题展示区域*/}
        <div style={this.stylesheet}>
          <span style={{color:'red',fontSize:16}}>请滚动屏幕查看效果</span>
          <BackTop theme='#1890FF'/>
        </div>

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
            <div>theme</div>
            <div>主题颜色</div>
            <div>色值</div>
            <div>'#cccccc'</div>
          </li>
          <li className={style.li}>
            <div>top</div>
            <div>回到距离顶部的高度</div>
            <div>number</div>
            <div>0</div>
          </li>
          <li className={style.li}>
            <div>visibilityHeight</div>
            <div>页面高度达到该高度才显示 '回到顶部' 效果</div>
            <div>number</div>
            <div>200</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>回到顶部文案</div>
            <div>ReactNode</div>
            <div>'回到顶部'</div>
          </li>
        </ul>


        <div style={{height:900}}>  </div>
      </div>
    )
  }
}