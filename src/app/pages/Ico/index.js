/**
 * @author:WangLK5
 * @Date:2019-04-11
 */

import React from 'react';
import style from './ico.module.scss'
import Icon from '../../../components/ico/index'

export default class IcoPage extends React.Component {
  constructor(props) {
    super(props);
    this.icos = ['toolbar-tool-customer','change','yemian','hetongshenpi',
    'toolbar-operation-contract','jinru','sort','arrow-down','arrow-up','jianhao',
    'jiantou-xia','hui','xiayibu','pilianggengxin','baocun','shou','hebing',
      'chaifen','xiangxia','fuzhixinzeng','xiangshang','shanchu','bianji','jianqu',
      'xingongnengditu','xitongtongzhi','wodeshenpi','guanbi1','youyidianxuan',
      'zuoyi','dankuangguanbi','youyi','zuoyidianxuan','shengxu','bangzhu','xinjian',
      'jiangxu','sousuo','guanbi','gengduo','tuichuxitong','shouhui','shezhi',
      'guanliyuanshezhi','forecast','baobiao','shouye','arrow-left','arrow-right',
      'shuomingtubiao','huifu','hui1','shou1','gu','ti','tianjia','zhongzhishenpi',
      'chakanliucheng','daishenpi','shenpitongguo','beibohui','jiantou-shang','weitijiao',
      'shenqingpici','weitianxie','zhongbiao','suoding','qita','diubiao','jiesuo','gu1',
      'ti1','zhaotoubiaoguanli','houtaiguanli','zhankai','shouqi','fanhuidingbu','daoru',
      'daochu','tuihuichulixiugai','ganyu'
    ]
  }

  create = ()=>{
    return this.icos.map((ico,index)=>{
      return  <li className={style.item} key={index}>
        <Icon type={ico} className={style.icon}/>
        <div className={style.typeName}>{ico}</div>
      </li>
    })
  }

  render() {
    return (
      <div style={{fontSize:12}}>
        <div className={style.teach}>
          <h3>Ico图标</h3>
          <p>语义化的矢量图形。</p>
        </div>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>

        <ul>
          {this.create()}
        </ul>

        <div style={{clear:'both' ,borderTop:'1px solid #e8e8e8'}}/>
        <h3 style={{fontSize:18,paddingLeft:20,fontWeight:'lighter'}}>API</h3>
        <ul className={style.API}>
          <li className={style.title}>
            <div className={style.param}>参数</div>
            <div className={style.desc}>说明</div>
            <div className={style.type}>类型</div>
            <div className={style.plain}>默认</div>
          </li>
          <li className={style.li}>
            <div>type</div>
            <div>图标类型。遵循图标的命名规范</div>
            <div>string</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>style</div>
            <div>设置图标的样式，例如 fontSize 和 color</div>
            <div>CSSProperties</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>className</div>
            <div>自定义类名，效果等同于 style </div>
            <div>string</div>
            <div>-</div>
          </li>
          <li className={style.li}>
            <div>onClick</div>
            <div>点击事件，</div>
            <div>{`(e)=>{}`}</div>
            <div>{`()=>{}`}</div>
          </li>
        </ul>
      </div>
    )
  }
}