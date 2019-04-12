/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"

export default class PhotoLokerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>PhotoLooker图片查看器</h3>
          <p>在进行图片展示时，可以使用图片查看器查看大图。</p>
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