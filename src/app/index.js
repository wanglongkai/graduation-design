/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
import './App.css'

import Nav from './components/nav'
import Top from './components/top'
import Pages from './pages'



export default class WlkGraduationAPP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className='App'>
        <div className='nav'>
          <Nav/>
        </div>
        <div className='main'>
          <div className='top'>
            <Top/>
          </div>
          <div className='pages'>
            <Pages/>
          </div>
        </div>
      </div>
    )
  }
}