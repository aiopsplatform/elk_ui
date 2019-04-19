
import React from 'react';
import { Modal } from 'antd';
import jsplumb from 'jsplumb';
const { confirm } = Modal;
const jsPlumbIn = jsplumb.jsPlumb;
//空心圆端点样式设置
let hollowCircle = {
    endpoint: ["Dot", { radius: 7 }], // 端点的形状
    isSource: true, // 是否可以拖动（作为连线起点）
    connector: ["Flowchart", { stub: [0, 0], gap: 10, cornerRadius: 5, alwaysRespectStubs: true }],
    // 连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
    isTarget: true, // 是否可以放置（连线终点）
    maxConnections: 10, // 设置连接点最多可以连接几条线
};
export default class JsplumbTest extends React.Component {
    jsPlumbInstance = null;
    state = {
        selectConn: null
    }
    componentDidMount() {
        let self = this;
        this.jsPlumbInstance = jsPlumbIn.getInstance({
            PaintStyle: { lineWidth: 1, stroke: '#89bcde' },
            HoverPaintStyle: { stroke: "#FF6600", lineWidth: 3 },

            Endpoints: [
                ["Dot", { radius: 2 }],
                "Blank",
            ],
            MaxConnections: -1,
            EndpointStyle: { fill: "#89bcde" },
            EndpointHoverStyle: { fill: "#FF6600" },
            ConnectionOverlays: [
                ["Label", {
                    id: "label", cssClass: "aLabel", visible: true, events: {
                        "click": function (label, evt) {
                            // alert("clicked on label for connection " + label.component.id);
                        },
                    },
                }],
                // 这个是鼠标拉出来的线的属性
            ],
        });
        self.jsPlumbInstance.ready(function () {
            self.jsPlumbInstance.bind('beforeDrop', function (conn) {
                //避免源节点和目标节点未同一个
                let sourceId = conn.sourceId,
                    targetId = conn.targetId;
                if (sourceId === targetId) {
                    return false;
                } else {
                    return true;
                }
            })
        });
        self.jsPlumbInstance.bind("connection", function (connInfo, originalEvent) {
            //连线时动作
            //例如给连线添加label文字
            let connection = connInfo.connection;
            let labelText = '未命名';
            connection.getOverlay("label").setLabel(labelText);
        });

        // jsPlumbIn.bind("dblclick", function (conn, originalEvent) {
        //     //双击事件
        //     self.setState({ selectConn: conn})
        //     if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
        // });

        // self.jsPlumbInstance.bind("contextmenu", function (component, e) {
        //     //连线鼠标右击事件
        // });
    }

    //因为我采用的时点击添加按钮，添加一个流程框  ，然后对流程框绑定四个锚点，所以以下方法针对我这个方案

    id = 0;

    // add = () => {
    //     let self = this;
    //     let id = this.id++;
    //     $("#cavans").append(
    //         '<div id="' + id + '" >未命名流程框</div>');
    //     $("#" + id).css("left", 0).css("top", 0);
    //     $("#" + id).addClass(styles.node);//less
    //     this.addPoint(id);//添加锚点
    //     this.jsPlumbInstance.draggable(id, { containment: "right" });//可移动
    // }
    //添加锚点
    // addPoint = (id) => {
    //     const self = this;
    //     self.jsPlumbInstance.addEndpoint(id, { anchors: "Top", id: id + "Top" }, hollowCircle);
    //     self.jsPlumbInstance.addEndpoint(id, { anchors: "Bottom", id: id + "Bottom" }, hollowCircle);
    //     self.jsPlumbInstance.addEndpoint(id, { anchors: "Right", id: id + "Right" }, hollowCircle);
    //     self.jsPlumbInstance.addEndpoint(id, { anchors: "Left", id: id + "Left" }, hollowCircle);
    // }

    //下面补充一些删除方法，给已有流程框连线等方法

    //删除流程框
    // delete = () => {
    //     let ids = [1, 2, 3, 4, 5]//之前画的流程框id集合
    //     for (let i of ids) {
    //         this.jsPlumbInstance.remove(i)
    //     }
    // }

    //删除连线
    // deleteLine = () => {
    //     //selectConn 为连线点击时获取的conn
    //     this.jsPlumbInstance.deleteConnection(this.state.selectConn)
    // }

    //为已有流程框连线 设置文字
    // connectAndLabel = () => {
    //     //source target 为之前设置的流程框id
    //     this.jsPlumbInstance.connect({
    //         source: "test1",
    //         target: "test2",
    //         anchors: ["Right", "Left"],
    //         ...hollowCircle,
    //     });

    //     //setLabel
    //     this.jsPlumbInstance.getConnections({
    //         source: "test1",
    //         target: "test2",
    //     })[0].getOverlay('label').setLabel(12345);
    // }




    render() {
        //div内容：一个添加按钮 ，一个画图区
        return <div>
            <div id="cavans" style={{width:'100%',height:'600px'}} ></div>
        </div>
    }
}