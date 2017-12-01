const expect = require('chai').expect;
const Guide = require('../../../src/guide/index');

const Scale = require('../../../src/scale/');
const Coord = require('../../../src/coord/');
const Plot = require('../../../src/chart/plot');

const plot = new Plot({
  start: {
    x: 50,
    y: 50
  },
  end: {
    x: 400,
    y: 400
  }
});

const coord = new Coord.Rect({
  plot
});

const circleCoord = new Coord.Circle({
  plot
});

const div = document.createElement('div');
document.body.appendChild(div);

const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
div.appendChild(canvas);

const xScale = new Scale.cat({
  values: [ '一月', '二月', '三月', '四月', '五月' ]
});

const yScale = new Scale.linear({
  min: 0,
  max: 1200
});

describe('guide test', function() {

  it('Base class method: parsePoint(coord, point)', function() {
    const point = [ '三月', 600 ];
    const cfg = {
      xScale,
      yScale
    };
    const guide = new Guide(cfg);

    const result = guide.parsePoint(coord, point);
    expect(result.x).to.be.equal(225);
    expect(result.y).to.be.equal(225);
  });

  it('Base class method: paint()', function() {
    const guide = new Guide();
    expect(guide.paint()).to.be.equal(undefined);
  });

  it('guide text', function() {
    const text = new Guide.Text({
      xScale,
      yScale,
      text: '(一月，200)',
      position: [ '一月', 200 ]
    });
    text.paint(coord, canvas);
    text.position = [ '五月', 1000 ];
    text.text = '(五月,1000)';
    text.paint(coord, canvas);
  });

  it('guide rect', function() {
    const rect = new Guide.Rect({
      xScale,
      yScale,
      start: [ '一月', 200 ],
      end: [ '五月', 1000 ],
      cfg: {
        fillStyle: 'red',
        opacity: 0.2
      }
    });
    rect.paint(coord, canvas);
  });

  it('guide line', function() {
    const line = new Guide.Line({
      xScale,
      yScale,
      start: [ '一月', 200 ],
      end: [ '五月', 1000 ],
      cfg: {
        strokeStyle: 'red',
        lineWidth: 1
      }
    });
    line.paint(coord, canvas);
  });

  it('arc', function() {
    const arc = new Guide.Arc({
      xScale,
      yScale,
      start: [ 0, 1200 ],
      end: [ 2.999, 1200 ],
      cfg: {
        strokeStyle: 'blue',
        lineWidth: 10
      }
    });
    arc.paint(circleCoord, canvas);
  });

  it('arc, yScale is undefined.', function() {
    const arc = new Guide.Arc({
      xScale,
      start: [ 0, 1200 ],
      end: [ 2.999, 1200 ],
      cfg: {
        strokeStyle: 'yellow',
        lineWidth: 8
      }
    });

    arc.paint(circleCoord, canvas);

  });

  it('arc, xScale and yScale are undefined.', function() {
    const arc = new Guide.Arc({
      start: [ 0, 1200 ],
      end: [ 2.999, 1200 ],
      cfg: {
        strokeStyle: 'pink',
        lineWidth: 4
      }
    });

    arc.paint(circleCoord, canvas);
  });

  it('clear', function() {
    canvas.getContext('2d').clearRect(0, 0, 500, 500);
  });

  it('min,max,medium', function() {
    new Guide.Text({
      xScale,
      yScale,
      text: 'min-min',
      position: [ 'min', 'min' ]
    }).paint(coord, canvas);

    new Guide.Text({
      xScale,
      yScale,
      text: 'min-max',
      position: [ 'min', 'max' ]
    }).paint(coord, canvas);

    new Guide.Text({
      xScale,
      yScale,
      text: 'max-max',
      position: [ 'max', 'max' ]
    }).paint(coord, canvas);

    new Guide.Text({
      xScale,
      yScale,
      text: 'medium-max',
      position: [ 'medium', 'max' ]
    }).paint(coord, canvas);

    new Guide.Text({
      xScale,
      yScale,
      text: 'max-min',
      position: [ 'max', 'min' ]
    }).paint(coord, canvas);
  });

  it('clear', function() {
    canvas.getContext('2d').clearRect(0, 0, 500, 500);
  });
});

