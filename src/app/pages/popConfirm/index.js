/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import PopConform from '../../../components/popConfirm'
import Btn from '../../../components/button'

export default class PopPage extends React.Component {
  pop = {
    height: 100,
    marginLeft: 40,
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  }


  render() {
    return (
      <div style={{fontSize: 12}}>

        <div className={style.head}>
          <h3>PopConfirm气泡确认框</h3>
          <p>在执行某些操作时，为防止误操作，通过该组件确认操作。</p>
        </div>

        <div style={{clear: 'both', borderTop: '1px solid #e8e8e8'}}/>

        {/*主题展示区域*/}
        <div style={this.pop}>
          <PopConform theme='#2691E7'>
            <Btn>上</Btn>
          </PopConform>

          <PopConform placement='bottom' theme='red'>
            <Btn>下</Btn>
          </PopConform>

          <PopConform placement='left' theme='green'>
            <Btn>左</Btn>
          </PopConform>

          <PopConform placement='right' theme='black'>
            <Btn>右</Btn>
          </PopConform>

        </div>

        <div style={{clear: 'both', borderTop: '1px solid #e8e8e8'}}/>
        <h3 style={{fontSize: 18, paddingLeft: 20, fontWeight: 'lighter'}}>API</h3>
        <ul className={style.API}>
          <li className={style.title}>
            <div className={style.param}>参数</div>
            <div className={style.desc}>说明</div>
            <div className={style.type}>类型</div>
            <div className={style.plain}>默认</div>
          </li>
          <li className={style.li}>
            <div>placement</div>
            <div>气泡位置</div>
            <div>top、bottom、left、right</div>
            <div>top</div>
          </li>
          <li className={style.li}>
            <div>title</div>
            <div>文案</div>
            <div>string</div>
            <div>are you sure do this action ?</div>
          </li>
          <li className={style.li}>
            <div>okText</div>
            <div>确定按钮文案</div>
            <div>string</div>
            <div>Yes</div>
          </li>
          <li className={style.li}>
            <div>cancelText</div>
            <div>取消按钮文案</div>
            <div>string</div>
            <div>No</div>
          </li>
          <li className={style.li}>
            <div>theme</div>
            <div>主题颜色</div>
            <div>色值</div>
            <div>#2691E7</div>
          </li>
          <li className={style.li}>
            <div>onConfirm</div>
            <div>确定按钮的执行函数</div>
            <div>function:()=>{}</div>
            <div>{`()=>{}`}</div>
          </li>
          <li className={style.li}>
            <div>onCancel</div>
            <div>取消按钮的执行函数</div>
            <div>function:()=>{}</div>
            <div>{`()=>{}`}</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>被确认的操作</div>
            <div>ReactNode</div>
            <div>-</div>
          </li>
        </ul>
      </div>
    )
  }
}