import React, { Component } from 'react';
import jsplumb from 'jsplumb';
import "./index.less"
const jsPlumbIn = jsplumb.jsPlumb;
class Jsplumb extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        jsPlumbIn.ready(function () {
            console.log(jsPlumbIn.getInstance())
            var common = {
                endpoint: 'Rectangle',
                connector: ['Bezier'],
                anchor: ['Left', 'Right']
            }
            jsPlumbIn.connect({
                source: 'item_left',
                target: 'item_right',
                paintStyle: { stroke: 'lightgray', strokeWidth: 3 },
                endpointStyle: { fill: 'yellow', outlineStroke: 'red', outlineWidth: 2 }
            }, common)

            jsPlumbIn.draggable('item_left')
            jsPlumbIn.draggable('item_right')
        })
    }

    render() {
        return (
            <div id="diagramContainer" className="diagramContainer">
                <div id='item_left' className="item" ></div>
                <div id='item_right' className="item" style={{ left: 200 }}></div>
            </div>
        );
    }
}

export default Jsplumb;