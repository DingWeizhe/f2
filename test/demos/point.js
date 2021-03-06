
const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

const F2 = require('../../index');

const data = [
  { time: '2016-08-08 00:00:00', tem: 10 },
  { time: '2016-08-08 00:10:00', tem: 22 },
  { time: '2016-08-08 00:30:00', tem: 20 },
  { time: '2016-08-09 00:35:00', tem: 26 },
  { time: '2016-08-09 01:00:00', tem: 20 },
  { time: '2016-08-09 01:20:00', tem: 26 },
  { time: '2016-08-10 01:40:00', tem: 28 },
  { time: '2016-08-10 02:00:00', tem: 20 },
  { time: '2016-08-10 02:20:00', tem: 28 }
];
const chart = new F2.Chart({
  el: canvas,
  pixelRatio: 2
});

const defs = {
  time: {
    type: 'timeCat',
    mask: 'MM／DD',
    tickCount: 3
  },
  tem: {
    tickCount: 5,
    min: 0
  }
};
// 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
chart.axis('tem', {
  label: {
    fontSize: 14
  }
});
chart.axis('time', {
  label: {
    fontSize: 14
  }
});

chart.source(data, defs);
chart.point().position('time*tem').color('red');
chart.render();
