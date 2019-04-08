import React, { Component } from 'react';
import './App.css';
import Ico from './components/ico';
import Btn from './components/button'
import Rate from './components/rate'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Rate value={4} length={7} theme='#999999' size={50} onRate={(v)=>console.log(v,"最终评分")}/>
      </div>
    );
  }
}

export default App;
