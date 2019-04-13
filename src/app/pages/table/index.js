/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Table from '../../../components/table'

export default class TablePage extends React.Component {
  stylesheet = {
    marginBottom:40,
    marginTop:20,
    paddingLeft: 40,
  }

  columns =[
    {
      title:"Name",
      width:150,
    },
    {
      title:"age",
      width:100,
    },
    {
      title:"addr",
      width:200,
    }
  ]
  data = [
    {name:"wlk",age:24,addr:'北京'},
    {name:'wgc',age:25,addr:'南京'},
    {name:"wlk",age:24,addr:'北京'},
    {name:'wgc',age:25,addr:'南京'},
    {name:"wlk",age:24,addr:'北京'},
    {name:'wgc',age:25,addr:'南京'}
  ]


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Table表格</h3>
          <p>展示规律性数据时，通过表格列出信息。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        {/*主题展示区域*/}
        <div style={this.stylesheet}>
          <Table
            columns={this.columns}
            data={this.data}
            borderStyle='cell'
          />
          <span style={{width:50}}/>
          <Table
            columns={this.columns}
            data={this.data}
          />
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
            <div>columns</div>
            <div>表头</div>
            <div>[{},{}]</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>data</div>
            <div>数据</div>
            <div>[{},{}]</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>title</div>
            <div>表格标题</div>
            <div>string</div>
            <div>标题位置</div>
          </li>
          <li className={style.li}>
            <div>showCap</div>
            <div>是否显示表格标题</div>
            <div>boolean</div>
            <div>false</div>
          </li>
          <li className={style.li}>
            <div>borderStyle</div>
            <div>边框类型，line、cell</div>
            <div>string</div>
            <div>'line'</div>
          </li>
        </ul>
      </div>
    )
  }
}