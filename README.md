# N2: a canvas library which providing 2d draw for node.js

## Installing

```
npm install f2-nodejs

```

## 简介

本版本是基於 @antvis/F2 fork 出來，針對 [node-canvas](https://github.com/Automattic/node-canvas) 提供的後端圖表解決方案


### API
基於 f2 API架構，針對F2的API做以下的閹割
* Chart 不支援傳入 id ， 只能夠過 el 傳入 canvas 對象
* 不支援  F2.Global.pixelRatio
* 不支援 guide 輔助元素 html 的部分 及 animate 動畫


f2 API 可參考 [API详情](https://antv.alipay.com/zh-cn/f2/3.x/api/index.html)
