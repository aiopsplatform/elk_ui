import React, { Component } from 'react'
import { Card, Tabs } from "antd"
import Tab1 from "./tab1"
import Tab2 from "./tab2"
import { connect } from "react-redux"
import { getData_locast } from "../../action/actioncreator"
import "./index.less"
const TabPane = Tabs.TabPane;
class ResourcesM extends Component {
    
    componentDidMount(){
        this.props.getList();
    }
    render() {
        let { inputBoxData } = this.props;
        return (
            <div className="resourcesm_bigBox" >
                <Card className="tabsCard" >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="资源监控图" key="1" ><Tab1 inputBoxData={inputBoxData} /></TabPane>
                        <TabPane tab="集群监控" key="2"><Tab2 /></TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    inputBoxData: state.query.inputBoxData
})

const mapDispatchToProps = (dispatch) => ({
    getList() {
        dispatch(getData_locast())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ResourcesM)
