/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import pic from '../../asset/2.PNG'
import PhotoLooker from '../../../components/photoLooker'

export default class PhotoLokerPage extends React.Component {
   stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>PhotoLooker图片查看器</h3>
          <p>在进行图片展示时，可以使用图片查看器查看大图。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        <div style={this.stylesheet}>
          <PhotoLooker>
            <img src={pic} alt='图片损坏' title='可点击查看' style={{width:100, cursor: 'pointer'}}/>
          </PhotoLooker>
        </div>

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
            <div>-</div>
            <div><span style={{color:'red',fontSize:16,margin:0}}>使用说明:</span>用组件包裹需要查看的图片即可</div>
            <div>-</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>需要被查看的图片</div>
            <div>ReactNode</div>
            <div>-</div>
          </li>
        </ul>
      </div>
    )
  }
}