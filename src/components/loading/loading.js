/**
 * @author:WangLK5
 * @Date:2019-04-09
 */

import React from 'react';
import Ico from '../ico'
import './loading.scss'

export default class Loading extends React.Component {

  static defaultProps = {
    icon:<Ico type='pilianggengxin' style={{fontSize:18}}/>,
    tip:'...loading...',
    global:false,
    spinning:true,
    children:'',
    size:'15px',
    theme:'green',
    tipShow:true
  }


  render() {
    const {tipShow,tip,theme,spinning,icon,size,children} = this.props;
    return (
      this.props.global
        ?
      <div className='wlk-fixed' style={{display:spinning ? null:'none',color:theme}}>
        <div className='wlk-loading'>{icon}</div>
        <p style={{fontSize:size}}>{tip}</p>
      </div>
        :
      <div style={{position:'relative'}}>
        {children}
        <div className='wlk-main-loading' style={{display:spinning ? null:'none',color:theme}}>
          <div className='wlk-loading'>{icon}</div>
          <p style={{display:tipShow ? null : 'none',fontSize:tipShow}}>{tip}</p>
        </div>
      </div>
    )
  }
}