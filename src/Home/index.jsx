/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav2 from './Nav2';
import Banner0 from './Banner0';
import Content13 from './Content13';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer1 from './Footer1';

import {
  Nav22DataSource,
  Banner01DataSource,
  Content130DataSource,
  Content131DataSource,
  Content11DataSource,
  Content20DataSource,
  Content10DataSource,
  Content30DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav2
        id="Nav2_2"
        key="Nav2_2"
        dataSource={Nav22DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Inicio"
        key="Inicio"
        dataSource={Banner01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Nosotros"
        key="Nosotros"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="¿Cómo Funciona?"
        key="¿Cómo Funciona?"
        dataSource={Content131DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content1_1"
        key="Content1_1"
        dataSource={Content11DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content2
        id="Content2_0"
        key="Content2_0"
        dataSource={Content20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content1_0"
        key="Content1_0"
        dataSource={Content10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Ventajas"
        key="Ventajas"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
