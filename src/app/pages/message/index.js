/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Message from '../../../components/message'
import Btn from '../../../components/button'

export default class MessagePage extends React.Component {

  stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }

  mess = (type) => {
    Message[type]("一些文字提示展示在这儿。",2)
  }

  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Message提示信息</h3>
          <p>执行某些操作后，得到某些提示信息作为反馈。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        {/*主题展示区域*/}
        <div style={this.stylesheet}>
          <Btn onClick={()=>this.mess('success')} type='success'>成功信息</Btn>&nbsp;&nbsp;&nbsp;
          <Btn onClick={()=>this.mess('info')} type='info'>通知信息</Btn>&nbsp;&nbsp;&nbsp;
          <Btn onClick={()=>this.mess('danger')} type='danger'>危险信息</Btn>&nbsp;&nbsp;&nbsp;
          <Btn onClick={()=>this.mess('warning')} type='warning'>警告信息</Btn>
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
            <div>-</div>
            <div>函数形式调用</div>
            <div>-</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>提示形式</div>
            <div>四种</div>
            <div>success,info,warning,danger</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>使用举例</div>
            <div>message.success(someinfo,5)</div>
            <div>提示成功信息，停留5秒</div>
            <div>-</div>
          </li>
        </ul>
      </div>
    )
  }
}