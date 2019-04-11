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
import PhotoLooker from './components/photoLooker'
import Carousel from './components/carousel'
import pic1 from "./asset/1.jpg"
import pic2 from "./asset/2.jpg"
import pic3 from "./asset/3.jpg"
import pic4 from "./asset/4.jpg"
import pic5 from "./asset/5.jpg"
import Modal from './components/modal'
import Panel from './components/panel'

const Item = Panel.Fold;
const TabPane = Tabs.TabPane;




class App extends Component {

  render() {

    return (
      <div className="App">
        <Panel left={"left"} title={'title'} right={'right'}>
          <Item title={'itemTitle1'}>
            111111
          </Item>
          <Item title={'itemTitle2'} right={'right'}>
            222222
          </Item>
        </Panel>
      </div>
    );
  }
}

export default App;
