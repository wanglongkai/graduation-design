import React from 'react'
import css from './index.module.scss'
import Fold from './fold'

export default class Panel extends React.Component {

  static defaultProps = {
    title : null,//大面板的标题
    children: null,//大面板的内容（一般是小折叠面板，也可以是其他node）
    left:null,//大面板左侧node
    right : null,//大面板右侧的node
    theme:'#f28800',//主题
  }

  render() {
    const {title, children, left, right,theme} = this.props

    return(<div className={css.panel}>
      <div className={css.head}>
        <div className={css.left}>
          <div className={css.title} style={{border: `1px solid ${theme}`,color: theme}}>{title}</div>
          {left}
        </div>
        <div className={css.right}>{right}</div>
      </div>
      <div className={css.body} style={{}}>{children}</div>

    </div>)
  }
}
Panel.Fold = Fold;