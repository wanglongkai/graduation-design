/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Carousel from '../../../components/carousel'

export default class CarouselPage extends React.Component {

  stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }
  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Carousel轮播图</h3>
          <p>用于图片展示的走马灯效果。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        <div style={this.stylesheet}>
          <Carousel radius='30px' time={3} >
            <ul className='wlk-carsouel'>
              <li><a href="#"><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555072315744&di=80c459647823ef41f76a23c1969a3eae&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F00%2F94%2F40%2F66bOOOPIC1c.jpg' alt=""/></a></li>
              <li><a href="#"><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555072315743&di=e3b1a368cbb0a631dcccc0d8efe014c6&imgtype=0&src=http%3A%2F%2Fwww.pptok.com%2Fwp-content%2Fuploads%2F2012%2F08%2Fxunguang-4.jpg' alt=""/></a></li>
              <li><a href="#"><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1555062268&di=4d089116bda0bfc8b774caffc74edfdb&src=http://pic27.nipic.com/20130225/4746571_081826094000_2.jpg' alt=""/></a></li>
              <li><a href="#"><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1555062268&di=c1c922500e3a65118af9bb91aff0c0d2&src=http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg' alt=""/></a></li>
              <li><a href="#"><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1555062268&di=befb305f9b2e6fbd6ff5778248727d1e&src=http://pic.pptbz.com/pptpic/201306/2013062320262198.jpg' alt=""/></a></li>
            </ul>
          </Carousel>
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
            <div>time</div>
            <div>图片切换的时间间隔，秒</div>
            <div>number</div>
            <div>3</div>
          </li>
          <li className={style.li}>
            <div>prevNext</div>
            <div>是否显示前进/后退</div>
            <div>boolean</div>
            <div>true</div>
          </li>
          <li className={style.li}>
            <div>theme</div>
            <div>主题颜色</div>
            <div>色值</div>
            <div>'green'</div>
          </li>
          <li className={style.li}>
            <div>olList</div>
            <div>是否显示下标列表</div>
            <div>boolean</div>
            <div>true</div>
          </li>
          <li className={style.li}>
            <div>radius</div>
            <div>自定义展示框圆角度数</div>
            <div>百分比，像数值</div>
            <div>50px</div>
          </li>
          <li className={style.li}>
            <div>prevIcon</div>
            <div>向前按钮图标定制</div>
            <div>ReactNode</div>
            <div>&lt;</div>
          </li>
          <li className={style.li}>
            <div>nextIcon</div>
            <div>向后按钮图标定制</div>
            <div>ReactNode</div>
            <div>&gt;</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>被轮播的图片</div>
            <div>ReactNode</div>
            <div>'👍'</div>
          </li>
        </ul>
      </div>
    )
  }
}