/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Fold from "../../../components/panel/fold"
import Panel from "../../../components/panel"
import Btn from '../../../components/button'

export default class PanelPage extends React.Component {
  stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }
  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Panel折叠面板</h3>
          <p>层次式的折叠效果，可以折叠/展开的内容区域</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

       <div style={this.stylesheet}>
         <Panel title='主标题'
                left={<Btn size='xs' style={{marginLeft:10}}>左Node</Btn>}
                right={<Btn size='xs'>右Node</Btn>}>
           <Fold title={'子标题1'} right={<Btn size='xs'>右Node</Btn>}>
                <div style={{textAlign:'center'}}>
                  something <br/>
                  something <br/>
                  something <br/>
                  something <br/>
                </div>
           </Fold>
           <Fold title={'子标题2'} right={<Btn size='xs'>右Node</Btn>}>
             <div style={{textAlign:'center'}}>
               something <br/>
               something <br/>
               something <br/>
               something <br/>
             </div>
           </Fold>
           <Fold title={'子标题3'} right={<Btn size='xs'>右Node</Btn>}>
             <div style={{textAlign:'center'}}>
               something <br/>
               something <br/>
               something <br/>
               something <br/>
             </div>
           </Fold>
         </Panel>
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
            <div>title</div>
            <div>大面板的标题</div>
            <div>string</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>left</div>
            <div>大面板左侧node</div>
            <div>ReactNode</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>right</div>
            <div>大面板右侧的node</div>
            <div>ReactNode</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>theme</div>
            <div>主题颜色</div>
            <div>色值</div>
            <div>#f28800</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>大面板的内容（一般是小折叠面板，也可以是其他node）</div>
            <div>Panel.Fold</div>
            <div>-</div>
          </li>
        </ul>

        <h3 style={{fontSize:16,paddingLeft:20,marginTop:20}}>Panel.Fold</h3>
        <ul className={style.API}>
          <li className={style.title}>
            <div className={style.param}>参数</div>
            <div className={style.desc}>说明</div>
            <div className={style.type}>类型</div>
            <div className={style.plain}>默认</div>
          </li>
          <li className={style.li}>
            <div>title</div>
            <div>每个折叠面板的标题</div>
            <div>string</div>
            <div>-</div>
          </li>

          <li className={style.li}>
            <div>right</div>
            <div>每个折叠面板头部右侧的node</div>
            <div>ReactNode</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>折叠面板的内容</div>
            <div>ReactNode</div>
            <div>-</div>
          </li>
        </ul>
      </div>
    )
  }
}