/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Modal from '../../../components/modal'
import Btn from '../../../components/button'

export default class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:false
    }
  }

  stylesheet = {
    marginBottom:20,
    marginTop:20,
    paddingLeft: 40,
  }

  showModal = ()=>{
    this.setState({visible:true})
  }
  hiddenModal =()=>{
    this.setState({visible:false})
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Modal模态框</h3>
          <p>模态对话框。打开一个浮层，不用离开当前页面即可执行某些操作。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        <div style={this.stylesheet}>
          <Btn onClick={this.showModal}>显示模态框</Btn>
        </div>

        <Modal visible={this.state.visible} onCancel={this.hiddenModal}>
          <div style={{height:200,width:400}}>this is my modal</div>
        </Modal>

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
            <div>title</div>
            <div>modal标题</div>
            <div>string</div>
            <div>'modal-title'</div>
          </li>
          <li className={style.li}>
            <div>theme</div>
            <div>主题颜色</div>
            <div>色值</div>
            <div>'blue'</div>
          </li>
          <li className={style.li}>
            <div>visible</div>
            <div>是否显示modal</div>
            <div>boolean</div>
            <div>true</div>
          </li>
          <li className={style.li}>
            <div>okText</div>
            <div>确认按钮文案</div>
            <div>string</div>
            <div>'Yes'</div>
          </li>
          <li className={style.li}>
            <div>cancelText</div>
            <div>取消按钮文案</div>
            <div>string</div>
            <div>'No'</div>
          </li>
          <li className={style.li}>
            <div>onOk</div>
            <div>确定按钮回调</div>
            <div>function:</div>
            <div>{`()=>{}`}</div>
          </li>
          <li className={style.li}>
            <div>onCancel</div>
            <div>取消按钮回调</div>
            <div>function</div>
            <div>{`()=>{}`}</div>
          </li>
        </ul>
      </div>
    )
  }
}