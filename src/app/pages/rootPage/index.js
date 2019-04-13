/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
import style from './rootPage.module.scss'
import pic from '../../asset/timg.gif'
import {Button,Icon} from 'antd'


export default class RootPage extends React.Component {



  render() {
    return (
      <div className={style.rootPage}>
        <div className={style.describle}>
          <h1>WangLK-UI</h1>
          <h2>介绍</h2>
          <section>
            随着商业化的趋势，越来越多的产品对更好的用户体验有了进一步的要求，并且对产品的开发周期有比较紧张的要求。
            带着这样的一个目标， 我决定制作一套属于自己的UI组件库，经过一段的项目实践和总结，
            逐步打磨出一个服务于个人或中小企业级的设计体系 WangLK-UI。 基于『简约』和『自然』的设计价值观，
            通过模块化的解决方案，降低冗余的生产成本，让开发者专注于产品的业务需求。
          </section>

          <h2>设计原则</h2>
          <section>
            亲密性、对齐、对比、简约、重复、即使反馈、易用。
          </section>
        </div>
        <div className={style.mianPic}>
          <img src={pic} alt=""/>
          <a href="https://github.com/wanglongkai/graduation-design" target='_blank'>
            <Button><Icon type="github" />gitHub</Button>
          </a>
        </div>
      </div>
    )
  }
}