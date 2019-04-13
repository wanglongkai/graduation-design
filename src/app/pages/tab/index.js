/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Tab from '../../../components/tabs'


const TabPanel = Tab.TabPane;

export default class TabPage extends React.Component {
  stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
    width:400
  }
  stylesheet2 = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }
  pst
  pstyle = {
    fontSize:16,
    textAlign:'center'
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Tab选项卡</h3>
          <p>为减少空间的占用，tab选项卡进行选项切换的效果是一种非常不错的效果。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        {/*主题展示区域*/}
        <div style={this.stylesheet}>
          <Tab defaultActiveKey={1}>
            <TabPanel key={1} tab='React'>
              <p style={this.pstyle}><a href="https://react.docschina.org/">React学习文档</a></p>
            </TabPanel>
            <TabPanel key={2} tab='Vue'>
              <p style={this.pstyle}><a href="https://cn.vuejs.org/">Vue学习文档</a></p>
            </TabPanel>
            <TabPanel key={3} tab='Angular'>
              <p style={this.pstyle}><a href="https://angularjs.org/">Angular学习文档</a></p>
            </TabPanel>
          </Tab>
        </div>
        <div style={this.stylesheet2}>
          <Tab defaultActiveKey={1} theme='#1890FF' size='20px'>
            <TabPanel key={1} tab='React'>
              <p style={this.pstyle}><a href="https://react.docschina.org/">React学习文档</a></p>
            </TabPanel>
            <TabPanel key={2} tab='Vue'>
              <p style={this.pstyle}><a href="https://cn.vuejs.org/">Vue学习文档</a></p>
            </TabPanel>
            <TabPanel key={3} tab='Angular'>
              <p style={this.pstyle}><a href="https://angularjs.org/">Angular学习文档</a></p>
            </TabPanel>
          </Tab>
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
            <div>defaultActiveKey</div>
            <div>激活的选项卡</div>
            <div>number</div>
            <div>1</div>
          </li>
          <li className={style.li}>
            <div>size</div>
            <div>title尺寸</div>
            <div>string</div>
            <div>'16px'</div>
          </li>
          <li className={style.li}>
            <div>gutter</div>
            <div>选项卡之间的间隔</div>
            <div>number</div>
            <div>15</div>
          </li>
          <li className={style.li}>
            <div>theme</div>
            <div>主题颜色</div>
            <div>色值</div>
            <div>red</div>
          </li>
          <li className={style.li}>
            <div>onChange</div>
            <div>切换tab时的回调</div>
            <div>function:(key,tab)=>{}</div>
            <div>{`()=>{}`}</div>
          </li>
        </ul>
        <h3 style={{fontSize:16,paddingLeft:20,marginTop:20}}>Tab.TabPane</h3>
        <ul className={style.API}>
          <li className={style.title}>
            <div className={style.param}>参数</div>
            <div className={style.desc}>说明</div>
            <div className={style.type}>类型</div>
            <div className={style.plain}>默认</div>
          </li>
          <li className={style.li}>
            <div>key</div>
            <div><span style={{color:'red'}}>必选,</span>Tab切换的关键</div>
            <div>all</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>tab</div>
            <div>tab选项卡的标题</div>
            <div>string</div>
            <div>选项卡</div>
          </li>
          <li className={style.li}>
            <div>children</div>
            <div>tab页的内容</div>
            <div>ReactNode</div>
            <div>该tab页无内容！</div>
          </li>
        </ul>
      </div>
    )
  }
}