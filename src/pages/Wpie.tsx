import React from 'react'
import { Wcontainer, Wpie } from '@alicloud/cloud-charts'

const data = [
  {
    "name": "浏览器占比",
    "data": [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }
]

const options = {
  cycle: true,
}

class pie extends React.Component{
  render(){
    return (
      <Wcontainer className="demos">
        <Wpie height="300" config={options} data={data} />
      </Wcontainer>
    )
  }
}

export default pie
