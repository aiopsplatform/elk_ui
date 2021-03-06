import React, { Component } from 'react'
import { Layout, Menu, Icon, LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"
import TJQuery from "./pages/tjquery"
import RealyTQuery from "./pages/realyTquery"
import FieldInfo from "./pages/fieldInfo"
import AbnormalInfo from "./pages/abnormalInfo"
import SlowInfo from "./pages/slowInfo"
import OftenInfo from "./pages/oftenInfo"
import LogTraffic from "./pages/logTraffic"
import LogTrend from "./pages/logTrend"
import MediaManagement from "./pages/mediaManagement"
import WarningSet from "./pages/warningSet"
// import WarningRecord from "./pages/warningRecord"
import WarningInform from "./pages/warningInform"
import Configure from "./pages/configure"
import WarnDetail from "./pages/warnDetail"
import CPUDDetail from "./pages/warnCPU"
import Analyze from "./pages/analyze"
import SystemPrediction from "./pages/systemPrediction"
import CallLinkPrediction from "./pages/callLinkPrediction"
import RequestTime from "./pages/requestTime"
import BaselinePrediction from "./pages/baselinePrediction"
import ResourcesM from "./pages/resourcesMonitoring"
import AbnormalConfig from "./pages/abnormalConfig"
import MonitoredMethod from "./pages/monitoredMethod"
import ApplicationMethod from "./pages/applicationMethod"
import { Provider } from "react-redux";
import store from "./store"
import Login from './pages/login/login'
import Topo from "./pages/topo/jsplumb"
import JTopo from "./pages/jtopo/index"
import D3topo from './pages/D3'
import "./style/loading.less"
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
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];
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
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={<span><Icon type="exception" /><span>日志分析</span></span>}
                  >
                    <Menu.Item key="5"><Link onClick={this._click.bind(this, 5, 'sub3')} to='/slowrequest'>慢请求分析</Link></Menu.Item>
                    <Menu.Item key="6"><Link onClick={this._click.bind(this, 6, 'sub3')} to='/most'>最频繁请求分析</Link></Menu.Item>
                    <Menu.Item key="7"><Link onClick={this._click.bind(this, 7, 'sub3')} to='/logTraffic'>日志容量分析</Link></Menu.Item>
                    <Menu.Item key="8"><Link onClick={this._click.bind(this, 8, 'sub3')} to='/logTrend'>日志趋势分析</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title={<span><Icon type="profile" /><span>介质管理</span></span>}
                  >
                    <Menu.Item key="9"><Link onClick={this._click.bind(this, 9, 'sub4')} to='/mediaManagement'>介质管理</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub5"
                    title={<span><Icon type="alert" /><span>告警管理</span></span>}
                  >
                    <Menu.Item key="10"><Link onClick={this._click.bind(this, 10, 'sub5')} to='/setWarning'>告警设置</Link></Menu.Item>
                    {/* <Menu.Item key="11"><Link onClick={this._click.bind(this, 11, 'sub4')} to='/recordWarning'>告警记录</Link></Menu.Item> */}
                    <Menu.Item key="12"><Link onClick={this._click.bind(this, 12, 'sub5')} to='/informWarning'>告警通知组</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub6"
                    title={<span><Icon type="cluster" /><span>问题分析</span></span>}
                  >
                    <Menu.Item key="21"><Link onClick={this._click.bind(this, 21, 'sub6')} to='/monitoredMethod'>被监控方法</Link></Menu.Item>
                    <Menu.Item key="22"><Link onClick={this._click.bind(this, 22, 'sub6')} to='/applicationMethod'>应用程序方法</Link></Menu.Item>
                    <Menu.Item key="13"><Link onClick={this._click.bind(this, 13, 'sub6')} to='/analyze'>链路分析</Link></Menu.Item>
                    <Menu.Item key="14"><Link onClick={this._click.bind(this, 14, 'sub6')} to='/monito'>资源监控</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub7"
                    title={<span><Icon type="crown" /><span>智能预测</span></span>}
                  >
                    <Menu.Item key="15"><Link onClick={this._click.bind(this, 15, 'sub7')} to='/systemPrediction'>系统资源预测</Link></Menu.Item>
                    <Menu.Item key="16"><Link onClick={this._click.bind(this, 16, 'sub7')} to='/callLinkPrediction'>调用链路预测</Link></Menu.Item>
                    <Menu.Item key="17"><Link onClick={this._click.bind(this, 17, 'sub7')} to='/requestTime'>请求耗时预测</Link></Menu.Item>
                    <Menu.Item key="18"><Link onClick={this._click.bind(this, 18, 'sub7')} to='/baselinePrediction'>基线预测</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub8"
                    title={<span><Icon type="setting" /><span>配置</span></span>}
                  >
                    <Menu.Item key="19"><Link onClick={this._click.bind(this, 19, 'sub8')} to='/configure'>grok规则</Link></Menu.Item>
                    <Menu.Item key="20"><Link onClick={this._click.bind(this, 20, 'sub8')} to='/abnormalConfig'>异常配置</Link></Menu.Item>
                    <Menu.Item key="23"><Link onClick={this._click.bind(this, 23, 'sub8')} to='/jsplumb'>拓扑图</Link></Menu.Item>
                    <Menu.Item key="24"><Link onClick={this._click.bind(this, 24, 'sub8')} to='/jtopo'>itopo拓扑图</Link></Menu.Item>
                    <Menu.Item key="25"><Link onClick={this._click.bind(this, 25, 'sub8')} to='/d3topo'>D3拓扑图</Link></Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout>
                <Switch>
                  <Route path="/conditionquery" component={TJQuery} />
                  <Route path="/realtion" component={RealyTQuery} />
                  <Route path="/statistics" component={FieldInfo} />
                  <Route path="/configure" component={Configure} />
                  <Route path="/abnormal" component={AbnormalInfo} />
                  <Route path="/slowrequest" component={SlowInfo} />
                  <Route path="/most" component={OftenInfo} />
                  <Route path="/logTraffic" component={LogTraffic} />
                  <Route path="/logTrend" component={LogTrend} />
                  <Route path="/mediaManagement" component={MediaManagement} />
                  <Route path="/setWarning" exact component={WarningSet} />
                  {/* <Route path="/recordWarning" component={WarningRecord} /> */}
                  <Route path="/informWarning" component={WarningInform} />
                  <Route path="/analyze" component={Analyze} />
                  <Route path="/monito" component={ResourcesM} />
                  <Route path="/systemPrediction" component={SystemPrediction} />
                  <Route path="/callLinkPrediction" component={CallLinkPrediction} />
                  <Route path="/requestTime" component={RequestTime} />
                  <Route path="/baselinePrediction" component={BaselinePrediction} />
                  <Route path="/abnormalConfig" component={AbnormalConfig} />
                  <Route path="/monitoredMethod" component={MonitoredMethod} />
                  <Route path="/applicationMethod" component={ApplicationMethod} />
                  <Route path="/setWarning/warn_detail" component={WarnDetail} />
                  <Route path="/setWarning/CPU_detail" component={CPUDDetail} />
                  <Route path="/jsplumb" component={Topo} />
                  <Route path="/jtopo" component={JTopo} />
                  <Route path="/d3topo" component={D3topo} />
                  <Route path="/login" component={Login} />
                  <Redirect from="/" to="/login" />
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
      case 13:
        sessionStorage.setItem('name', '13');
        break;
      case 14:
        sessionStorage.setItem('name', '14');
        break;
      case 15:
        sessionStorage.setItem('name', '15');
        break;
      case 16:
        sessionStorage.setItem('name', '16');
        break;
      case 17:
        sessionStorage.setItem('name', '17');
        break;
      case 18:
        sessionStorage.setItem('name', '18');
        break;
      case 19:
        sessionStorage.setItem('name', '19');
        break;
      case 20:
        sessionStorage.setItem('name', '20');
        break;
      case 21:
        sessionStorage.setItem('name', '21');
        break;
      case 22:
        sessionStorage.setItem('name', '22');
        break;
      case 23:
        sessionStorage.setItem('name', '23');
        break;
      case 24:
        sessionStorage.setItem('name', '24');
        break;
      case 25:
        sessionStorage.setItem('name', '25');
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
