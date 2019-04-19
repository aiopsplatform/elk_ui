import React, { Component } from 'react';
import JTopo from 'jtopo'
import img from './static/aa.png'
class Jtopo extends Component {
    componentDidMount() {
        this.ready()
    }

    ready() {
        const option = {
            canvas: this.refs.mycanvas, // required
            isScale: false,
            imageSrc: img,
            name: 'aa'
        }
        let stage = new JTopo.Stage(option)
        var scene = new JTopo.Scene(stage); // 创建一个场景对象

        var cloudNode = new JTopo.Node('root');
        cloudNode.setSize(300, 26);
        cloudNode.setLocation(360, 130);
        cloudNode.layout = { type: 'tree', width: 180, height: 100 }

        stage.add(cloudNode);

        for (var i = 1; i < 4; i++) {
            var node = new JTopo.CircleNode('host' + i);
            node.fillStyle = '200,255,0';
            node.radius = 15;
            node.setLocation(stage.width * Math.random(), stage.height * Math.random());
            node.layout = { type: 'tree', width: 50, height: 100 };

            stage.add(node);

            var link = new JTopo.Link(cloudNode, node);
            stage.add(link);

            for (var j = 0; j < 4; j++) {
                var vmNode = new JTopo.CircleNode('vm-' + i + '-' + j);
                vmNode.radius = 10;
                vmNode.fillStyle = '255,255,0';
                vmNode.setLocation(stage.width * Math.random(), stage.height * Math.random());
                stage.add(vmNode);
                stage.add(new JTopo.Link(node, vmNode));
            }

        }

        JTopo.layout.layoutNode(stage, cloudNode, true);
        stage.addEventListener('mouseup', function (e) {
            if (e.target && e.target.layout) {
                JTopo.layout.layoutNode(stage, e.target, true);
            }
        });

    }
    render() {
        return (
            <div>
                <canvas ref="mycanvas" width="1000" height="400" ></canvas>
            </div>
        );
    }
}

export default Jtopo;


