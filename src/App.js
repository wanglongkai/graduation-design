import React, { Component } from 'react';
import './App.css';
import Ico from './components/ico';
import Btn from './components/button'
import Rate from './components/rate'
import Page from './components/pagination'
import message from './components/message'
import Badge from './components/badge'
import Loading from './components/loading'
import PopConfirm from './components/popConfirm'
import Tabs from './components/tabs'
import BackTop from './components/backTop'
import Table from './components/table'


const TabPane = Tabs.TabPane;




class App extends Component {



  render() {
    const columns =[
      {
        title:"Name",
        width:150,
      },
      {
        title:"age",
        width:100,
      },
      {
        title:"addr",
        width:200,
      }
    ]
    const data = [
      {name:"wlk",age:24,addr:'北京'},
      {name:'wgc',age:25,addr:'南京'},
      {name:"wlk",age:24,addr:'北京'},
      {name:'wgc',age:25,addr:'南京'},
      {name:"wlk",age:24,addr:'北京'},
      {name:'wgc',age:25,addr:'南京'}
    ]
    return (
      <div className="App" style={{marginTop:40}}>
        <Table
          columns={columns}
          data={data}
          title="人员管理"
          showCap={true}
          borderStyle='cell'
        />
      </div>
    );
  }
}

export default App;
