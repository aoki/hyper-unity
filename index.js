'use strict';
exports.decorateConfig = config => Object.assign({}, config, {
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
