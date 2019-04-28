/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
// import {BrowserRouter,Route,Switch} from "react-router-dom";
import {HashRouter,Route,Switch} from "react-router-dom";
import './App.css'
import Nav from './components/nav'
import Top from './components/top'

//自定义组件库
import Home from "./pages/rootPage"
import IcoPage from "./pages/Ico"
import Rate from "./pages/rate"
import BtnPage from './pages/button'
import BadgePage from './pages/badge'
import BackTop from  './pages/backtop'
import Carousel from  './pages/carousel'
import Message from  './pages/message'
import Modal from  './pages/modal'
import Pagination from  './pages/pagination'
import Panel from  './pages/panel'
import PhotoLooker from  './pages/photoLooker'
import PopConfirm from  './pages/popConfirm'
import Spin from  './pages/spin'
import Tab from  './pages/tab'
import Table from  './pages/table'




export default class WlkGraduationAPP extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className='App'>
          <div className='nav'><Nav/></div>
          <div className='main'>
            <div className='top'><Top/></div>
            <div className='pages'>
                <Switch>
                  <Route exact path="/" component={(props) => <Home {...props}/>}/>
                  <Route exact path="/common/ico" component={(props) => <IcoPage {...props}/>}/>
                  <Route exact path="/common/btn" component={(props) => <BtnPage {...props}/>}/>
                  <Route exact path="/common/badge" component={(props) => <BadgePage {...props}/>}/>
                  <Route exact path="/show/rate" component={(props) => <Rate {...props}/>}/>
                  <Route exact path="/effect/backtop" component={(props) => <BackTop {...props}/>}/>
                  <Route exact path="/show/carousel" component={(props) => <Carousel {...props}/>}/>
                  <Route exact path="/effect/message" component={(props) => <Message {...props}/>}/>
                  <Route exact path="/show/modal" component={(props) => <Modal {...props}/>}/>
                  <Route exact path="/show/pagination" component={(props) => <Pagination {...props}/>}/>
                  <Route exact path="/show/panel" component={(props) => <Panel {...props}/>}/>
                  <Route exact path="/show/photolooker" component={(props) => <PhotoLooker {...props}/>}/>
                  <Route exact path="/effect/popconfirm" component={(props) => <PopConfirm {...props}/>}/>
                  <Route exact path="/effect/loading" component={(props) => <Spin {...props}/>}/>
                  <Route exact path="/show/tabs" component={(props) => <Tab {...props}/>}/>
                  <Route exact path="/show/table" component={(props) => <Table {...props}/>}/>
                </Switch>
            </div>
          </div>
          <div className='bottomLine'> </div>
        </div>
      </HashRouter>
    )
  }
}