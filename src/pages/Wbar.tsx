import React from "react"
import { Wcontainer, Wbar } from '@alicloud/cloud-charts'

const data = [
  {
    name: '柱1',
    data: [
      ['一', 59],
      ['二', 23],
      ['三', 19],
      ['四', 27],
    ],
  }
]

const options = {
  padding: [40, 5, 24, 29],
  column: false,
  label: {
    // 默认为 'top'，标签显示在柱子上侧
    // position: 'bottom',
    // 正值向上偏移，负值向下偏移
    // offset: 10,
  },
  zoom: true,
}

class Bar extends React.Component <any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      options,
      data
    }
  }

  render() {
    return (
      <Wcontainer className="demos">
        <Wbar height="300" config={this.state.options} data={this.state.data} />
      </Wcontainer>
    )
  }
}

export default Bar
