/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
import { Link } from "react-router-dom"
import Logo from  '../../asset/2.PNG'
import { Menu, Icon} from 'antd';
import menuConfig from './menuConfig'

const SubMenu = Menu.SubMenu;

export default class Nav extends React.Component {

  //渲染Menu
  renderMenuTree = (data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={<span><Icon type={item.icon} /><span>{item.title}</span></span>} key={item.key}>
            {this.renderMenuTree(item.children)}
          </SubMenu>
        )
      }else{
        return <Menu.Item key={item.key}>
          <Link to={item.key}>{ item.icon ? <Icon type={item.icon} /> : null}{item.title}</Link>
        </Menu.Item>
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={Logo} alt="LOGO" style={{width:'100%',height:'100px'}}/>
        </div>
          <Menu theme='light' mode="inline">
            {this.renderMenuTree(menuConfig)}
          </Menu>
      </div>
    )
  }
}