/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import ownCss from './badge.module.scss'
import Badge from '../../../components/badge'
import Btn from '../../../components/button'

export default class BadgePage extends React.Component {

  render() {
    return (
      <div style={{fontSize:12}}>
        <div className={style.head}>
          <h3>Badge徽标数</h3>
          <p>图标右上角的圆形徽标数字。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>


        <ul className={ownCss.ul}>
          <li><Badge count={89}><Btn>消息</Btn></Badge></li>
          <li><Badge count={109} over={99}><Btn style={{backgroundColor:'green'}}>消息</Btn></Badge></li>
          <li><Badge count={10} color='#cccccc'><Btn>消息</Btn></Badge></li>
          <li><Badge count={109} over={99} offset={[0,0]}><Btn style={{backgroundColor:'pink'}}>消息</Btn></Badge></li>
          <li><Badge count={1000} color='black' offset={[20,20]}><Btn>消息</Btn></Badge></li>
        </ul>


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
          <li className={style.li}>
            <div>over</div>
            <div>超过该数字则显示"+"号</div>
            <div>number</div>
            <div>99</div>
          </li>
          <li className={style.li}>
            <div>color</div>
            <div>徽标的颜色</div>
            <div>色值</div>
            <div>'red'</div>
          </li>
          <li className={style.li}>
            <div>offset</div>
            <div>徽标在右上角的偏移度</div>
            <div>[top,right]</div>
            <div>[8,8]</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>被徽标包围的node</div>
            <div>ReactNode</div>
            <div>null</div>
          </li>
        </ul>
      </div>
    )
  }
}