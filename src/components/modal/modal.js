/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
import style from './modal.module.scss';

export default class Modal extends React.Component {

  static defaultProps = {
    theme:'#2691E7',//主题颜色
    visible : true,//是否显示modal
    title:'modal-title',
    onOk:null,//确定按钮回调
    onCancel:null,//取消回调
    okText:'Yes',//确定按钮文案
    cancelText: 'No',//取消按钮文案
    children:<p style={{color:'red'}}>this position is a pleace of your node.</p>
  }



  render() {
    const {visible,children,okText,cancelText,theme,title,onCancel,onOk} = this.props;
    return (
      <div className={style['wlk-modal-main']} style={{display:visible?null:'none'}}>
        <div className={style.mainBox}>
          <div className={style.title}>{title}</div>
          <div className={style.content}>
            {children}
          </div>
          <div className={style.buttonDiv}>
            <button className={style.yes} style={{ backgroundColor:theme,border:`1px solid ${theme}`}} onClick={onOk}>
              {okText}
            </button>
            <button className={style.no} style={{border:`1px solid ${theme}`}} onClick={onCancel}>
              {cancelText}
            </button>
          </div>
          <span onClick={onCancel}>×</span>
        </div>
      </div>
    )
  }
}