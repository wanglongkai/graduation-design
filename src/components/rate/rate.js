/**
 * @author:WangLK5
 * @Date:2019-04-08
 */

import React from 'react';

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

const starsStyle = {
  position: 'absolute',
  display: 'inline-block',
  top:0,
  left:0,
  width:0,
  overflow:'hidden'
}

export default class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef()
    this.state = {
      stars:Array(+props.length).fill(props.shape),
      hollow:Array(+props.length).fill(props.hollowShape),
      mouseStyle:{},
      score:"0.00",
      canOver:true
    }
    this.basicStyle = {
      color:themeObj[this.props.theme] ? themeObj[this.props.theme] : this.props.theme,
      fontSize:this.props.size ? this.props.size : ""
    }
  }

  //可选的所有props
  static defaultProps = {
    children:'评分组件：',
    value:0,
    length:5,
    theme:themeObj['yellow'],
    onRate:()=>{},
    readOnly:false,
    shape:"★",
    hollowShape:"☆"
  }

  //hover事件，选择分数
  mouseHOver = (e)=>{
    if(this.props.readOnly){
      return false;
    }
    let validLength= e.clientX - this.divRef.current.getBoundingClientRect().left;
    let allLength = this.divRef.current.getBoundingClientRect().width;
    let score = (this.props.length*(validLength/allLength)).toFixed(2);
    this.setState({
      mouseStyle:{ width: Number.parseInt(validLength,10)},
      score
    })

  }

  //点击事件，确定评分
  mouseClick = (e)=>{
    if(this.props.readOnly){
      return false;
    }
    let validLength= e.clientX - this.divRef.current.getBoundingClientRect().left;
    let allLength = this.divRef.current.getBoundingClientRect().width;
    let score = (this.props.length*(validLength/allLength)).toFixed(2);
    this.setState({
      mouseStyle:{ width: validLength},
      score,
      canOver:false
    })
    this.props.onRate && this.props.onRate(score);
  }

  //传入value值时，初始化渲染
  componentDidMount(){
    let allLength = this.divRef.current.getBoundingClientRect().width;
    let width = allLength*(this.props.value.toFixed(2)/this.props.length)
    this.setState({
      score:this.props.value.toFixed(2),
      mouseStyle:{ width: width},
    })
  }

  render() {
    return (
      <div style={this.basicStyle}>
        {this.props.children}

        <div style={{display:'inline-block',position:'relative'}}
             ref={this.divRef}
             onMouseOver={this.state.canOver ? (e)=>{this.mouseHOver(e)} : null}
             onClick={(e)=>{this.mouseClick(e)}}
        >
            {
              this.state.hollow.map((value,index)=>{
                return (<span key={index} >{value}</span>)
              })
            }

          <div style={Object.assign({},starsStyle,this.state.mouseStyle)}>
            {
              this.state.stars.map((value,index)=>{
                return (<span key={index}>{value}</span>)
              })
            }
          </div>

        </div>

        <span style={{marginLeft:6}}>{this.state.score}</span>
      </div>
    )
  }
}