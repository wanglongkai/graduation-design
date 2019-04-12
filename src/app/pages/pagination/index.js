/**
 * @author:WangLK5
 * @Date:2019-04-12
 */

import React from 'react';
import style from "../index.module.scss"
import Btn from "../../../components/button"
import Pagination from '../../../components/pagination'

export default class PaginationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  stylesheet = {
    marginBottom:20,
    marginTop:20,
    paddingLeft: 40,
  }


  render() {
    return (
      <div style={{fontSize:12}}>

        <div className={style.head}>
          <h3>Pagination分页器</h3>
          <p>在展示大量列表数据时，通过分页器达到控制每次展示数量的效果</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        <div style={this.stylesheet}>
          <Pagination total={100} current={4} showJump={false}/>
          <br/><br/>
          <Pagination total={200} current={8} theme='red'/>
          <br/><br/>
          <Pagination total={200} current={8} theme='red' size='lg'/>
          <br/><br/>
          <Pagination total={200} current={8} theme='blue' long={5}/>
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
            <div>theme</div>
            <div>主题颜色</div>
            <div>色值</div>
            <div>'yellow'</div>
          </li>
          <li className={style.li}>
            <div>size</div>
            <div>分页器的大小；lg md sm</div>
            <div>string</div>
            <div>'md'</div>
          </li>
          <li className={style.li}>
            <div>style</div>
            <div>行内样式</div>
            <div>CSSproperties</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>showJump</div>
            <div>是否显示跳页</div>
            <div>boolean</div>
            <div>true</div>
          </li>
          <li className={style.li}>
            <div>long</div>
            <div>中间预留个数</div>
            <div>number</div>
            <div>3</div>
          </li>
          <li className={style.li}>
            <div>current</div>
            <div>当前页</div>
            <div>number</div>
            <div>1</div>
          </li>
          <li className={style.li}>
            <div>pageSize</div>
            <div>每页显示的数目</div>
            <div>number</div>
            <div>15</div>
          </li>
          <li className={style.li}>
            <div>total</div>
            <div>总条目数</div>
            <div>number</div>
            <div>10</div>
          </li>
          <li className={style.li}>
            <div>onChange</div>
            <div>改变页码的回调</div>
            <div>funtion:(current,pageSize)=>{}</div>
            <div>{`()=>{}`}</div>
          </li>
        </ul>
      </div>
    )
  }
}