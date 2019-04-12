/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Spin from '../../../components/loading'
import Btn from '../../../components/button'
import Ico from "../../../components/ico"

export default class SpinPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning:false
    }
  }

  stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }

  //取消全局加载中
  cancel = ()=>{
    setTimeout(()=>{
      this.setState({
        spinning:false
      })
    },3000);
  }

  //全局加载中
  goSpin = ()=>{
    this.setState({
      spinning:true
    })
    this.cancel()
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Spin加载中</h3>
          <p>在数据加载过程中，为避免用户操作，可以使用该组件提示加载中不可操作。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        <div style={this.stylesheet}>
          <Btn onClick={this.goSpin}>全局加载</Btn>
          <Spin global spinning={this.state.spinning}/>
          <br/><br/><br/>

          <Spin>
            <div style={{height:200,width:300}}> </div>
          </Spin>
          <span style={{width:30}}/>
          <Spin size='25px' icon={"❌"} tipShow={false}>
            <div style={{height:200,width:300}} > </div>
          </Spin>
          <span style={{width:30}}/>
          <Spin size='25px' icon={<Ico type='pilianggengxin' style={{fontSize:25}}/>}>
            <div style={{height:200,width:300}} > </div>
          </Spin>
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
            <div>tip</div>
            <div>loading的文案</div>
            <div>string</div>
            <div>'...loading...'</div>
          </li>
          <li className={style.li}>
            <div>tipShow</div>
            <div>是否显示文案</div>
            <div>boolean</div>
            <div>true</div>
          </li>
          <li className={style.li}>
            <div>size</div>
            <div>loading文案的大小</div>
            <div>像素值</div>
            <div>18px</div>
          </li>
          <li className={style.li}>
            <div>spinning</div>
            <div>是否加载中</div>
            <div>boolean</div>
            <div>true</div>
          </li>
          <li className={style.li}>
            <div>icon</div>
            <div>加载中图案</div>
            <div>ReactNode/string</div>
            <div><Ico type='pilianggengxin' style={{fontSize:18}}/></div>
          </li>
          <li className={style.li}>
            <div>global</div>
            <div>是否全屏加载</div>
            <div>boolean</div>
            <div>false</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>被包裹的node,全屏加载时，建议不传children。</div>
            <div>ReactNode</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>theme</div>
            <div>主题颜色</div>
            <div>色值</div>
            <div>green</div>
          </li>
        </ul>
      </div>
    )
  }
}