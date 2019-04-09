/**
 * @author:WangLK5
 * @Date:2019-04-09
 */

import React from 'react';
import Ico from '../ico'
import style from './popConfirm.module.scss';

export default class PopConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show:false}
    this.pleace = {
      top:{
        transform:'translate(-50%,-100%)',
        top:0,
        left:0,
      },
      bottom:{
        transform:'translate(50%,100%)',
        bottom:-5,
        right:0,
      },
      left:{
        transform:'translate(-100%,-50%)',
        top:'50%',
        left:-5,
      },
      right:{
        transform:'translate(100%,-50%)',
        top:'50%',
        right:-5,
      }
    }
  }

  static defaultProps = {
    theme:'blue',
    placement:'right',
    title:"are you sure do this action ?",
    okText:'Yes',
    cancelText:'No',
    onConfirm:()=>console.log('确定'),
    children:''
  }


  render() {
    const {placement,title,okText,cancelText,onConfirm,children,theme} = this.props;
    return (
      <span style={{position:'relative'}} onClick={()=>{this.setState({show:true})}}>
        {children}
        <div className={style["wlk-main-pop"]}
             style={Object.assign({},{display:this.state.show ? 'inline-block' :'none'},this.pleace[placement])}>

            <div className={style.title}><Ico type='shuomingtubiao' style={{color:"#fadb14"}}/> {title}</div>
            <div className={style.button}>
              <button className={style.buttonOk} style={{backgroundColor:theme}}
                      onClick={(e)=>{
                        e.stopPropagation();
                        this.setState({show:false},()=>{onConfirm()})
                      }}
              >
                {okText}
              </button>
              <button className={style.buttonCal}
                      onClick={(e)=>{
                        e.stopPropagation();
                        this.setState({show:false})
                      }}
              >
                {cancelText}
              </button>
            </div>
          <i className={style[`icon-${placement}`]}/>
        </div>
      </span>
    )
  }
}