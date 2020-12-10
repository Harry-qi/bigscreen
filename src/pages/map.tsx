import React, { Component } from 'react'

import api from "@/pages/api"
import  * as echarts  from 'echarts'


class Map extends Component {
  componentDidMount() {
    api.getMapJson().then((jsonData)=>{
      echarts.registerMap('ZJ', jsonData)
      const myChart = echarts.init(document.getElementById('main') as HTMLElement)
      const op = {
        visualMap: {
          show:false,
          min: 800,
          max: 50000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        geo: {
          show: true,
          map: 'ZJ',
          'ZJ' : '浙江省',
          itemStyle: {
            shadowBlur:10,
            shadowOffsetX:10,
            shadowOffsetY:0
          },
        },
        series: [
          {
            type: 'map',
            map : 'ZJ', // 自定义扩展图表类型
            zoom:1,
            label:{
              show:true
            },
            data: [
              {name: '杭州市', value: 20057},
              {name: '绍兴市', value: 100},
            ],
            // 自定义名称映射
            nameMap: {
              '杭州市': '杭州市',
              '绍兴市': '绍兴市',
            }
          }
        ]
      }
      myChart.setOption(op)
    })
  }

  render() {
    return (
      <div id="main" style={{ width: '100%', height: '100%' }} />
    )
  }
}
export  default  Map
