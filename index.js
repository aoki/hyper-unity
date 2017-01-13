'use strict';

const foregroundColor = '#eff0eb';
const backgroundColor = '#282a36';
const red = '#ff5c57';
const green = '#5af78e';
const yellow = '#f3f99d';
const blue = '#57c7ff';
const magenta = '#ff6ac1';
const cyan = '#9aedfe';
const colors = {
  black: backgroundColor,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white: '#f1f1f0',
  lightBlack: '#686868',
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: foregroundColor
};

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: '#222430',
  cursorColor: '#97979b',
  colors: colors,
  css: `
    ${config.css}
    .hyperterm_main { border: none; }
    .tab_tab { border: none; }
    .tabs_borderShim { border: none; }
    .tab_active span.tab_textInner span {
      border-bottom: solid 1px #4EDCBD;
      transition: all 1s;
    }
    .splitpane_divider {
      background-color: #393B47 !important;
    }
    .tab_textInner>span {
      transition: all 1s;
    }
    `
});
