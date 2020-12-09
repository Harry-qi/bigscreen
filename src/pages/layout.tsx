import React from 'react'
import '@/pages/index.less'

class layout extends React.Component <any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      leftTop : props.renderLeftTop(),
      leftBottom : props.renderLeftBottom(),
      midInfo : props.rendermidInfo(),
      midMap : props.renderMidMap(),
      rightTop : props.renderRightTop(),
      rightBottom : props.renderRightBottom(),
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='left-top '>
          {this.state.leftTop}
        </div>
        <div className='left-bottom'>
          {this.state.leftBottom}
        </div>
        <div className='info ' >
          {this.state.midInfo}
        </div>
        <div className='map'>
          {this.state.midMap}
        </div>
        <div className='right-top ' >
          {this.state.rightTop}
        </div>
        <div className='right-bottom' >
          {this.state.rightBottom}
        </div>
      </div>
    )
  }
}
export default  layout
