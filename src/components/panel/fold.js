import React from 'react'
import Ico from '../ico'
import css from './fold.module.scss'

export default class Panel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fold: !!props.fold, // 默认不折叠
        }
    }

    static defaultProps = {
        title : null,//每个折叠面板的标题
        children: null,//折叠面板的内容
        right : null,//每个折叠面板头部右侧的node
    }

    //切换折叠
    onFold = () => {
        this.setState(old => ({fold: !old.fold}))
    }


    render() {
        const {title, children, right} = this.props
        const {fold} = this.state

        return (<div className={css.fold} style={this.props.style}>

            <div className={css.head}>
                <div className={css.title}>{title}</div>
                <div className={css.right}>
                    <span>{right}</span>
                    <Ico className={css.arrow} type={fold ? "arrow-down" : "arrow-up"} onClick={this.onFold}/>
                </div>

            </div>

            {fold ? null : <div className={css.body}>{children}</div>}
        </div>)
    }


}
