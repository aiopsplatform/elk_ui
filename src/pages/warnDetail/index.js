// import React from 'react'
// import { Card, Button, Icon } from 'antd'
// import "./index.less"
// export default class WarnDetail extends React.Component {
//     render() {
//         return (<div className="warndetail_box">
//             <Card className="warndetail_headerCard" >
//                 <p className="p_button">
//                     <Button type="primary" onClick={this.handleBack} icon="left" >返回</Button>
//                 </p>
//                 <p className="p_pp"></p>
//                 <span className="p_title">告警内存</span>
//             </Card>
//             <Card>
//                 <div className="leftDetail" >
//                     <div className="leftDetail_title">
//                         <span className="span_jbsx">基本属性</span>
//                     </div>
//                     <div className="leftDetail_body">
//                         <p className="leftDetail_cont">
//                             <span className="span_lable" >策略名称 : </span>
//                             <span>内存告警</span>
//                         </p>
//                         <p className="leftDetail_cont">
//                             <span className="span_lable" >策略名称 : </span>
//                             <span>内存告警</span>
//                         </p>
//                     </div>
//                 </div>
//                 <div className="rightDetail" >
//                     <div className="rightDetail_title">
//                         <span className="span_jbsx">规则</span>
//                     </div>
//                     <div className="rightDetail_hint">
//                         <span className="span_hint">提示 : 当任意规则满足提示时,该策略属于触发状态!</span>
//                     </div>
//                     <div style={{ marginTop: 20 }}>
//                         <Button type="primary" onClick={this.handlesx} style={{ marginLeft: 40 }}><Icon type="sync" />刷新</Button>
//                         <Button style={{ marginLeft: 20 }} ><Icon type="delete" />删除</Button>
//                     </div>
//                     <Table
//                         rowSelection={rowCheckSelection}
//                         columns={columns}
//                         dataSource={this.state.list}
//                         pagination={this.state.pagination}
//                     />
//                 </div>
//             </Card>
//         </div>)
//     }
// }