import React, { Component } from 'react'
import { Layout, Menu, Icon, LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"
import ConditionQuery from "./components/logquery/conditionquery"
import RealTion from "./components/logquery/realtime"
import Statistics from "./components/logstatistics/statistics/statistics"
import Abnormal from "./components/logstatistics/abnormal/abnormal"
import SlowRequest from "./components/logstatistics/slowrequest/slowrequest"
import Most from "./components/logstatistics/most/most"
import SetWarning from "./components/warning/setWarning"
import RecordWarning from "./components/warning/recordWarning"
import InformWarning from "./components/warning/informWarning"
import Configure from "./components/configure/configure"
import WarnDetail from "./components/warning/warningDetails/warnDetail"
import CPUDDetail from "./components/warning/warningDetails/CPUDetail"
import Analyze from "./components/analyze/analyze"
import Monito from "./components/analyze/monito"
import { Provider } from "react-redux";
import store from "./store"
import 'antd/dist/antd.css';
moment.locale('zh-cn')
const {
  Sider
} = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  constructor(props) {
    super(props);
    if (!sessionStorage.getItem('name')) {
      sessionStorage.setItem('name', '1');
    }
    if (!sessionStorage.getItem('name1')) {
      sessionStorage.setItem('name1', 'sub1');
    }
    this.state = {
      collapsed: false,
      openKeys: [sessionStorage.getItem('name1')] || ['sub1'],
    };
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
          <Router>
            <Layout style={{ minHeight: '100vh' }}>
              <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
              >
                <div className="logo" />
                <Menu selectkeys={['3']} theme="dark" defaultSelectedKeys={[sessionStorage.getItem('name')]} mode="inline" onOpenChange={this.onOpenChange.bind(this)} openKeys={this.state.openKeys}>
                  <SubMenu
                    key="sub1"
                    title={<span><Icon type="file-search" /><span>日志查询</span></span>}
                  >
                    <Menu.Item key="1"><Link onClick={this._click.bind(this, 1, 'sub1')} to="/conditionquery">条件查询</Link></Menu.Item>
                    <Menu.Item key="2"><Link onClick={this._click.bind(this, 2, 'sub1')} to="/realtion">实时查询</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={<span><Icon type="audit" /><span>日志统计</span></span>}
                  >
                    <Menu.Item key="3"><Link onClick={this._click.bind(this, 3, 'sub2')} to='/statistics'>字段统计</Link></Menu.Item>
                    <Menu.Item key="4"><Link onClick={this._click.bind(this, 4, 'sub2')} to='/abnormal'>异常统计</Link></Menu.Item>
                    <Menu.Item key="5"><Link onClick={this._click.bind(this, 5, 'sub2')} to='/slowrequest'>慢请求统计</Link></Menu.Item>
                    <Menu.Item key="6"><Link onClick={this._click.bind(this, 6, 'sub2')} to='/most'>最频繁请求统计</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={<span><Icon type="alert" /><span>告警处理</span></span>}
                  >
                    <Menu.Item key="7"><Link onClick={this._click.bind(this, 7, 'sub3')} to='/setWarning'>告警设置</Link></Menu.Item>
                    <Menu.Item key="8"><Link onClick={this._click.bind(this, 8, 'sub3')} to='/recordWarning'>告警记录</Link></Menu.Item>
                    <Menu.Item key="9"><Link onClick={this._click.bind(this, 9, 'sub3')} to='/informWarning'>告警通知组</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title={<span><Icon type="cluster" /><span>问题分析</span></span>}
                  >
                    <Menu.Item key="10"><Link onClick={this._click.bind(this, 10, 'sub4')} to='/analyze'>问题分析</Link></Menu.Item>
                    <Menu.Item key="11"><Link onClick={this._click.bind(this, 11, 'sub4')} to='/monito'>资源监控</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub5"
                    title={<span><Icon type="setting" /><span>配置</span></span>}
                  >
                    <Menu.Item key="11"><Link onClick={this._click.bind(this, 12, 'sub5')} to='/configure'>配置</Link></Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout>
                <Switch>
                  <Route path="/conditionquery" component={ConditionQuery} />
                  <Route path="/realtion" component={RealTion} />
                  <Route path="/statistics" component={Statistics} />
                  <Route path="/configure" component={Configure} />
                  <Route path="/abnormal" component={Abnormal} />
                  <Route path="/slowrequest" component={SlowRequest} />
                  <Route path="/most" component={Most} />
                  <Route path="/setWarning" exact component={SetWarning} />
                  <Route path="/recordWarning" component={RecordWarning} />
                  <Route path="/informWarning" component={InformWarning} />
                  <Route path="/analyze" component={Analyze} />
                  <Route path="/monito" component={Monito} />
                  <Route path="/setWarning/warn_detail" component={WarnDetail} />
                  <Route path="/setWarning/CPU_detail" component={CPUDDetail} />
                  <Redirect from="/" to="/conditionquery" />
                </Switch>
              </Layout>
            </Layout>
          </Router>
        </Provider>
      </LocaleProvider>
    );
  }
  _click(type, type2) {
    sessionStorage.setItem('name1', type2);
    switch (type) {
      case 1:
        sessionStorage.setItem('name', '1');
        break;
      case 2:
        sessionStorage.setItem('name', '2');
        break;
      case 3:
        sessionStorage.setItem('name', '3');
        break;
      case 4:
        sessionStorage.setItem('name', '4');
        break;
      case 5:
        sessionStorage.setItem('name', '5');
        break;
      case 6:
        sessionStorage.setItem('name', '6');
        break;
      case 7:
        sessionStorage.setItem('name', '7');
        break;
      case 8:
        sessionStorage.setItem('name', '8');
        break;
      case 9:
        sessionStorage.setItem('name', '9');
        break;
      case 10:
        sessionStorage.setItem('name', '10');
        break;
      case 11:
        sessionStorage.setItem('name', '11');
        break;
      case 12:
        sessionStorage.setItem('name', '12');
        break;
      default:
        break;
    }
    this.setState({
      openKeys: [type2]
    })
  }
}

export default App;
