import React from "react"
import { Wcontainer, Wline } from '@alicloud/cloud-charts'

const data = [
  {
    "name":"机房A",
    "data":[[1483372800000,4018],[1483459200000,6023],[1483545600000,9022],[1483632000000,6514],[1483718400000,4854],[1483804800000,3714],[1483891200000,1592],[1483977600000,4092]]
  }
]

const options = {
  padding: [40, 5, 24, 46],
  xAxis: {
    type: 'time',
    mask: 'YYYY-MM-DD'
  },
  colors: ['#00FFFF'],
  symbol: true,
  area: true,
  stack: true,
  areaColors: ['l(180) 0:#00FFFF 1:#00FFFF00']
}

class Line extends React.Component<any,any>{
  render(){
    return (
      <Wcontainer className="demos">
        <Wline height="300" config={options} data={data}/>
      </Wcontainer>
    )
  }
}

export default Line
