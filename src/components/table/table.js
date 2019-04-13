/**
 * @author:WangLK5
 * @Date:2019-04-10
 */

import React from 'react';
import style from './table.module.scss'

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.cellBorder = {
      'border-right': `1px solid #e8e8e8`
    }
  }

  static defaultProps = {
    columns:'',//表头
    data:'',//数据
    title:'标题位置',
    showCap:false,//展示标题
    borderStyle:'line'//边框类型
  }

  //对象遍历成表格
  objectToTb = (item,index)=>{
    let list = []
    for(let it in item){
      if(item.hasOwnProperty(it)){
        list.push(<td style={this.props.borderStyle==='cell' ? this.cellBorder :null}
                      key={`${index}-${item[it]}`}>{item[it]}</td>)
      }
    }
    return list
  }


  render() {
    const {showCap,borderStyle} = this.props;
    return (
      <div style={{display:'inline-block',textAlign:'center'}}>
        <table>
          {
            showCap ? <caption className={style.caption}>{this.props.title}</caption> : null
          }
          <thead>
            <tr>
              {this.props.columns.map((item,index)=>{
                return <th key={index}
                           style={Object.assign({},{width:`${item.width}px`},borderStyle==='cell' ? this.cellBorder :null)}>
                  {item.title}
                </th>
              })}
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map((item,index)=>{
                return <tr key={index}>
                  {this.objectToTb(item,index)}
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}