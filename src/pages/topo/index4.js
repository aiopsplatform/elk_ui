import React, { Component } from 'react';
import jsPlumb from 'jsplumb';
import "./index.less"
import wx from "./img/wx.jpg"
import qq from "./img/qq.jpg"
const jsPlumbIn = jsPlumb.jsPlumb;
class index4 extends Component {

    componentDidMount() {
        jsPlumbIn.ready(function () {

            var common = {
                isSource: true,
                isTarget: true,
                endpoint: 'Dot',
                connector: ['Bezier'],
                anchor: ['Bottom', 'Top']
            }


            jsPlumbIn.connect({
                source: 'item_left',
                target: 'item_right',
                paintStyle: { stroke: 'lightgray', strokeWidth: 3 },
                endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 },
                overlays: [
                    ['Arrow', { width: 12, length: 12, location: 0.8 }],
                    ['Label', { label: "10", padding: '10' }]
                ]
            }, common)

            jsPlumbIn.bind('click', function (connector, originalEvent) {
                if (window.prompt('确定删除所点击的链接吗？ 输入1确定') === '1') {
                    jsPlumbIn.detach(connector)
                }
            })


            jsPlumbIn.draggable('item_left')
            jsPlumbIn.draggable('item_right')
        })

    }

    render() {
        return (
            <div id="diagramContainer" className="diagramContainer">
                <div id='item_left' className="item" ><img src={wx} /></div>
                <div id='item_right' className="item" style={{ left: 200 }}><img src={qq} /></div>
            </div>
        );
    }
}

export default index4;