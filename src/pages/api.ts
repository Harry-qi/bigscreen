import request from "umi-request"

export default {
  getLineData(){
    return  request.get("https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json")
  },
  getMapJson(){
    return  request.get("https://geo.datav.aliyun.com/areas_v2/bound/330000_full.json")
  }
}
