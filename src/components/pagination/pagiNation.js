/**
 * @author:WangLK5
 * @Date:2019-04-08
 */

import React from 'react';
import Ico from '../ico'
import './pagiNation.scss'

const themeObj = {
  black: "#00",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
  purple: "#9254de"
}

export default class PagiNation extends React.Component {
  constructor(props) {
    super(props);
    this.goPrev = React.createRef();
    this.goNext = React.createRef();
    this.inputRef = React.createRef();

    this.total = props.total;
    this.current = props.current;
    this.state = {
      list:[]
    }

    this.active = {
      color: themeObj[props.theme] ? themeObj[props.theme] : props.theme,
      border: '1px solid '+ (themeObj[props.theme] ? themeObj[props.theme] : props.theme)
    }
  }

  static defaultProps = {
    long:3,//中间预留个数
    total:10,
    pageSize:10,
    current:1,
    showJump:true,
    size:'md',//组件尺寸
    theme:themeObj['yellow'],
    onChange:null,//选择页码后的回调函数
  }

  componentDidMount(){
    this.setHtml()
  }

  //最大页数
  getMaxPage = ()=>{
    let total = this.total;
    let {pageSize} = this.props;
    return Math.ceil(total/pageSize);
  }
  //跳转页面
  toPage = (num)=>{
    if(num !== '' && num <=this.getMaxPage() && num >0){
      this.current = num;
      this.setHtml();
    }
    else{
      console.error("请输入正确的页码");
      return false;
    }
  }
  //上一页
  prevPage = ()=>{
    this.current = parseInt(this.current,10);
    if(this.current -1 <1){return;}
    this.toPage(this.current -1);
  }
  //下一页
  nextPage = ()=>{
    this.current = parseInt(this.current,10);
    if(this.current+1 > this.getMaxPage()){return;}
    this.toPage(this.current+1);
  }
  //上一段
  prevSize = ()=>{
    const {long} = this.props;
    this.current -= long;
    if(this.current <1){
      this.current=1;
    }
    this.setHtml();
  }
  //下一段
  nextSize = ()=>{
    const {long} = this.props;
    const max = this.getMaxPage();
    this.current = this.current + long;
    if(this.current > max){
      this.current = max;
    }
    this.setHtml();
  }

  //设置分页器的列表内容:核心方法
  setHtml = ()=>{
    let {long, onChange} = this.props;
    let current = parseInt(this.current, 10);

    if(long < 3){
      console.error('最小size:3!');
      return;
    }
    let list = [];
    //最大页码数
    let max = parseInt(this.getMaxPage(), 10);

    //如果总的页数小于size,直接显示出来
    if(max <= long){
      for(let i=1;i<=max;i++){
        list.push(i===current ? i+':active' : i);
      }
    }else{
      if(current <= long){
        //1234...10
        for(let i=1;i <= long +1;i++){
          list.push(i === current ? i+':active' : i);
        }
        list.push('next',max);
      }else if(current > long && current <= max-long){
        //1...234...10
        list.push(1,'prev');
        for(let i=current -1;i<long+current-1;i++){
          list.push(i === current ? i+':active' : i);
        }
        list.push('next',max);
      }else{
        //1...78910
        list.push(1,'prev');
        for(let i=max-long;i<max;i++){
          list.push(i === current ? i+':active' : i);
        }
        list.push(max=== current ? max+':active' : max);
      }
    }

    this.setState({
      list: list
    });


    if(parseInt(this.current, 10) === 1){
      this.goPrev.current.style.display='none'
    }
    if(parseInt(this.current, 10) === max){
      this.goNext.current.style.display='none'
    }
    if(parseInt(this.current, 10) !== 1){
      this.goPrev.current.style.display='inline-block'
    }
    if(parseInt(this.current, 10) !== max){
      this.goNext.current.style.display='inline-block'
    }


    onChange({
      current: parseInt(this.current, 10),
      pageSize: this.props.pageSize,
    });
  }


  render() {
    const {size,style,showJump} = this.props;
    const hidden = showJump ? '' : 'hidden'

    return (
      <div className='wlk-main' style={style}>
        <a onClick={this.prevPage} ref={this.goPrev}>上一页</a>
        <ul>
          {
            this.state.list.map((elem,index)=>{
              elem = elem.toString();
              index = +new Date() + index;
              if(elem.indexOf('active') !== -1){
                let num = elem.replace(':active','');
                return <li key={index} className={`size-${size}`} onClick={()=>this.toPage(num)} style={this.active}>{num}</li>
              }else if(elem.indexOf('prev') !== -1){
                return <li key={index} className={`size-${size}`} onClick={this.prevSize}><Ico type='qita'/></li>
              }else if(elem.indexOf('next') !== -1){
                return <li key={index} className={`size-${size}`} onClick={this.nextSize}><Ico type='qita'/></li>
              }else{
                return <li key={index} className={`size-${size}`} onClick={()=>this.toPage(elem)}>{elem}</li>
              }
            })
          }
        </ul>
        <a onClick={this.nextPage} ref={this.goNext}>下一页</a>
        <span className={hidden}>跳至</span>
        <input type="text" className={`size-${size} ${hidden}`} ref={this.inputRef}
               onBlur={()=>{this.inputRef.current.value='';}}
               onKeyPress={(e)=>{
                 let ev = window.event || e;
                 if(ev.keyCode === 13){
                   this.toPage(parseInt(this.inputRef.current.value))
                 }
               }}/>
        <span className={hidden}>页</span>
      </div>
    )
  }
}