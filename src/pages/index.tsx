import React from 'react'

import Wbar from "@/pages/Wbar"
import Pie from "@/pages/pie"
import Layout from "@/pages/layout"
import Line from '@/pages/line'
import Map from '@/pages/Map'
import Wpie from '@/pages/Wpie'

export default () => {
  return (
    <>
      <Layout
        renderLeftTop={
          ()=>{
            return <Pie />
          }
        }
        renderLeftBottom={
          ()=>{
            return <Line />
          }
        }
        rendermidInfo={
          ()=>{
            return <div>骨龄检测数量</div>
          }
        }
        renderMidMap={
          ()=>{
            return <Map />
          }
        }
        renderRightTop={
          ()=>{
            return <Wpie />
          }
        }
        renderRightBottom={
          ()=>{
            return <Wbar />
          }
        }
      />
    </>
  )
}
