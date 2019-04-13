/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Rate from '../../../components/rate'

export default class RatePage extends React.Component {
  stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Rate评分器</h3>
          <p>通过该组件可以实现打分效果</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        {/*主题展示区域*/}
        <div style={this.stylesheet}>
          <Rate/>
          <Rate>喜爱程度:</Rate>
          <Rate theme='blue'>切换主题:</Rate>
          <Rate theme='orange' length={7}>切换满分:</Rate>
          <Rate value='4.23'>默认值：</Rate>
          <Rate value='3.50' theme='black' readOnly>readOnly：</Rate>
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
            <div>children</div>
            <div>评分组件的标题</div>
            <div>ReactNode/string</div>
            <div>评分组件</div>
          </li>
          <li className={style.li}>
            <div>readOnly</div>
            <div>是否只读</div>
            <div>boolean</div>
            <div>false</div>
          </li>
          <li className={style.li}>
            <div>value</div>
            <div>组件的初始化分数</div>
            <div>number</div>
            <div>0.00</div>
          </li>
          <li className={style.li}>
            <div>theme</div>
            <div>组件的主题颜色</div>
            <div>色值/关键字</div>
            <div>关键字：yellow</div>
          </li>
          <li className={style.li}>
            <div>主题关键字</div>
            <div>自定义颜色值</div>
            <div> black, white, red, orange, yellow, green, blue, purple</div>
            <div>'yellow'</div>
          </li>
          <li className={style.li}>
            <div>size</div>
            <div>组件尺寸</div>
            <div>像素值</div>
            <div>25px</div>
          </li>
          <li className={style.li}>
            <div>length</div>
            <div>满分</div>
            <div>number(整数)</div>
            <div>5</div>
          </li>
          <li className={style.li}>
            <div>shape</div>
            <div>评分图案</div>
            <div>ReactNode/string</div>
            <div>★</div>
          </li>
          <li className={style.li}>
            <div>hollowShape</div>
            <div>未评分图案</div>
            <div>ReactNode/string</div>
            <div>☆</div>
          </li>
          <li className={style.li}>
            <div>onRate</div>
            <div>执行评分的回调</div>
            <div>function:(score)=>{}</div>
            <div>{'()=>{}'}</div>
          </li>
        </ul>
      </div>
    )
  }
}