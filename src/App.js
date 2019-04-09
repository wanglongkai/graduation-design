import React, { Component } from 'react';
import './App.css';
import Ico from './components/ico';
import Btn from './components/button'
import Rate from './components/rate'
import Page from './components/pagination'
import message from './components/message'
import Badge from './components/badge'
import Loading from './components/loading'
import Tabs from './components/tabs'
import PopConfirm from './components/popConfirm'
class App extends Component {



  render() {
    return (
      <div className="App" style={{padding:100}}>
        <PopConfirm theme='red'
                    placement='bottom'
                    title='测试一下'
                    okText='确定'
                    show={true}
                    onConfirm={()=>alert(111)}><button>ok</button></PopConfirm>
      </div>
    );
  }
}

export default App;
