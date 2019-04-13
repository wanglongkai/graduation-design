/**
 * @author:WangLK5
 * @Date:2019-04-09
 */

import React from 'react';

export default class TabPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  static defaultProps = {
    tab:'选项卡',
    children:'该tab页无内容！'
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}