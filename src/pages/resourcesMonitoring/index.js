import React, { Component } from 'react'
import { Card, Tabs } from "antd"
import Tab1 from "./tab1"
import Tab2 from "./tab2"
import "./index.less"
const TabPane = Tabs.TabPane;
export default class ResourcesM extends Component {

    render() {
        return (
            <div className="resourcesm_bigBox" >
                <Card className="tabsCard" >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="资源监控图" key="1"><Tab1 /></TabPane>
                        <TabPane tab="集群监控" key="2"><Tab2 /></TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}
