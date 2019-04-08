import React from 'react';
import './style.css'

export default class Button extends React.Component {

    onClick = () => {
        //执行点击事件前，确定是否是再加载中状态
        const {
            loading = false, onClick = () => {},
        } = this.props
        if (!loading) {
            onClick()
        }
    }

    render() {
        const {
            children = '',
            type = 'primary',
            outline = false,
            ghost = false,
            icon = null,
            ricon = null,
            size = null,
            disable = false,
            className = '',
            style = {},
            loading = false
        } = this.props;

        if (typeof children === 'string') {
            return (<button
                className={`btn ${outline ? `btn-outline-${type}` : `btn-${type}`} ${ghost ? 'ghost' : ''} ${size ? `btn-${size}` : ''} ${className} `}
                style={style}
                disabled={disable}
                onClick={this.onClick}
            >
                {icon ? <i className={`crmico crmico-${icon}`}/> : null}
                {children}
                {ricon ? <i className={`crmico crmico-${ricon}`}/> : null}
                {loading ? <span className="loading"><i className="crmico crmico-pilianggengxin"/></span> : null}
            </button>)
        } else if (typeof children === 'object') {
            return children
        } else {
            return <button>未知按钮</button>
        }
    }
}