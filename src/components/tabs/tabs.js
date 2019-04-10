/**
 * @author:WangLK5
 * @Date:2019-04-09
 */

import React from 'react';
import style from './tabs.module.scss'
import TabPane from './tabPane'

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowKey:props.defaultActiveKey,
      nowTab:''
    }
    this.activeStyle = {
      color:`${props.theme}`,
      border: `1px solid ${props.theme}`,
    }
    this.defaultStyle = {
      fontSize:`${props.size}`,
      margin:`0 ${this.props.gutter}px`
    }
  }
  componentDidMount(){
    this.findTargetTabPane();
  }

  static defaultProps = {
    defaultActiveKey:1,//激活的tab
    size:'16px',//title尺寸
    gutter:5,//选项卡之间的间隔
    theme:'red',//默认主题
    onChange:null,//切换时的回调函数
  }

  //展示对应的TabPane
  findTargetTabPane = (key)=>{
    let activeK = key || this.props.defaultActiveKey;
    let targetItem = this.props.children.filter(item=>{
      return parseInt(item.key,10) === parseInt(activeK,10);
    })
    this.setState({nowTab:targetItem[0]})
  }

  //切换标签页
  changeTab = (key)=>{
    let IntKey = parseInt(key,10);
    this.setState({nowKey: IntKey});
    this.findTargetTabPane(IntKey)
  }

  render() {
    return (
      <div>
        <ul className={style.tabTitle} style={{borderBottom: `1px solid ${this.props.theme}`}}>
          {
            this.props.children.map((item,index)=>{
              return <li key={item.key}
                     onClick={()=>{
                       this.changeTab(item.key);
                       this.props.onChange({key:item.key,tab:item.props.tab});
                     }}
                     className={parseInt(item.key,10) === this.state.nowKey ? style.active : ''}
                     style={
                       Object.assign({},this.defaultStyle, parseInt(item.key,10) === this.state.nowKey ? this.activeStyle : null)
                     }>
                {item.props.tab}
              </li>
            })
          }
        </ul>
        <div className={style.content}>
          {this.state.nowTab}
        </div>
      </div>
    )
  }
}

Tabs.TabPane = TabPane;