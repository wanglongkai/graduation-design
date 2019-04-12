/**
 * @author:WangLK5
 * @Date:2019-04-09
 */

import React from 'react';
import style from  './badge.module.scss'

export default class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.local = {
      right: -props.offset[0],
      top:-props.offset[1],
      backgroundColor:props.color
    }
  }

  static defaultProps = {
    count:0,
    over:99,
    color:'red',
    children:null,
    offset:[8,8]
  }


  render() {
    const {count,over} = this.props;
    return (
      <div className={style['wlk-badge']}>
        {this.props.children}
        <span className={style['wlk-num']} style={this.local}>{count>over ? `${over}+` : count}</span>
      </div>
    )
  }
}