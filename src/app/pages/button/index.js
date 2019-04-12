/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
import style from './btn.module.scss'
import Btn from '../../../components/button'

export default class IcoPage extends React.Component {

  render() {
    return (
      <div style={{fontSize:12}}>
        <div className={style.teach}>
          <h3>Button按钮</h3>
          <p>按钮用于开始一个即时操作。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8',marginBottom:20}}/>

        <ul className={style.btnUL}>
          <li className={style.item}>
            <span style={{fontSize:15}}>普通使用/outline形式:</span>
          </li>
          <li className={style.item}>
            <Btn size='xs'>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn outline size='sm'>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn outline>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn size='lg'>按钮</Btn>
          </li>
        </ul>
        <ul className={style.btnUL}>
          <li className={style.item}>
            <span style={{fontSize:15}}>切换type/加载中:</span>
          </li>
          <li className={style.item}>
            <Btn loading size='xs' type='success'>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn loading size='sm' type='success'>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn loading type='success'>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn loading outline size='lg' type='success'>按钮</Btn>
          </li>
        </ul>
        <br/>

        <ul className={style.btnUL}>
          <li className={style.item}>
            <span style={{fontSize:15}}>使用“icon/ricon”:</span>
          </li>
          <li className={style.item}>
            <Btn outline size='xs' type='waring' icon='beibohui'>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn size='sm' type='info' icon='zuoyidianxuan'>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn type='primary' icon='zhankai' ricon='beibohui'>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn size='lg' type='danger' icon='zuoyi'>按钮</Btn>
          </li>
        </ul>
        <ul className={style.btnUL}>
          <li className={style.item}>
            <span style={{fontSize:15}}>选择禁用:</span>
          </li>
          <li className={style.item}>
            <Btn outline size='xs' type='waring' icon='beibohui' disable>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn size='sm' type='info' icon='zuoyidianxuan' disable>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn type='primary' icon='zhankai' disable>按钮</Btn>
          </li>
          <li className={style.item}>
            <Btn size='lg' type='danger' icon='zuoyi' disable>按钮</Btn>
          </li>
        </ul>
        <br/>

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
            <div>type</div>
            <div>按钮的主题。success,waring,info,primary,secondary,danger</div>
            <div>string</div>
            <div>'primary'</div>
          </li>
          <li className={style.li}>
            <div>size</div>
            <div>按钮尺寸。'xs' 'sm' 'lg'</div>
            <div>string</div>
            <div>middle-34像素</div>
          </li>
          <li className={style.li}>
            <div>style/className</div>
            <div>按钮样式修改</div>
            <div>css</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>disable</div>
            <div>是否禁用按钮</div>
            <div>boolean</div>
            <div>false</div>
          </li>
          <li className={style.li}>
            <div>outline</div>
            <div>是否是outline模式按钮</div>
            <div>boolean</div>
            <div>false</div>
          </li>
          <li className={style.li}>
            <div>ghost</div>
            <div>按钮背景是否透明</div>
            <div>boolean</div>
            <div>false</div>
          </li>
          <li className={style.li}>
            <div>icon</div>
            <div>按钮左边图标，Ico组件的type值</div>
            <div>string</div>
            <div>null</div>
          </li>
          <li className={style.li}>
            <div>ricon</div>
            <div>按钮右边图标，Ico组件的type值</div>
            <div>string</div>
            <div>null</div>
          </li>
          <li className={style.li}>
            <div>loading</div>
            <div>加载中动画</div>
            <div>boolean</div>
            <div>false</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>按钮的文案</div>
            <div>string、ReactNode</div>
            <div>必填项</div>
          </li>
          <li className={style.li}>
            <div>onClick</div>
            <div>按钮的点击事件</div>
            <div>function:</div>
            <div>{`()=>{}`}</div>
          </li>

        </ul>
      </div>
    )
  }
}