import React, { Component } from 'react';
import './App.css';
import Ico from './components/ico';
import Btn from './components/button'
import Rate from './components/rate'
import Page from './components/pagination'
import message from './components/message'

class App extends Component {

  say = ()=>{
    console.log('点击')
    message.danger("成功信息！",5)
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.say}>222</div>
      </div>
    );
  }
}

export default App;
